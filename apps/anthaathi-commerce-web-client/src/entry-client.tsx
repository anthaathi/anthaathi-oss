/* @refresh reload */
import { hydrate, render } from 'solid-js/web';

import App from './App';
import { Client } from 'styletron-engine-atomic';

const client = new Client({
  prefix: '_',
  hydrate: document.querySelectorAll(
    '.styletron-hydrate',
  ) as NodeListOf<HTMLStyleElement>,
});

hydrate(() => <App client={client} />, document);

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if (newModule) {
      // newModule is undefined when SyntaxError happened
      console.log('updated: count is now ', newModule.count);
    }
  });
}
