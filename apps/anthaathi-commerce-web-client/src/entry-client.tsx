import { mount, StartClient } from 'solid-start/entry-client';
import { StyletronProvider } from '@anthaathi/solid-styletron';
import { createLightTheme } from '~/utils/createLightTheme';
import { Client } from 'styletron-engine-atomic';

const theme = createLightTheme();
const client = new Client({
  prefix: '_',
  hydrate: document.querySelectorAll('.styletron'),
});

mount(
  () => (
    <StyletronProvider theme={theme} client={client}>
      <StartClient />
    </StyletronProvider>
  ),
  document,
);
