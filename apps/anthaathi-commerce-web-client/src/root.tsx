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
import { createLightTheme } from '~/utils/createLightTheme';
import './index.css';
import { StyletronContext } from '@anthaathi/solid-styletron';
import type { Server } from 'styletron-engine-atomic';
import { Footer } from '~/Features/Core/Components/Footer';
import { MiniAnnouncement } from '~/Features/Core/Components/MiniAnnouncement';
import { AppBar } from '~/Features/Core/Components/AppBar';

const theme = createLightTheme();

export default function Root(context) {
  const styletron = useContext(StyletronContext) as Server;

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <MiniAnnouncement />
            <AppBar />
            <Routes>
              <FileRoutes />
            </Routes>

            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
