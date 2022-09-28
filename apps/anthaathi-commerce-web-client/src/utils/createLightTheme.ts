import { StyletronTheme } from '@anthaathi/solid-styletron';
import {
  createMediaQueries,
  createSizing,
  createTypography,
  mergeDeep,
} from './common';

export const createLightTheme = (): StyletronTheme => {
  return mergeDeep<StyletronTheme>(
    {},
    {
      tokens: {
        Common: {
          primary: '#118b44',
        },
      } as never,
    } as never,
    {
      mediaQuery: createMediaQueries(),
    },
    {
      sizing: createSizing(),
    },
    {
      typography: createTypography(),
    },
    {
      lighting: {
        shadow400: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
        shadow500: '0 2px 8px hsla(0, 0%, 0%, 0.16)',
        shadow600: '0 4px 16px hsla(0, 0%, 0%, 0.16)',
        shadow700: '0 8px 24px hsla(0, 0%, 0%, 0.16)',
        shallowAbove: '0px -4px 16px rgba(0, 0, 0, 0.12)',
        shallowBelow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
        deepAbove: '0px -16px 48px rgba(0, 0, 0, 0.22)',
        deepBelow: '0px 16px 48px rgba(0, 0, 0, 0.22)',
      },
    },
  );
};
