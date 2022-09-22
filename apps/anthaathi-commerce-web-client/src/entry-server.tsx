import {
  createHandler,
  renderAsync,
  StartServer,
} from 'solid-start/entry-server';
import { Server } from 'styletron-engine-atomic';
import { StyletronProvider } from '@anthaathi/solid-styletron';
import { createLightTheme } from '~/utils/createLightTheme';

const client = new Server({
  prefix: '_',
});

const theme = createLightTheme();

export default createHandler(
  renderAsync((event) => {
    return (
      <StyletronProvider theme={theme} client={client}>
        <StartServer event={event} />
      </StyletronProvider>
    );
  }),
);
