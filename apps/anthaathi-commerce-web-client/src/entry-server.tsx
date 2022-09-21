import App from './App';
import { Server } from 'styletron-engine-atomic';
import { renderToStream, renderToStringAsync } from 'solid-js/web';

const client = new Server({
  prefix: '_',
});

export function render(res: any, hasStream: boolean) {
  const AppWrapped = () => (
    <App
      client={client}
      head={() => (
        <>
          {client?.getStylesheets?.().map((res) => {
            return (
              <style
                innerHTML={res.css}
                class="styletron-hydrate"
                media={res.attrs.media}
                data-hydrate={res.attrs['data-hydrate']}
              />
            );
          })}
        </>
      )}
    />
  );

  res.write('<!DOCTYPE html>');

  if (hasStream) {
    renderToStream(() => <AppWrapped />, {}).pipe(res);
  } else {
    return renderToStringAsync(() => <AppWrapped />);
  }
}
