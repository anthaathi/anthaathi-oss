import { styled } from 'baseui';
import { expandBorderStyles } from 'baseui/styles';

export const TimelineStatus = styled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.notificationA,
  borderRadius: '6px',
}));

export const TimelineWrapper = styled('div', ({ $theme }) => ({
  [$theme.mediaQuery.large]: {
    marginLeft: '60px',
  },
}));

export const TimelineItemWrapper = styled('div', {
  marginLeft: '80px',
});

export const TimelineStatusTitleWrapper = styled('div', ({ $theme }) => ({
  paddingTop: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale800,
  paddingRight: $theme.sizing.scale800,
  paddingBottom: $theme.sizing.scale400,
  width: `calc(100% - ${$theme.sizing.scale800} - ${$theme.sizing.scale800} - 2px)`,
  marginTop: 0,
  marginBottom: 0,
  fontFamily: $theme.typography.headingFontFamily,
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
}));

export const TimelineStatusBody = styled('div', ({ $theme }) => ({
  borderRadiusBottomLeft: '6px',
  borderRadiusBottomRight: '6px',
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px',
  paddingLeft: $theme.sizing.scale800,
  paddingBottom: $theme.sizing.scale700,
  paddingRight: $theme.sizing.scale800,
  ...$theme.typography.LabelSmall,
}));
