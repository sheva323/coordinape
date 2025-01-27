import React, { useEffect, useState } from 'react';

import { CoLinks } from '@coordinape/hardhat/dist/typechain/CoLinks';
import { ethers } from 'ethers';
import { useQuery, useQueryClient } from 'react-query';

import { useToast } from '../../hooks';
import { Key } from '../../icons/__generated';
import { client } from '../../lib/gql/client';
import { Avatar, Button, Flex, Text } from '../../ui';
import { sendAndTrackTx } from '../../utils/contractHelpers';

import { QUERY_KEY_COLINKS } from './CoLinksWizard';
import { useCoLinks } from './useCoLinks';

export const BuyOrSellCoLinks = ({
  coLinks,
  chainId,
  subject,
  address,
  hideName,
}: {
  coLinks: CoLinks;
  chainId: string;
  subject: string;
  address: string;
  hideName?: boolean;
}) => {
  const { balance, refresh } = useCoLinks({ coLinks, address, subject });
  const { showError } = useToast();
  const [awaitingWallet, setAwaitingWallet] = useState<boolean>(false);

  const [buyPrice, setBuyPrice] = useState<string | null>(null);
  const [sellPrice, setSellPrice] = useState<string | null>(null);
  const [supply, setSupply] = useState<number | null>(null);

  const subjectIsCurrentUser = subject.toLowerCase() == address.toLowerCase();

  const needsBootstrapping = subjectIsCurrentUser && balance == 0;

  const [progress, setProgress] = useState('');

  const { data: subjectProfile } = useQuery(
    [QUERY_KEY_COLINKS, subject, 'profile', 'buykeys'],
    async () => {
      const { profiles_public } = await client.query(
        {
          profiles_public: [
            {
              where: {
                address: {
                  _ilike: subject,
                },
              },
            },
            {
              id: true,
              name: true,
              avatar: true,
            },
          ],
        },
        {
          operationName: 'coLinks_profile_for_buyLinks',
        }
      );
      return profiles_public.pop();
    }
  );

  const syncLinks = async () => {
    await client.mutate(
      {
        syncLinks: { success: true },
      },
      {
        operationName: 'coLinks_sync_after_buysell',
      }
    );
  };

  useEffect(() => {
    coLinks
      .getBuyPriceAfterFee(subject, 1)
      .then(b => setBuyPrice(ethers.utils.formatEther(b) + ' ETH'))
      .catch(e => showError('Error getting buy price: ' + e.message));
    coLinks
      .linkSupply(subject)
      .then(b => {
        setSupply(b.toNumber());
        if (b.toNumber() > 0) {
          coLinks
            .getSellPriceAfterFee(subject, 1)
            .then(b => setSellPrice(ethers.utils.formatEther(b) + ' ETH'))
            .catch(e => showError('Error getting sell price: ' + e.message));
        }
      })
      .catch(e => showError('Error getting supply: ' + e.message));
  }, [balance]);

  const queryClient = useQueryClient();
  const buyKey = async () => {
    try {
      setAwaitingWallet(true);
      const value = await coLinks.getBuyPriceAfterFee(subject, 1);
      const { receipt /*, tx*/ } = await sendAndTrackTx(
        () =>
          coLinks.buyLinks(subject, 1, {
            value,
          }),
        {
          showDefault: setProgress,
          showError,
          description: `Buy CoLink`,
          signingMessage: 'Please confirm transaction in your wallet.',
          chainId: chainId,
          contract: coLinks,
        }
      );
      if (receipt) {
        setProgress('Done!');
        refresh();
        await syncLinks();
        queryClient.invalidateQueries([QUERY_KEY_COLINKS, address]);
      } else {
        showError('no transaction receipt');
      }
    } catch (e: any) {
      showError('Error buying CoLink: ' + e.message);
    } finally {
      setAwaitingWallet(false);
    }
  };

  const sellKey = async () => {
    try {
      setAwaitingWallet(true);
      const { receipt /*, tx*/ } = await sendAndTrackTx(
        () => coLinks.sellLinks(subject, 1),
        {
          showDefault: setProgress,
          showError,
          description: `Sell CoLink`,
          signingMessage: 'Please confirm transaction in your wallet.',
          chainId: chainId,
          contract: coLinks,
        }
      );
      if (receipt) {
        setProgress('Done!');
        refresh();
        await syncLinks();
      } else {
        showError('no transaction receipt');
      }
    } catch (e: any) {
      showError('Error selling CoLink: ' + e.message);
    } finally {
      setAwaitingWallet(false);
    }
  };

  if (!subjectProfile) {
    return null;
  }

  return (
    <>
      <Flex column css={{ position: 'relative', width: '100%', gap: '$sm' }}>
        <Text h2 css={{ gap: '$sm' }}>
          <Key /> You Have {balance !== null ? balance : ''}{' '}
          {subjectProfile.name} Links
        </Text>
        <Flex alignItems="center">
          {!hideName && (
            <Flex alignItems="center">
              <Avatar
                size="large"
                name={subjectProfile.name}
                path={subjectProfile.avatar}
                margin="none"
                css={{ mr: '$sm' }}
              />
              <Flex column>
                <Text h2 display css={{ color: '$secondaryButtonText' }}>
                  {subjectProfile.name}
                </Text>
                {!needsBootstrapping && (
                  <Flex css={{ gap: '$sm' }}>
                    <Text tag color={balance == 0 ? 'warning' : 'complete'}>
                      You own {balance} Key
                      {balance == 1 ? '' : 's'}
                    </Text>
                    <Text tag color="neutral">
                      {supply !== null && supply + ` Total Keys Issued`}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          )}
          {/*<Button*/}
          {/*  color="transparent"*/}
          {/*  onClick={refresh}*/}
          {/*  css={{ '&:hover': { color: '$cta' } }}*/}
          {/*>*/}
          {/*  <RefreshCcw />*/}
          {/*</Button>*/}
        </Flex>
        <Flex css={{ gap: '$md' }}>
          <Flex
            css={{
              gap: '$md',
              // border: '1px solid $cta',
              // padding: '$md $md $sm $md',
              flexGrow: 1,
            }}
            column
          >
            <Flex
              css={{
                gap: '$md',
              }}
            >
              {supply === 0 &&
              subject.toLowerCase() !== address.toLowerCase() ? (
                <Text>
                  {subjectProfile.name} hasn&apos;t opted in to CoLinks yet.
                  They need to buy their own key first.
                </Text>
              ) : (
                <Flex
                  css={{
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    width: '100%',
                  }}
                >
                  <Button
                    size={'medium'}
                    onClick={buyKey}
                    color="cta"
                    disabled={awaitingWallet}
                  >
                    Buy Link
                  </Button>
                  <Text color="complete" semibold css={{ textAlign: 'right' }}>
                    {buyPrice !== null ? buyPrice : '...'}
                  </Text>
                </Flex>
              )}
            </Flex>
            {supply !== null &&
              supply > 0 &&
              balance !== undefined &&
              balance > 0 && (
                <Flex alignItems="center" css={{ gap: '$md' }}>
                  {supply == 1 && subjectIsCurrentUser ? (
                    <Text
                      color="neutral"
                      semibold
                      size="small"
                    >{`Can't sell your last link`}</Text>
                  ) : (
                    <Flex
                      css={{
                        justifyContent: 'space-between',
                        flexGrow: 1,
                        width: '100%',
                      }}
                    >
                      <Button onClick={sellKey} disabled={awaitingWallet}>
                        Sell Key
                      </Button>
                      <Text
                        semibold
                        color="warning"
                        css={{ textAlign: 'right' }}
                      >
                        {sellPrice !== null ? sellPrice : '...'}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              )}
          </Flex>
        </Flex>
        <Flex
          css={{
            display: awaitingWallet ? 'flex' : 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            p: '$md',
            justifyItems: 'space-around',
            justifyContent: 'space-around',
            alignItems: 'center',
            textAlign: 'center',
            background: '$surfaceNested',
            zIndex: 3,
          }}
        >
          <Text color="complete" semibold>
            {progress}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
