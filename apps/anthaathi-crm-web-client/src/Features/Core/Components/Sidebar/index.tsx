import { styled } from 'baseui';

export const Sidebar = styled('div', ({ $theme }) => ({
  width: '280px',
  position: 'fixed',
  left: 0,
  top: '48px',
  height: 'calc(100vh - 48px)',
  backgroundColor: $theme.colors.primarySideBarA,
  boxShadow: $theme.lighting.shadow400,
  transitionProperty: 'all',
  transitionDuration: '100ms',
  transitionTimingFunction: 'ease',
  zIndex: 1,
  paddingTop: $theme.sizing.scale200,
}));
