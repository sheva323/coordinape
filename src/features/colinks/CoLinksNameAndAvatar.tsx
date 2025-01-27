import { NavLink } from 'react-router-dom';

import { paths } from '../../routes/paths';
import { Avatar, Link, Text } from '../../ui';

export const CoLinksNameAndAvatar = ({
  avatar,
  name,
  address,
}: {
  avatar?: string; // These being optional is weird
  name?: string;
  address?: string;
}) => {
  return (
    <Link
      as={NavLink}
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '$xs',
        mr: '$xs',
      }}
      to={paths.coLinksProfile(address ?? 'FIXME')}
    >
      <Avatar path={avatar} name={name} size="small" css={{ mr: '$xs' }} />
      <Text semibold>{name}</Text>
    </Link>
  );
};
