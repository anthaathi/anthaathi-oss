import type { MiniAnnouncementColorTokens } from './Features/Core/Components/MiniAnnouncement/theme';
import type { MediaQuery, Sizing, Typography } from './utils/common';
import { SearchColorTokens } from './Features/Core/Components/Searchbar/theme';

declare module '@anthaathi/solid-styletron' {
  interface CommonColorTokens {
    primary: string;
  }

  type Tokens = {
    MiniAnnouncement: MiniAnnouncementColorTokens;
    Search: SearchColorTokens;
    Common: CommonColorTokens;
  };

  export interface StyletronTheme {
    tokens: Tokens;
    sizing: Sizing;
    mediaQuery: MediaQuery;
    typography: Typography;
  }
}
