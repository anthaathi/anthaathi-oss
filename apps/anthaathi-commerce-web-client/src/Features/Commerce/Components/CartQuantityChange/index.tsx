import {
  IconMinusSmall,
  IconPlusSmall,
  IconTrashOSmall,
} from '@anthaathi/oracle-apex-solid-icons';
import { useStyletron } from '@anthaathi/solid-styletron';
import { createSignal } from 'solid-js';

export function CartQuantityChange({
  trashIcon,
  onChangeQuantity,
  initialValue = 0,
}: {
  id: number;
  initialValue?: number;
  trashIcon?: boolean;
  onChangeQuantity: (input: number) => void;
}) {
  const [css, $theme] = useStyletron();

  const [quantity, setQuantity] = createSignal(initialValue);

  function increaseValue() {
    setQuantity((prev) => {
      return prev + 1;
    });
    onChangeQuantity(quantity());
  }

  function decreaseValue() {
    setQuantity((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
    onChangeQuantity(quantity());
  }

  return (
    <div
      class={css({
        width: '110px',
        height: '35px',
        border: '0.5px solid #d9d9d9',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '14px',
        justifyContent: 'center',
        textAlign: 'center',
      })}
    >
      <div
        class={css({
          flex: 1,
          height: '100%',
        })}
      >
        <button
          class={css({
            ...$theme.typography.ParagraphMedium,
            border: '0px solid #000000',
            margin: 0,
            paddingLeft: $theme.sizing.scale400,
            paddingRight: $theme.sizing.scale400,
            height: '100%',
            width: '100%',
            backgroundColor: '#d6d5d5',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: '#cac9c9',
            },
          })}
          onClick={() => {
            decreaseValue();
          }}
        >
          {trashIcon && quantity() === 1 ? (
            <IconTrashOSmall width="14px" height="14px" fill="#000" />
          ) : (
            <IconMinusSmall width="14px" height="14px" fill="#000" />
          )}
        </button>
      </div>
      <div
        class={css({
          flex: 1,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          paddingLeft: $theme.sizing.scale600,
          paddingRight: $theme.sizing.scale600,
        })}
      >
        <h4
          class={css([
            {
              ...$theme.typography.ParagraphMedium,
              fontWeight: 'bold',
              margin: 0,
              backgroundColor: '#ffffff',
            },
          ])}
        >
          {quantity()}
        </h4>
      </div>
      <div
        class={css({
          flex: 1,
          height: '100%',
        })}
      >
        <button
          class={css({
            ...$theme.typography.ParagraphMedium,
            border: '0px solid #000000',
            margin: 0,
            paddingLeft: $theme.sizing.scale400,
            paddingRight: $theme.sizing.scale400,
            height: '100%',
            width: '100%',
            backgroundColor: '#d6d5d5',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: '#cac9c9',
            },
          })}
          onClick={() => {
            increaseValue();
          }}
        >
          <IconPlusSmall width="14px" height="14px" fill="#000" />
        </button>
      </div>
    </div>
  );
}
