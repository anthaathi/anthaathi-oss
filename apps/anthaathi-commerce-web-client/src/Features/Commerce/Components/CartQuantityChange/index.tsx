import { useStyletron } from '@anthaathi/solid-styletron';

export function CartQuantityChange() {
  const [css, $theme] = useStyletron();

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
          class={css({
            border: '0px solid #000000',
            margin: 0,
            padding: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#ffffff',
            textAlign: 'center',
          })}
        >
          1
        </input>
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
        >
          -
        </button>
      </div>
    </div>
  );
}
