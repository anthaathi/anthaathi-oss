import { createLightTheme } from 'baseui';

export const appTheme = createLightTheme(
  {
    primaryA: '#25282f',
    primaryFontFamily:
      '\'IBM Plex Sans\',system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  {
    borders: {
      useRoundedCorners: true,
      buttonBorderRadius: '4px',
      inputBorderRadius: '4px',
      popoverBorderRadius: '8px',
      surfaceBorderRadius: '4px',
    },
    typography: {
      headingFontFamily:
        'Kanit, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    sizing: {
      maxAppWidth: 'none',
    },
    colors: {
      primaryHeaderA: '#056ac8',
      primaryHeaderB: '#045aaa',
      primarySideBarA: '#2e3439',
    },
  }
);

declare module 'baseui/themes' {
  export interface Typography {
    headingFontFamily: string;
    primaryFontFamily: string;
  }

  export interface Sizing {
    maxAppWidth: string;
  }

  export interface Colors {
    primaryHeaderA: string;
    primaryHeaderB: string;
    primarySideBarA: string;
  }
}
