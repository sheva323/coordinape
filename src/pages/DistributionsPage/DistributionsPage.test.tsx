import { AddressZero } from '@ethersproject/constants';
import { act, render, screen, waitFor } from '@testing-library/react';
import { Contracts } from 'lib/vaults';
import pick from 'lodash/pick';
import { DateTime } from 'luxon';

import {
  restoreSnapshot,
  takeSnapshot,
  TestWrapper,
  provider,
} from 'utils/testing';

import { DistributionsPage } from './DistributionsPage';
import { getEpochData } from './queries';

jest.setTimeout(10000);

jest.mock('features/auth/useLoginData', () => ({
  useMyUser: () => ({ id: 1, role: 1 }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ epochId: '5', circleId: '2' }),
}));

jest.mock('./queries', () => ({
  getEpochData: jest.fn(),
  usePreviousDistributions: jest.fn().mockImplementation(() => ({
    data: {
      id: 2,
      vault_id: 2,
      distribution_json: {},
    },
  })),
  useSubmitDistribution: jest.fn(),
  getPreviousLockedTokenDistribution: jest.fn(async () => null),
}));

jest.mock('hooks/gql/useCircleIntegrations', () => ({
  useCircleIntegrations: () => [],
}));

const recipient = {
  id: 21,
  profile: {
    id: 777,
    name: 'Mock User 1',
    address: '0x63c389CB2C573dd3c9239A13a3eb65935Ddb5e2e',
  },
};
let mockEpochData: any;
let snapshotId: string;

beforeAll(async () => {
  snapshotId = await takeSnapshot();
  const contracts = await Contracts.fromProvider(provider());
  const symbol = 'USDC';
  const vault = await contracts.createVault(symbol, true);
  const mockVaultId = 2;

  mockEpochData = {
    id: 5,
    ended: true,
    start_date: DateTime.now().minus({ days: 1 }),
    end_date: DateTime.now().plus({ days: 1 }),
    number: 4,
    circle: {
      id: 2,
      name: 'Mock Circle',
      users: [
        recipient,
        {
          id: 22,
          profile: {
            id: 778,
            name: 'Mock User 2',
            address: '0x63c389CB2C573dd8A9239A16a3eb65935Ddb5e2f',
          },
        },
      ],
      fixed_payment_vault_id: mockVaultId,
      fixed_payment_token_type: symbol,
      organization: {
        vaults: [
          {
            id: mockVaultId,
            symbol,
            decimals: 6,
            vault_address: vault.address,
            simple_token_address: AddressZero,
          },
        ],
      },
    },
    token_gifts: [
      {
        tokens: 100,
        recipient: pick(recipient, ['id', 'name', 'address', 'profile']),
      },
    ],
    distributions: [],
  };
});

afterAll(async () => {
  await restoreSnapshot(snapshotId);
});

test('render without a distribution', async () => {
  (getEpochData as jest.Mock).mockImplementation(async () => mockEpochData);

  await act(async () => {
    await render(
      <TestWrapper withWeb3>
        <DistributionsPage />
      </TestWrapper>
    );
  });

  await waitFor(() => {
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });
  expect(screen.getByText('Gift Circle')).toBeInTheDocument();
  expect(screen.getByText('Please input a token amount')).toBeInTheDocument();
});

test('render with a distribution', async () => {
  (getEpochData as jest.Mock).mockImplementation(async () => ({
    ...mockEpochData,
    distributions: [
      {
        created_at: '2022-04-27T00:28:03.27622',
        total_amount: '10000000',
        gift_amount: 500,
        fixed_amount: 5000,
        distribution_type: 1,
        distribution_json: {},
        vault: {
          ...mockEpochData.circle.organization.vaults[0],
          price_per_share: 1.08,
        },
        claims: [
          {
            address: '0x63c389CB2C573dd3c9239A13a3eb65935Ddb5e2e',
            new_amount: 10,
            profile_id: recipient.profile.id,
          },
        ],
      },
    ],
  }));

  await act(async () => {
    await render(
      <TestWrapper withWeb3>
        <DistributionsPage />
      </TestWrapper>
    );
  });

  await waitFor(
    () => {
      expect(screen.getByText('Mock User 1')).toBeInTheDocument();
      expect(screen.queryByText('Avail...')).not.toBeInTheDocument();
    },
    { timeout: 5000 }
  );

  expect(screen.getAllByText('10.80 Yearn USDC').length).toEqual(2);
});

test('render with no allocations', async () => {
  (getEpochData as jest.Mock).mockImplementation(async () => ({
    ...mockEpochData,
    token_gifts: [],
  }));

  await act(async () => {
    await render(
      <TestWrapper withWeb3>
        <DistributionsPage />
      </TestWrapper>
    );
  });

  await waitFor(
    () => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(screen.queryByText('Avail...')).not.toBeInTheDocument();
    },
    { timeout: 5000 }
  );

  expect(screen.getByText('Gift Circle')).toBeInTheDocument();
  expect(
    screen.getAllByText(/Yearn USDC/i)[0].closest('button[role="combobox"]')
  ).toBeDisabled();
});

test('render with no vaults', async () => {
  (getEpochData as jest.Mock).mockImplementation(() => ({
    ...mockEpochData,
    circle: {
      ...mockEpochData.circle,
      fixed_payment_vault_id: null,
      fixed_payment_token_type: null,
      organization: { vaults: [] },
    },
  }));

  await act(async () => {
    await render(
      <TestWrapper withWeb3>
        <DistributionsPage />
      </TestWrapper>
    );
  });

  await waitFor(() => {
    expect(screen.getByText('Mock User 1')).toBeInTheDocument();
    expect(screen.queryByText('Avail...')).not.toBeInTheDocument();
  });

  expect(screen.getByRole('textbox', { name: /amount/i })).not.toBeDisabled();
});
