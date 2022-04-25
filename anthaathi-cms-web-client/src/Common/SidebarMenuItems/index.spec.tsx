import * as React from 'react';
import renderer from 'react-test-renderer';
import { makeRouteConfig, Route, createBrowserRouter } from 'found';
import SidebarMenuItems from './index';

describe('SidebarMenuItems', () => {
  it('should render it', () => {
    // This is equivalent:
    const routeConfig = makeRouteConfig(
      <Route path="/" Component={SidebarMenuItems} />,
    );

    const BrowserRouter = createBrowserRouter({
      routeConfig,

      renderError: ({ error }) => (
        <div>{error.status === 404 ? 'Not found' : 'Error'}</div>
      ),
    });

    const tree = renderer.create(<BrowserRouter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
