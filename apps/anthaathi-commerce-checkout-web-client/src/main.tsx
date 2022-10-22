import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BaseProvider, createLightTheme } from 'baseui';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import App from './App';

const engine = new Styletron({ prefix: '_' });

const Information = React.lazy(() => import('./pages/Information'));
const Shipping = React.lazy(() => import('./pages/Shipping'));
const Payment = React.lazy(() => import('./pages/Payment'));

const lightTheme = createLightTheme();

const router = createBrowserRouter([
  {
    path: ':checkout',
    element: <App />,
    children: [
      {
        path: '/:checkout/information',
        element: (
          <Suspense>
            <Information />
          </Suspense>
        ),
      },
      {
        path: '/:checkout/shipping',
        element: (
          <Suspense>
            <Shipping />
          </Suspense>
        ),
      },
      {
        path: '/:checkout/payment',
        element: (
          <Suspense>
            <Payment />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={lightTheme} zIndex={999}>
        <RouterProvider router={router} />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
);
