import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from './utils/styletron';
import {HelmetProvider} from "react-helmet-async";

const AppWrapped = ({ app }: { app: JSX.Element }) => (
  <StyletronProvider value={styletron}>
    <HelmetProvider>
      {app}
    </HelmetProvider>
  </StyletronProvider>
);

export function renderApp(app: JSX.Element) {
  ReactDOM.createRoot(document.getElementById('anthaathi-root')!).render(
    <React.StrictMode>
      <AppWrapped app={app} />
    </React.StrictMode>,
  );
}
