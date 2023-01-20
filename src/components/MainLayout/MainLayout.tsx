import { Suspense, useContext } from 'react';

import { RequireAuth } from 'features/auth';

import { SideNav } from '../../features/nav/SideNav';
import { ThemeContext } from '../../features/theming/ThemeProvider';
import HelpButton from '../HelpButton';
import { GlobalUi, SentryScopeController } from 'components';
import { AppRoutes } from 'routes/routes';
import { Box, Flex } from 'ui';

import { MainHeader } from './MainHeader';

// this component sets up the top navigation bar to stay fixed on-screen and
// have content scroll underneath it

export const MainLayout = () => {
  const { themePreference } = useContext(ThemeContext);

  return (
    <Box
      css={{
        position: 'fixed',
        background: '$background',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        '& > main': { flex: 1, flexGrow: 1 },
      }}
    >
      <Flex css={{ height: '100vh' }}>
        {/*// TODO(rebrand): remove this after rebrand launch*/}
        {(themePreference == 'dark' || themePreference == 'light') && (
          <SideNav />
        )}
        <Box css={{ width: '100%' }}>
          {/*// TODO(rebrand): remove this after rebrand launch*/}
          {themePreference != 'dark' && themePreference != 'light' && (
            <MainHeader />
          )}
          <RequireAuth>
            <Suspense fallback={null}>
              <Box
                as="main"
                css={{
                  height: '100vh',
                  overflowY: 'auto',
                  '@sm': { zIndex: 1 }, // for hamburger menu
                }}
              >
                <GlobalUi />
                <SentryScopeController />
                <AppRoutes />
              </Box>
              <HelpButton />
            </Suspense>
          </RequireAuth>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;

// this is in this file because it depends on the <main> tag defined above
export const scrollToTop = () => {
  document.getElementsByTagName('main')[0].scrollTop = 0;
};
