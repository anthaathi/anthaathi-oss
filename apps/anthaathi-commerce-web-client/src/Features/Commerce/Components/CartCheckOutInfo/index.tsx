import { useStyletron } from '@anthaathi/solid-styletron';

interface CheckOutIntoProps {
  name: string;
  value: string;
}

export function CheckOutInfo(props: CheckOutIntoProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: $theme.sizing.scale400,
      })}
    >
      <div
        class={css({
          fontSize: '18px',
          fontWeight: 500,
        })}
      >
        {props.name}
      </div>
      <div
        class={css({
          fontSize: '18px',
          fontWeight: 500,
        })}
      >
        {props.value}
      </div>
    </div>
  );
}
