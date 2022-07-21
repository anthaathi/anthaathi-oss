import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';

export function PhotoGrid() {
  return (
    <Block
      display="grid"
      marginTop="-8px"
      gridTemplateColumns="repeat(4, 1fr)"
      gridColumnGap="scale100"
      gridRowGap="scale100"
    >
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </Block>
  );
}

export function Photo() {
  const [css] = useStyletron();

  return (
    <div className={css({ cursor: 'pointer' })}>
      <img
        src="https://picsum.photos/200/200"
        alt=""
        width="100%"
        className={css({ objectFit: 'cover' })}
        height="100%"
      />
    </div>
  );
}
