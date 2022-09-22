import { StyletronTheme } from '@anthaathi/solid-styletron';
import {
  createMediaQueries,
  createSizing,
  createTypography,
  mergeDeep,
} from './common';
import { defaultSearchLightTokens } from '../Features/Core/Components/MiniAnnouncement/theme';
import { defaultSearchboxLightTokens } from '../Features/Core/Components/Searchbar/theme';

export const createLightTheme = (): StyletronTheme => {
  return mergeDeep<StyletronTheme>(
    {},
    defaultSearchLightTokens,
    defaultSearchboxLightTokens,
    {
      tokens: {
        Common: {
          primary: '#118b44',
        },
      } as never,
    },
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
