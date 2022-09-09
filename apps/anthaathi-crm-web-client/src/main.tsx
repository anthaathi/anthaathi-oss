import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import './index.css';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { appTheme } from './Utils/theme/app-theme';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import env from './Utils/relay/env';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { userTokenAtom } from './Features/Authentication/atom/userToken';

dayjs.extend(relativeTime);

const engine = new Styletron({ prefix: '_' });

const renderRoot = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

const RenderApp = () => {
  const token = useRecoilValue(userTokenAtom);

  return (
    <RelayEnvironmentProvider environment={env(() => token)}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={appTheme} zIndex={110}>
          <BrowserRouter>
            <Suspense fallback={<>Loading</>}>
              <App />
            </Suspense>
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </RelayEnvironmentProvider>
  );
};

renderRoot.render(
  <React.StrictMode>
    <RecoilRoot>
      <RenderApp />
    </RecoilRoot>
  </React.StrictMode>
);
