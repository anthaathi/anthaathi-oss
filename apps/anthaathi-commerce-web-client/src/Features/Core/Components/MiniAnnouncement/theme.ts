import { StyletronTheme, Tokens } from '@anthaathi/solid-styletron';

export interface MiniAnnouncementColorTokens {
  background: string;
  color: string;
}

export const defaultSearchLightTokens: Partial<StyletronTheme> = {
  tokens: {
    MiniAnnouncement: {
      background: '#118b44',
      color: '#FFF',
    },
  } as Partial<Tokens> as never,
};
