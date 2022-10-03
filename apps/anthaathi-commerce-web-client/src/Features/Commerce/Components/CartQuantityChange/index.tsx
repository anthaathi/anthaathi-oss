import { useStyletron } from '@anthaathi/solid-styletron';
import { createEffect, createSignal } from 'solid-js';

export function CartQuantityChange() {
  const [css, $theme] = useStyletron();

  const [quantity, setQuantity] = createSignal(0);

  createEffect(() => {
    if (quantity() < 0) {
      setQuantity(0);
    }
  });

  return (
    <div
      class={css({
        width: '75px',
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
            border: '0px solid #000000',
            margin: 0,
            padding: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
          })}
          onClick={() => {
            setQuantity((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
      <div
        class={css({
          flex: 1,
          height: '100%',
        })}
      >
        <input
          class={css([
            {
              border: '0px solid #000000',
              margin: 0,
              padding: 0,
              height: '100%',
              width: '100%',
              backgroundColor: '#ffffff',
              textAlign: 'center',
              outline: 'none',
              '-moz-appearance': 'textfield',
              '::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
              },
            },
            $theme.typography.ParagraphLarge,
          ])}
          type="number"
          value={quantity()}
          onChange={(e) => {
            if (!isNaN(+(e.target as HTMLInputElement).value)) {
              setQuantity(+(e.target as HTMLInputElement).valueAsNumber);
            } else {
              (e.target as HTMLInputElement).value = quantity() + '';
            }
          }}
        />
      </div>
      <div
        class={css({
          flex: 1,
          height: '100%',
        })}
      >
        <button
          class={css({
            border: '0px solid #000000',
            margin: 0,
            padding: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
          })}
          onClick={() => {
            setQuantity((prev) => prev - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
