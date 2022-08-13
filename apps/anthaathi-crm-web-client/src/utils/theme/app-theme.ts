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
      maxAppWidth: '1200px',
    },
    colors: {
      primaryHeaderA: '#056ac8',
      primaryHeaderB: '#045aaa',
      primarySideBarA: '#2e3439',
      primarySideBarB: '#1e2225',
      notificationA: '#EEF6FC',
      notificationB: '#1f82c9',
      notificationC: '#d3dae6',
      notificationD: '#f1d86f',
      notificationE: '#ff7e62',
      notificationF: '#ee789d',
      notificationG: '#8f959e',
      notificationH: '#343741',
      notificationI: '#0071c2',
      notificationJ: '#727783',
      notificationK: '#187ec7',
      yellowLight: '#FCD86E',
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
    primarySideBarB: string;
    notificationA: string;
    notificationB: string;
    notificationC: string;
    notificationD: string;
    notificationE: string;
    notificationF: string;
    notificationG: string;
    notificationH: string;
    notificationI: string;
    notificationJ: string;
    notificationK: string;
    yellowLight: string;
  }
}
