import type { StyletronTheme, Tokens } from '@anthaathi/solid-styletron';

export interface SearchColorTokens {
  backgroundColor: string;
  color: string;
}

export const defaultSearchboxLightTokens: Partial<StyletronTheme> = {
  tokens: {
    Search: {
      backgroundColor: '#f9f9fb',
      color: '#333',
    },
  } as Partial<Tokens> as never,
};
