import * as React from 'react';
import { DefaultLayout } from '@anthaathi/web-lib';
import { BrowserProtocol, queryMiddleware } from 'farce';
import { createFarceRouter, createRender } from 'found';
import { FormattedMessage } from 'react-intl';
import SidebarMenuItems from './Common/SidebarMenuItems';
import LoadingScreen from './Common/LoadingScreen';

const Content = React.lazy(() => import('./Pages/Content'));
const Intro = React.lazy(() => import('./Pages/Intro'));

export interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  return (
    <DefaultLayout sidebarMenuItem={<SidebarMenuItems />}>
      <React.Suspense fallback={<LoadingScreen />}>{children}</React.Suspense>
    </DefaultLayout>
  );
}

export default createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: [
    {
      path: '/',
      Component: App,
      children: [
        {
          path: '/',
          Component: Intro,
        },
        {
          path: '/content',
          Component: Content,
        },
        {
          path: '/loading',
          Component: LoadingScreen,
        },
      ],
    },
  ],
  render: createRender({
    renderError() {
      return (
        <App>
          <FormattedMessage defaultMessage="Page not found" id="QRccCM" />
        </App>
      );
    },
  }),
});
