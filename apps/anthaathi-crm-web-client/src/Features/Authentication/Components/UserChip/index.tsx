import { useStyletron } from 'baseui';

export function UserChip() {
  const [css, $theme] = useStyletron();

  return (
    <span
      className={css({
        paddingLeft: $theme.sizing.scale200,
        paddingRight: $theme.sizing.scale200,
        paddingTop: $theme.sizing.scale100,
        paddingBottom: $theme.sizing.scale100,
        borderRadius: '10px',
        backgroundColor: $theme.colors.backgroundLightAccent,
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: '14px',
        fontFamily: $theme.typography.headingFontFamily,
      })}
    >
      Omkar Yadav
    </span>
  );
}
