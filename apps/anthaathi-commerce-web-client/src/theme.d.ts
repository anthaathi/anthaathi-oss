import type { MediaQuery, Sizing, Typography } from './utils/common';

declare module '@anthaathi/solid-styletron' {
  interface CommonColorTokens {
    primary: string;
  }

  export interface StyletronTheme {
    sizing: Sizing;
    // @ts-ignore
    mediaQuery: MediaQuery;
    typography: Typography;
  }
}
