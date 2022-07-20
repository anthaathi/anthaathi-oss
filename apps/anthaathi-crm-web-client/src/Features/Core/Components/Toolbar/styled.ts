import { styled } from 'baseui';

export const ToolbarWrapper = styled('header', ({ $theme }) => ({
  backgroundColor: $theme.colors.primaryA,
  display: 'flex',
  alignContent: 'center',
  placeItems: 'center',
  height: '48px',
  color: $theme.colors.primaryB,
  paddingLeft: $theme.sizing.scale500,
  paddingRight: $theme.sizing.scale500,
}));

export const ToolbarTitle = styled('h1', ({ $theme }) => ({
  ...$theme.typography.HeadingXSmall,
  fontFamily: 'Kanit',
  fontSize: $theme.sizing.scale600,
}));
