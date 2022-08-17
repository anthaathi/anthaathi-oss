import { HeadingXSmall } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { expandBorderStyles } from 'baseui/styles';
import { ORIENTATION, StatefulCalendar } from 'baseui/datepicker';
import { SIZE } from 'baseui/button';

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
          marginBottom: $theme.sizing.scale500,
          ...expandBorderStyles($theme.borders.border100),
        })}
      />

      <div className={css({ width: '100%' })}>
        <StatefulCalendar onChange={({ date }) => console.log(date)} />
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
