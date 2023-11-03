/* eslint-disable no-console */

import { BigNumber } from 'ethers';
import { default as hre, ethers } from 'hardhat';

import { SoulKeys__factory } from '../../typechain';

// const WEI = 0.000000001;
const FIVE_PERCENT_IN_WEI = BigNumber.from('50000000000000000'); // (1.0 / WEI) * 0.05;

async function main() {
  try {
    const { deployer, feeDestination } = await hre.getNamedAccounts();

    const deployed_soulkeys = await hre.deployments.get('SoulKeys');

    // use deployer account - which has perms for setting the fees
    const signer = await ethers.getSigner(deployer);

    const soulKeys = SoulKeys__factory.connect(
      deployed_soulkeys.implementation || '',
      signer
    ).attach(deployed_soulkeys.address);

    // set mint fee
    const setFeeTx = await soulKeys.setFeeDestination(feeDestination);

    console.log(
      `soulKeys.setFeeDestination set to: `,
      feeDestination,
      ' with tx: ',
      setFeeTx.hash
    );

    const setProtocolFeeTx = await soulKeys.setProtocolFeePercent(
      FIVE_PERCENT_IN_WEI
    );
    console.log(
      'setProtocolFee to ',
      FIVE_PERCENT_IN_WEI,
      ' with tx: ',
      setProtocolFeeTx.hash
    );
    const setSubjectFeeTx = await soulKeys.setSubjectFeePercent(
      FIVE_PERCENT_IN_WEI
    );
    console.log(
      'setSubjectFee to ',
      FIVE_PERCENT_IN_WEI,
      ' with tx: ',
      setSubjectFeeTx.hash
    );
  } catch (e) {
    console.log(e);
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});