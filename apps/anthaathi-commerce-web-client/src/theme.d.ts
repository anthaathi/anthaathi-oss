import type { Sizing, Typography } from './utils/common';

declare module '@anthaathi/solid-styletron' {
  interface CommonColorTokens {
    primary: string;
  }

  export interface StyletronTheme {
    sizing: Sizing;
    mediaQuery: MediaQuery;
    typography: Typography;
    lighting: Shadow;
  }

  export interface Shadow {
    shadow400: string;
    shadow500: string;
    shadow600: string;
    shadow700: string;
    shallowAbove: string;
    shallowBelow: string;
    deepAbove: string;
    deepBelow: string;
  }

  export interface MediaQuery {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
}
