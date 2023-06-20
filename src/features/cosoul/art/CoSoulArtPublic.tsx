import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { CosoulArtData } from '../../../../api/cosoul/art/[artTokenId]';

import { CoSoulArt } from './CoSoulArt';

export const CoSoulArtPublic = () => {
  const params = useParams();
  const artTokenId = Number(params.tokenId);

  const { data } = useQuery(
    ['cosoul_art_data', artTokenId],
    async (): Promise<CosoulArtData> => {
      const res = await fetch('/api/cosoul/art/' + artTokenId);
      if (res.status === 404) {
        throw new Error('No cosoul exists for tokenId ' + artTokenId);
      } else if (!res.ok) {
        throw new Error('Failed to fetch cosoul data');
      }
      return res.json();
    },
    {
      enabled: !!artTokenId,
      retry: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  if (!!data?.address && data?.pGive >= 0) {
    return (
      <CoSoulArt pGive={data.pGive} address={data.address} animate={true} />
    );
  } else {
    return <>No CoSoul exists for this tokenId</>;
  }
};
