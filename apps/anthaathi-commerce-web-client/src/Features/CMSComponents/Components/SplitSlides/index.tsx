import { useStyletron } from '@anthaathi/solid-styletron';

export function SplitSlides() {
  const [css] = useStyletron();

  return (
    <div
      class={css({
        height: '123px',
      })}
    />
  );
}
