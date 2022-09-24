import {
  createHandler,
  renderStream,
  StartServer,
} from 'solid-start/entry-server';
import { Server } from 'styletron-engine-atomic';
import { StyletronProvider } from '@anthaathi/solid-styletron';
import { createLightTheme } from '~/utils/createLightTheme';
import { addServerTiming } from '~/utils/add-server-timing';

const client = new Server({
  prefix: '_',
});

const theme = createLightTheme();

export default createHandler(
  renderStream((event) => {
    const time = new Date();

    const root = (
      <StyletronProvider theme={theme} client={client}>
        <StartServer event={event} />
      </StyletronProvider>
    );

    const timeEnd = new Date();

    addServerTiming(
      event.responseHeaders,
      'app-render',
      timeEnd.getTime() - time.getTime(),
      'Render App',
    );

    return root;
  }),
);
