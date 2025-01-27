import { useState } from 'react';

import { useLoginData } from 'features/auth';
import { useQuery } from 'react-query';

// import { Button } from 'ui';
import { SingleColumnLayout } from 'ui/layouts';

import { CoSoulArt } from './art/CoSoulArt';
import { CoSoulArtContainer } from './CoSoulArtContainer';
import { CoSoulComposition } from './CoSoulComposition';
import { CoSoulCreate } from './CoSoulCreate';
import { CoSoulDetails } from './CoSoulDetails';
import { CoSoulManagement } from './CoSoulManagement';
import { CoSoulProfileInfo } from './CoSoulProfileInfo';
import { getCoSoulData, QUERY_KEY_COSOUL_PAGE } from './getCoSoulData';

export const artWidthMobile = '320px';
export const artWidth = '500px';

export const MintPage = () => {
  const profile = useLoginData();
  const address = profile?.address;
  const profileId = profile?.id;
  const query = useQuery(
    [QUERY_KEY_COSOUL_PAGE, profileId, address],
    () => getCoSoulData(profileId, address as string),
    {
      enabled: !!profileId && !!address,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const cosoul_data = query.data;
  const [minted, setMinted] = useState(false);
  const coSoulMinted = !!cosoul_data?.mintInfo;

  return (
    <>
      {cosoul_data && (
        <SingleColumnLayout
          css={{
            m: 'auto',
            alignItems: 'center',
            maxWidth: '1200px',
            gap: 0,
            mb: 200,
          }}
        >
          {coSoulMinted && address ? (
            <>
              <CoSoulProfileInfo cosoul_data={cosoul_data} />
              <CoSoulManagement
                cosoul_data={cosoul_data}
                onReveal={() => setMinted(true)}
                address={address}
              />
            </>
          ) : (
            <>
              {/* <Button size="small" onClick={() => setMinted(prev => !prev)}>
                Test mint animations
              </Button> */}
              <CoSoulProfileInfo cosoul_data={cosoul_data} />
              <CoSoulCreate
                cosoul_data={cosoul_data}
                minted={minted}
                onReveal={() => setMinted(true)}
              />
              <CoSoulComposition cosoul_data={cosoul_data} minted={minted}>
                <CoSoulArtContainer cosoul_data={cosoul_data} minted={minted}>
                  <CoSoulArt pGive={cosoul_data.totalPgive} address={address} />
                </CoSoulArtContainer>
              </CoSoulComposition>
              <CoSoulDetails cosoul_data={cosoul_data} minted={minted} />
            </>
          )}
        </SingleColumnLayout>
      )}
    </>
  );
};
