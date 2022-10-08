import {
  IconMinusSmall,
  IconPlusSmall,
  IconTrashOSmall,
} from '@anthaathi/oracle-apex-solid-icons';
import { useStyletron } from '@anthaathi/solid-styletron';
import { createMemo } from 'solid-js';
import { cartItems } from '~/Features/Cart/Components/CartItems';

export function CartQuantityChange({
  id,
  handleAddProduct,
  handleRemoveProduct,
  trashIcon,
}: {
  id: number;
  trashIcon?: boolean;
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
      return 0;
    }
  }, [cartItem, id]);

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
          onClick={handleRemoveProduct}
        >
          {trashIcon && cartProductData() === 1 ? (
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
          onClick={handleAddProduct}
        >
          <IconPlusSmall width="14px" height="14px" fill="#000" />
        </button>
      </div>
    </div>
  );
}
