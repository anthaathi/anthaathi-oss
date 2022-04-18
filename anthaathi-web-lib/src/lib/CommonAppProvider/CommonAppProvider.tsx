import React from 'react';
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

const engine = new Styletron();

export interface CommonAppProviderProps {
  children: React.ReactNode;
}

export function CommonAppProvider({ children }: CommonAppProviderProps) {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>{children}</BaseProvider>
    </StyletronProvider>
  );
}
