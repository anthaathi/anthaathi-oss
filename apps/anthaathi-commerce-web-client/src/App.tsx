import type { Component } from 'solid-js';
import { JSX } from 'solid-js';
import { StyletronProvider } from '@anthaathi/solid-styletron';
import { AppBar } from './Features/Core/Components/AppBar';
import { MiniAnnouncement } from './Features/Core/Components/MiniAnnouncement';
import { Router } from '@solidjs/router';
import { createLightTheme } from './utils/createLightTheme';
import { StandardEngine } from 'styletron-standard';
import { HydrationScript } from 'solid-js/web';

export interface AppInterface {
  client: StandardEngine;
  head?: JSX.Element;
  nonce?: string;
}

const theme = createLightTheme();

const App: Component<AppInterface> = ({ client, head, nonce }) => {
  return (
    <html lang="en">
      <head>
        <title>🔥 Solid a 🔥</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <HydrationScript />
        <style innerHTML="body, html {padding: 0; margin: 0}" nonce={nonce} />
        <script async src="/src/entry-client.tsx" type="module" nonce={nonce} />
        {head}
      </head>
      <body>
        <div id="root">
          <StyletronProvider theme={theme} client={client}>
            <Router>
              <MiniAnnouncement />
              <AppBar />
            </Router>
          </StyletronProvider>
        </div>
      </body>
    </html>
  );
};

export default App;
