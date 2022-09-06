import { styled } from 'baseui';

export const StickySidebar = styled('div', ({ $theme }) => ({
  position: 'sticky',
  top: 'calc(96px + 12px)',
  maxHeight: 'calc(100vh - 169px)',
  margin: '12px',
  [$theme.mediaQuery.small]: {
    width: '95%',
  },
  [$theme.mediaQuery.medium]: {
    width: '40%',
  },
  [$theme.mediaQuery.large]: {
    width: '420px',
  },
}));

export const StickySidebarContent = styled('div', ({ $theme }) => ({
  boxShadow: $theme.lighting.shadow400,
  borderRadius: $theme.borders.buttonBorderRadius,
  backgroundColor: $theme.colors.primaryB,
}));

export const StickySidebarDivider = styled('div', ({ $theme }) => ({
  paddingBottom: '1px',
  width: '100%',
  backgroundColor: $theme.colors.borderTransparent as never,
  marginTop: $theme.sizing.scale400,
  marginBottom: $theme.sizing.scale400,
}));

export const StickyContainer = styled('div', ({ $theme }) => ({
  paddingTop: '12px',
  paddingBottom: '12px',
  [$theme.mediaQuery.small]: {
    width: '100%',
  },
  [$theme.mediaQuery.medium]: {
    width: '60%',
  },
  [$theme.mediaQuery.large]: {
    width: 'calc(100% - 420px)',
  },
}));

export const StickyContainerWrapper = styled('div', {
  margin: '0 24px',
});
