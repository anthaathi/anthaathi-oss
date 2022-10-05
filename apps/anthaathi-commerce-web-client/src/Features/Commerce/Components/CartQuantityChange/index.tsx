import { useStyletron } from '@anthaathi/solid-styletron';
import { createMemo } from 'solid-js';
import { cartItems } from '~/Features/Cart/Components/CartItems';

export function CartQuantityChange({
  id,
  handleAddProduct,
  handleRemoveProduct,
}: {
  id: number;
  handleAddProduct?: () => void;
  handleRemoveProduct?: () => void;
}) {
  const [css, $theme] = useStyletron();
  const [cartItem] = cartItems;

  const cartProductData = createMemo(() => {
    if (cartItem.some((item) => item.id === id)) {
      let cartObj = cartItem.find((item) => item.id === id);
      return cartObj?.numberOfItems;
    } else {
      return 0
    }
  }, [cartItem, id]);
  return (
    <div
      class={css({
        width: '100px',
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
            paddingLeft: $theme.sizing.scale500,
            paddingRight: $theme.sizing.scale500,
            height: '100%',
            width: '100%',
            backgroundColor: '#d6d5d5',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: '#cac9c9',
            },
          })}
          onClick={handleRemoveProduct}
        >
          -
        </button>
      </div>
      <div
        class={css({
          flex: 1,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
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
          {cartProductData()}
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
            paddingLeft: $theme.sizing.scale500,
            paddingRight: $theme.sizing.scale500,
            height: '100%',
            width: '100%',
            backgroundColor: '#d6d5d5',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: '#cac9c9',
            },
          })}
          onClick={handleAddProduct}
        >
          +
        </button>
      </div>
    </div>
  );
}
