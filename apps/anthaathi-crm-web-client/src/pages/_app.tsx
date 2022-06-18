import React, {useMemo} from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider, LightTheme} from 'baseui';
import {getClientEnvironment} from '../lib/client-env';
import {getInitialPreloadedQuery, getRelayProps} from 'relay-nextjs/app';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import {DefaultLayout, CommonAppProvider} from '@anthaathi/web-lib';
import {WebProvider} from '@anthaathi/web-lib';
import SidebarMenuItems from '../components/SidebarMenuItems';

const clientEnv = getClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  createClientEnvironment: () => getClientEnvironment() as never,
});

export default ({Component, pageProps}) => {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  const env = relayProps.preloadedQuery?.environment ?? clientEnv;

  return (
    <RelayEnvironmentProvider environment={env as never}>
      <WebProvider lang="en-US">
        <CommonAppProvider>
          <DefaultLayout sidebarMenuItem={<SidebarMenuItems />}>
            <Component {...pageProps} />
          </DefaultLayout>
        </CommonAppProvider>
      </WebProvider>
    </RelayEnvironmentProvider>
  );
};
