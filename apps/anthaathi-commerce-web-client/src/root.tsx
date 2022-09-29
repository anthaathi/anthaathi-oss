// @refresh reload
import { Suspense, useContext } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import { StyletronContext } from '@anthaathi/solid-styletron';
import type { Server } from 'styletron-engine-atomic';
import { Footer } from '~/Features/Core/Components/Footer';
import { MiniAnnouncement } from '~/Features/Core/Components/MiniAnnouncement';
import { AppBar } from '~/Features/Core/Components/AppBar';

export default function Root() {
  const styletron = useContext(StyletronContext) as Server;

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body
        class={styletron.renderStyle({
          margin: 0,
          fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        })}
      >
        <Suspense>
          <ErrorBoundary>
            <MiniAnnouncement />
            <AppBar />
            <Routes>
              <FileRoutes />
            </Routes>

            <Footer />

            {styletron.getStylesheets?.().map((res) => {
              return (
                <style
                  innerHTML={res.css}
                  class="styletron"
                  data-hydrate={res.attrs['data-hydrate']}
                  media={res.attrs.media}
                />
              );
            })}
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
