import { adminClient } from '../../../../api-lib/gql/adminClient';

import {
  LINK_HOLDER_VALUE,
  LINK_HOLDING_VALUE,
  LINKS_SCORE_MAX,
} from './scoring';

export const getLinksScore = async (address: string) => {
  const { my_holders, my_holdings } = await adminClient.query(
    {
      __alias: {
        my_holders: {
          link_holders_aggregate: [
            {
              where: {
                target: {
                  _eq: address,
                },
              },
            },
            {
              aggregate: {
                sum: {
                  amount: true,
                },
              },
            },
          ],
        },
        my_holdings: {
          link_holders_aggregate: [
            {
              where: {
                holder: {
                  _eq: address,
                },
              },
            },
            {
              aggregate: {
                sum: {
                  amount: true,
                },
              },
            },
          ],
        },
      },
    },
    {
      operationName: 'getLinkScore',
    }
  );

  const myHoldings = my_holdings.aggregate?.sum?.amount ?? 0;
  const myHolders = my_holders.aggregate?.sum?.amount ?? 0;

  const linkHolderScore = myHolders * LINK_HOLDER_VALUE;
  const linkHoldingScore = myHoldings * LINK_HOLDING_VALUE;

  return Math.floor(
    Math.min(LINKS_SCORE_MAX, linkHolderScore + linkHoldingScore)
  );
};
