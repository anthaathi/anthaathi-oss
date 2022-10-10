// @refresh reload
import { children, Suspense, useContext } from 'solid-js';
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
import { Assets } from 'solid-js/web';
import { MobileBottomBar } from '~/Features/CMSComponents/Components/MobileBottomBar';
export default function Root() {
  const styletron = useContext(StyletronContext) as Server;

  const Stylesheet = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <Html lang="en">
      <Head>
        <Title>NRTC Fresh</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Assets>
          <Stylesheet />
        </Assets>
      </Head>
      <Body
        class={styletron
          .renderStyle({
            margin: 0,
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
          })
          .trim()}
      >
        <Suspense>
          <ErrorBoundary>
            <MiniAnnouncement />
            <AppBar />
            <Routes>
              <FileRoutes />
            </Routes>

            <Footer />

            <MobileBottomBar />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
