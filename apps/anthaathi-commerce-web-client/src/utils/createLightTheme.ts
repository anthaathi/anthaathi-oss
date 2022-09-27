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
  );
};
