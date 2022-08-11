import { styled } from 'baseui';

export const ToolbarWrapper = styled('header', ({ $theme }) => ({
  backgroundColor: $theme.colors.primaryHeaderA,
  height: '48px',
  color: $theme.colors.primaryB,
  paddingRight: $theme.sizing.scale500,
}));

export const ToolbarSection = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignContent: 'center',
  placeItems: 'center',
  maxWidth: $theme.sizing.maxAppWidth,
  margin: '0 auto',
  width: '100%',
  height: '48px',
}));

export const ToolbarTitle = styled('h1', ({ $theme }) => ({
  ...$theme.typography.HeadingXSmall,
  fontFamily: $theme.typography.headingFontFamily,
  fontSize: $theme.sizing.scale600,
  color: $theme.colors.primaryB,
  paddingLeft: $theme.sizing.scale500,
  textDecoration: 'none',
  ':active': {
    textDecoration: 'none',
  },
}));
