import { order_by } from 'lib/gql/__generated__/zeus';
import { client } from 'lib/gql/client';

export const getOrgData = (orgId: number, profileId: number) =>
  client.query(
    {
      organizations_by_pk: [
        { id: orgId },
        {
          id: true,
          name: true,
          logo: true,
          telegram_id: true,
          guild_id: true,
          guild_role_id: true,
          circles: [
            {},
            {
              id: true,
              name: true,
              vouching: true,
              users: [
                { where: { profile_id: { _eq: profileId } } },
                { role: true },
              ],
              epochs: [
                {
                  where: { ended: { _eq: false }, end_date: { _gt: 'now' } },
                  order_by: [{ start_date: order_by.asc }],
                  limit: 1,
                },
                { start_date: true, end_date: true, number: true },
              ],
              nominees_aggregate: [
                {
                  where: { ended: { _eq: false }, expiry_date: { _gt: 'now' } },
                },
                { aggregate: { count: [{}, true] } },
              ],
            },
          ],
        },
      ],
    },
    {
      operationName: 'getOrgData',
    }
  );
export const QUERY_KEY_ORG_DATA = 'myOrg';
