import * as React from 'react';
import { render } from 'react-dom';
import { CommonAppProvider, WebProvider } from '@anthaathi/web-lib';
import { Resolver } from 'found-relay';
import { IntlProvider } from 'react-intl';
import env from './Config/Relay/env';
import App from './App';
import './index.css';
// @ts-ignore
import enUS from '../locales/compiled-locales/en-US.json';

// TODO: FIX WHEN https://github.com/4Catalyzer/found/issues/961 closes
render(
  <React.StrictMode>
    <IntlProvider locale="en-US" messages={enUS}>
      <WebProvider lang="en-US">
        <CommonAppProvider>
          <App resolver={new Resolver(env) as never} />
        </CommonAppProvider>
      </WebProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('anthaathi-root'),
);

// ReactDOM.createRoot(document.getElementById('anthaathi-root')!).render(
//   <Main />,
// );
