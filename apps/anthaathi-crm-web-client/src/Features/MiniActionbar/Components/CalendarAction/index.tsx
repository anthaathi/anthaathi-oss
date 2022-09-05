import * as React from 'react';
import { HeadingXSmall } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { expandBorderStyles } from 'baseui/styles';
import { StatefulCalendar } from 'baseui/datepicker';

export function CalendarAction() {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale400,
        paddingBottom: $theme.sizing.scale400,
      })}
    >
      <HeadingXSmall
        marginTop="scale200"
        marginBottom="0"
        marginLeft="scale400"
        marginRight="scale400"
      >
        Calendar
      </HeadingXSmall>

      <div
        className={css({
          width: `calc(100% + ${$theme.sizing.scale400} + ${$theme.sizing.scale400})`,
          marginTop: $theme.sizing.scale600,
          marginBottom: $theme.sizing.scale100,
          ...expandBorderStyles($theme.borders.border100),
        })}
      />

      <div className={css({ width: '100%' })}>
        <StatefulCalendar
          overrides={{
            CalendarHeader: {
              style: () => ({ height: '42px' }),
            },
            Day: {
              style: ({ $selected, $isHovered, $isHighlighted }) => ({
                width: '42px',
                height: '42px',
                color: $selected
                  ? '#fff'
                  : $isHovered || $isHighlighted
                  ? '#0077cc'
                  : '#000',
                ':hover': {
                  transform: 'scale(1.05)',
                  transitionProperty: 'all',
                  transitionDuration: '90ms',
                  transitionTimingFunction: 'ease-in-out',
                  textDecoration: 'underline',
                  textUnderlineOffset: '2px',
                },
                ':after': {
                  marginTop: '5px',
                  marginLeft: '2px',
                  width: '38px',
                  height: '38px',
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px',
                  borderBottomLeftRadius: '4px',
                  borderBottomRightRadius: '4px',
                  backgroundColor: $selected
                    ? '#0077cc'
                    : $isHovered || $isHighlighted
                    ? '#0077cc33'
                    : 'transparent',
                  borderTopWidth: '0px',
                  borderBottomWidth: '0px',
                  borderLeftWidth: '0px',
                  borderRightWidth: '0px',
                },
              }),
            },
            WeekdayHeader: {
              style: () => ({
                width: '42px',
                height: '42px',
              }),
            },
            NextButton: {
              style: () => ({
                ':hover': {
                  backgroundColor: '#0077cc33',
                  borderRadius: '4px',
                },
              }),
            },
            PrevButton: {
              style: () => ({
                ':hover': {
                  backgroundColor: '#0077cc33',
                  borderRadius: '4px',
                },
              }),
            },
          }}
          onChange={({ date }) => console.log(date)}
        />
      </div>

      <div
        className={css({
          width: `calc(100% + ${$theme.sizing.scale400} + ${$theme.sizing.scale400})`,
          marginTop: $theme.sizing.scale600,
          marginBottom: $theme.sizing.scale500,
          ...expandBorderStyles($theme.borders.border100),
        })}
      />
    </div>
  );
}
