import { CartItem } from '~/Features/Commerce/Components/CartItem';
import { For, Show } from 'solid-js';
import { ProductProps } from '~/Features/Commerce/Components/ProductTile';
import { cartItems } from '~/Features/Cart/Components/CartItems/CartItems';

export interface ItemProps extends ProductProps {
  numberOfItems: number;
}

export function CartItems() {
  const [cartItem] = cartItems;

  return (
    <For each={cartItem}>
      {(item) => {
        return (
          <Show
            when={item.numberOfItems >= 0}
            keyed={true}
            fallback={() => <></>}
          >
            <CartItem numberOfItems={item.numberOfItems} product={item} />
          </Show>
        );
      }}
    </For>
  );
}
