import { styled } from 'baseui';

export const StickySidebar = styled('div', ({ $theme }) => ({
  position: 'sticky',
  width: '420px',
  top: 'calc(96px + 12px)',
  maxHeight: 'calc(100vh - 169px)',
  margin: '12px',
}));

export const StickySidebarContent = styled('div', ({ $theme }) => ({
  boxShadow: $theme.lighting.shadow400,
  borderRadius: $theme.borders.buttonBorderRadius,
  backgroundColor: $theme.colors.primaryB,
}));

export const StickySidebarDivider = styled('div', ({ $theme }) => ({
  paddingBottom: '1px',
  width: '100%',
  backgroundColor: $theme.colors.borderTransparent,
  marginTop: $theme.sizing.scale400,
  marginBottom: $theme.sizing.scale400,
}));

export const StickyContainer = styled('div', () => ({
  width: 'calc(100% - 420px)',
  paddingTop: '12px',
}));

export const StickyContainerWrapper = styled('div', {
  margin: '0 24px',
});
