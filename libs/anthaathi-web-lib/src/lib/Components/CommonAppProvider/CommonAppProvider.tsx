import * as React from 'react';
import { BaseProvider, createLightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client, Server } from 'styletron-engine-atomic';
import { Block } from 'baseui/block';
import type { Theme } from 'baseui';

const getHydrateClass = () =>
  document.getElementsByClassName(
    '_styletron_hydrate_',
  ) as HTMLCollectionOf<HTMLStyleElement>;

export const engine =
  typeof window === 'undefined'
    ? new Server()
    : new Client({
        hydrate: getHydrateClass(),
      });

const overrides: Partial<Theme> = {
  typography: {
    HeadingLarge: {
      fontFamily: "'Red Hat Display', sans-serif",
    },
    HeadingMedium: {
      fontFamily: "'Red Hat Display', sans-serif",
    },
    HeadingSmall: {
      fontFamily: "'Red Hat Display', sans-serif",
    },
    HeadingXSmall: {
      fontFamily: "'Red Hat Display', sans-serif",
    },
    HeadingXLarge: {
      fontFamily: "'Red Hat Display', sans-serif",
    },
    HeadingXXLarge: {
      fontFamily: "'Red Hat Display', sans-serif",
    },
  } as Theme['typography'],
};

const LightTheme = createLightTheme(
  {
    primaryFontFamily: "'IBM Plex Sans', sans-serif",
  },
  {
    borders: {
      useRoundedCorners: true,
      buttonBorderRadius: '8px',
      inputBorderRadius: '8px',
      popoverBorderRadius: '8px',
      surfaceBorderRadius: '8px',
    },
    ...overrides,
  },
);

export interface CommonAppProviderProps {
  children: React.ReactNode;
}

export function CommonAppProvider({ children }: CommonAppProviderProps) {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Block
          minHeight="100vh"
          backgroundColor="backgroundSecondary"
          display="block"
        >
          {children}
        </Block>
      </BaseProvider>
    </StyletronProvider>
  );
}
