import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from './utils/styletron';
import type { Server, Sheet } from 'styletron-engine-atomic';

export function render(
  App: React.ComponentType,
  url: string,
  context: Record<string, any>
): { html: string; stylesheets: Sheet[] } {
  const htmlElement = ReactDOMServer.renderToString(
    <HelmetProvider context={context}>
      <StyletronProvider value={styletron}>
        <App />
      </StyletronProvider>
    </HelmetProvider>
  );

  const stylesheets = (styletron as Server).getStylesheets() || [];

  return {
    html: htmlElement,
    stylesheets,
  };
}
