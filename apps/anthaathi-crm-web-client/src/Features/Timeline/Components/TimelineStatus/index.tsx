import { styled } from 'baseui';
import { expandBorderStyles } from 'baseui/styles';

export const TimelineStatus = styled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.backgroundSecondary,
}));

export const TimelineWrapper = styled('div', {
  marginLeft: '60px',
});

export const TimelineItemWrapper = styled('div', {
  marginLeft: '80px',
});

export const TimelineStatusTitleWrapper = styled('div', ({ $theme }) => ({
  paddingTop: $theme.sizing.scale200,
  paddingBottom: $theme.sizing.scale200,
  paddingLeft: $theme.sizing.scale800,
  paddingRight: $theme.sizing.scale800,
  width: `calc(100% - ${$theme.sizing.scale800} - ${$theme.sizing.scale800} - 2px)`,
  marginTop: 0,
  marginBottom: 0,
  ...expandBorderStyles($theme.borders.border200),
  fontFamily: $theme.typography.headingFontFamily,
}));

export const TimelineStatusBody = styled('div', ({ $theme }) => ({
  ...expandBorderStyles($theme.borders.border200),
  borderTopWidth: 0,
  paddingLeft: $theme.sizing.scale800,
  paddingTop: $theme.sizing.scale600,
  paddingBottom: $theme.sizing.scale600,
  paddingRight: $theme.sizing.scale800,
}));
