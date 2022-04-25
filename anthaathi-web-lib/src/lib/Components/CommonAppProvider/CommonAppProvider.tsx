import * as React from 'react';
import { BaseProvider, createLightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Block } from 'baseui/block';

const engine = new Styletron({ prefix: '_' });

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
