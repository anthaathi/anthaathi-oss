import { CartItem } from '~/Features/Commerce/Components/CartItem';
import { For, Show } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { ProductProps } from '~/Features/Commerce/Components/ProductTile';
export interface ItemProps extends ProductProps {
  numberOfItems: number;
}

export const cartItems = createStore<ItemProps[]>([]);

export const appStore = createStore({ items: [] });

export function CartItems() {
  const [cartItem, setCartItem] = cartItems;
  const [appData, setAppData] = appStore;

  return (
    <For each={cartItem}>
      {(item) => {
        return (
          <Show
            when={item.numberOfItems >= 0}
            keyed={true}
            fallback={() => <></>}
          >
            <CartItem
              numberOfItems={item.numberOfItems}
              product={item}
              handleAddProduct={() => {
                if (cartItem.some((el) => el.id === item.id)) {
                  const newState = cartItem.map((obj) => {
                    if (obj.id === item.id) {
                      return { ...obj, numberOfItems: obj.numberOfItems + 1 };
                    }
                    return obj;
                  });
                  setCartItem(newState);
                } else {
                  setCartItem([
                    ...cartItem,
                    {
                      ...item,
                      numberOfItems: 1,
                    },
                  ]);
                  setAppData({
                    ...appData,
                    items: [
                      ...appData.items,
                      {
                        id: item.id,
                        quantity: appData.items.length + 1,
                      } as never,
                    ],
                  });
                }
              }}
              handleRemoveProduct={() => {
                const cartProduct: ItemProps | undefined = cartItem.find(
                  (res: ProductProps) => res.id === item.id,
                );
                if (cartProduct) {
                  if (cartProduct.numberOfItems > 1) {
                    const newState = cartItem.map((obj) => {
                      if (obj.id === item.id && obj.numberOfItems !== 0) {
                        return { ...obj, numberOfItems: obj.numberOfItems - 1 };
                      }
                      return obj;
                    });
                    setCartItem(newState);
                  } else {
                    setCartItem((current) =>
                      current.filter((obj) => {
                        return obj.id !== item.id;
                      }),
                    );
                    setAppData({
                      ...appData,
                      items: appData.items.filter(
                        (obj: { id: number; quantity: number }) => {
                          return obj.id !== item.id;
                        },
                      ),
                    });
                  }
                }
              }}
            />
          </Show>
        );
      }}
    </For>
  );
}
