import { styled } from 'baseui';

export const Sidebar = styled('div', ({ $theme }) => ({
  width: '320px',
  position: 'fixed',
  left: 0,
  top: '96px',
  height: 'calc(100vh - 96px)',
  backgroundColor: $theme.colors.backgroundPrimary,
  boxShadow: $theme.lighting.shadow400,
  transitionProperty: 'all',
  transitionDuration: '100ms',
  transitionTimingFunction: 'ease',
}));
