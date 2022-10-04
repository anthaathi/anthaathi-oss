import { CartItem } from '~/Features/Commerce/Components/CartItem';
import { For, Show } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

const CartItemsData = [
  {
    id: 1,
    name: 'Baby Yellow Pepper',
    image:
      'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
    key: '12',
    price: 12,
    numberOfItems: 2,
    currency: 'AED',
    weight_unit: 'KG',
    packaging: '500 gms',
  },
  {
    id: 2,
    name: 'Capsicum mixed',
    image:
      'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
    key: '23',
    price: 23,
    numberOfItems: 2,
    currency: 'AED',
    weight_unit: 'KG',
    packaging: '500 gms',
  },
];

export const cartItems = createStore(CartItemsData);

export function CartItems() {
  return (
    <For each={cartItems[0]}>
      {(item, index) => {
        return (
          <Show
            when={item.numberOfItems >= 0}
            keyed={true}
            fallback={() => <></>}
          >
            <CartItem
              numberOfItems={item.numberOfItems}
              product={item}
              onChange={(qty) => {
                cartItems[1](
                  produce((prev) => {
                    prev.at(index())!!.numberOfItems = qty;
                    return prev;
                  }),
                );
              }}
            />
          </Show>
        );
      }}
    </For>
  );
}
