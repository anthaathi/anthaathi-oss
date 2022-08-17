import { styled } from 'baseui';

export const AppWrapper = styled('div', ({ $theme }) => ({
  width: '100%',
  paddingLeft: $theme.sizing.scale400,
  paddingRight: $theme.sizing.scale400,
  maxWidth: $theme.sizing.maxAppWidth,
  margin: '0 auto',
}));
