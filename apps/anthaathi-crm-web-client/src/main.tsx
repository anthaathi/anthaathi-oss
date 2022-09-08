import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import './index.css';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { appTheme } from './Utils/theme/app-theme';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import env from './Utils/relay/env';

const engine = new Styletron({ prefix: '_' });

const renderRoot = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

renderRoot.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={env}>
      <RecoilRoot>
        <StyletronProvider value={engine}>
          <BaseProvider theme={appTheme} zIndex={110}>
            <BrowserRouter>
              <Suspense fallback={<>Loading</>}>
                <App />
              </Suspense>
            </BrowserRouter>
          </BaseProvider>
        </StyletronProvider>
      </RecoilRoot>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
