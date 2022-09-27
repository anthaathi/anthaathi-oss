import { StyleObject } from 'styletron-standard';

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: object | undefined) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param sources
 */
export function mergeDeep<T>(target: Partial<T>, ...sources: Partial<T>[]): T {
  if (!sources.length) return target as never;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      // @ts-ignore
      if (isObject(source[key])) {
        // @ts-ignore
        if (!target[key]) Object.assign(target, { [key]: {} });
        // @ts-ignore
        mergeDeep(target[key], source[key]);
      } else {
        // @ts-ignore
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export interface MediaQuery {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export function createMediaQueries(): MediaQuery {
  return {
    xs: '@media screen and (min-width: 0px)',
    sm: '@media screen and (min-width: 600px)',
    md: '@media screen and (min-width: 900px)',
    lg: '@media screen and (min-width: 1200px)',
    xl: '@media screen and (min-width: 1536px)',
  };
}

export interface Sizing {
  maxWidth: string;
  scale0: string;
  scale100: string;
  scale200: string;
  scale300: string;
  scale400: string;
  scale500: string;
  scale550: string;
  scale600: string;
  scale650: string;
  scale700: string;
  scale750: string;
  scale800: string;
  scale850: string;
  scale900: string;
  scale950: string;
  scale1000: string;
  scale1200: string;
  scale1400: string;
  scale1600: string;
  scale2400: string;
  scale3200: string;
  scale4800: string;
}

export function createSizing(): Sizing {
  return {
    maxWidth: '1440px',
    scale0: '2px',
    scale100: '4px',
    scale200: '6px',
    scale300: '8px',
    scale400: '10px',
    scale500: '12px',
    scale550: '14px',
    scale600: '16px',
    scale650: '18px',
    scale700: '20px',
    scale750: '22px',
    scale800: '24px',
    scale850: '28px',
    scale900: '32px',
    scale950: '36px',
    scale1000: '40px',
    scale1200: '48px',
    scale1400: '56px',
    scale1600: '64px',
    scale2400: '96px',
    scale3200: '128px',
    scale4800: '192px',
  };
}

export type Globals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset';

export type Font = {
  fontFamily: string;
  fontWeight: Globals | 'bold' | 'normal' | 'bolder' | 'lighter' | number;
  fontSize: string;
  lineHeight: string | number;
};

export type Responsive<T> = T | T[];

export interface Typography {
  font100: Font;
  font150: Font;
  font200: Font;
  font250: Font;
  font300: Font;
  font350: Font;
  font400: Font;
  font450: Font;
  font550: Font;
  font650: Font;
  font750: Font;
  font850: Font;
  font950: Font;
  font1050: Font;
  font1150: Font;
  font1250: Font;
  font1350: Font;
  font1450: Font;
  ParagraphXSmall: Font;
  ParagraphSmall: Font;
  ParagraphMedium: Font;
  ParagraphLarge: Font;
  LabelXSmall: Font;
  LabelSmall: Font;
  LabelMedium: Font;
  LabelLarge: Font;
  HeadingXSmall: Font;
  HeadingSmall: Font;
  HeadingMedium: Font;
  HeadingLarge: Font;
  HeadingXLarge: Font;
  HeadingXXLarge: Font;
  DisplayXSmall: Font;
  DisplaySmall: Font;
  DisplayMedium: Font;
  DisplayLarge: Font;
  MonoParagraphXSmall: Font;
  MonoParagraphSmall: Font;
  MonoParagraphMedium: Font;
  MonoParagraphLarge: Font;
  MonoLabelXSmall: Font;
  MonoLabelSmall: Font;
  MonoLabelMedium: Font;
  MonoLabelLarge: Font;
  MonoHeadingXSmall: Font;
  MonoHeadingSmall: Font;
  MonoHeadingMedium: Font;
  MonoHeadingLarge: Font;
  MonoHeadingXLarge: Font;
  MonoHeadingXXLarge: Font;
  MonoDisplayXSmall: Font;
  MonoDisplaySmall: Font;
  MonoDisplayMedium: Font;
  MonoDisplayLarge: Font;
}

export interface FontTokens {
  primaryFontFamily: string;
  monoFontFamily: string;
}

export const defaultFontTokens: FontTokens = {
  primaryFontFamily:
    'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  monoFontFamily: '"Lucida Console", Monaco, monospace',
};

export function createTypography(
  fontTokens: FontTokens = defaultFontTokens,
): Typography {
  const font100: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '20px',
  };
  const font150: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px',
  };
  const font200: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '20px',
  };
  const font250: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16px',
  };
  const font300: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '24px',
  };
  const font350: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
  };
  const font400: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '28px',
  };
  const font450: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
  };
  const font550: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '28px',
  };
  const font650: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '32px',
  };
  const font750: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '36px',
  };
  const font850: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '40px',
  };
  const font950: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '44px',
  };
  const font1050: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '52px',
  };
  const font1150: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '44px',
  };
  const font1250: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '44px',
    fontWeight: 700,
    lineHeight: '52px',
  };
  const font1350: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '52px',
    fontWeight: 700,
    lineHeight: '64px',
  };
  const font1450: Font = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '96px',
    fontWeight: 700,
    lineHeight: '112px',
  };

  return {
    font100,
    font150,
    font200,
    font250,
    font300,
    font350,
    font400,
    font450,
    font550,
    font650,
    font750,
    font850,
    font950,
    font1050,
    font1150,
    font1250,
    font1350,
    font1450,

    ParagraphXSmall: font100,
    ParagraphSmall: font200,
    ParagraphMedium: font300,
    ParagraphLarge: font400,
    LabelXSmall: font150,
    LabelSmall: font250,
    LabelMedium: font350,
    LabelLarge: font450,
    HeadingXSmall: font550,
    HeadingSmall: font650,
    HeadingMedium: font750,
    HeadingLarge: font850,
    HeadingXLarge: font950,
    HeadingXXLarge: font1050,
    DisplayXSmall: font1150,
    DisplaySmall: font1250,
    DisplayMedium: font1350,
    DisplayLarge: font1450,

    MonoParagraphXSmall: {
      ...font100,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoParagraphSmall: {
      ...font200,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoParagraphMedium: {
      ...font300,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoParagraphLarge: {
      ...font400,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoLabelXSmall: {
      ...font150,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoLabelSmall: {
      ...font250,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoLabelMedium: {
      ...font350,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoLabelLarge: {
      ...font450,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoHeadingXSmall: {
      ...font550,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoHeadingSmall: {
      ...font650,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoHeadingMedium: {
      ...font750,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoHeadingLarge: {
      ...font850,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoHeadingXLarge: {
      ...font950,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoHeadingXXLarge: {
      ...font1050,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoDisplayXSmall: {
      ...font1150,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoDisplaySmall: {
      ...font1250,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoDisplayMedium: {
      ...font1350,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
    MonoDisplayLarge: {
      ...font1450,
      fontFamily: defaultFontTokens.monoFontFamily,
    },
  };
}
