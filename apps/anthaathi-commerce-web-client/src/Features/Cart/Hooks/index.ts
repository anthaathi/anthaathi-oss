import { produce } from 'solid-js/store';
import productJson from '../../../config/products.json';
import { createEffect, createSignal } from 'solid-js';
import { cartItems } from '~/Features/Cart/Components/CartItems/CartItems';

export const useCart = () => {
  const [cart, setCart] = cartItems;

  async function setCartItem(
    productId: string | number,
    count = 1,
    isDelta = false,
  ) {
    setCart(
      produce((prev) => {
        const index = prev.findIndex((item) => item.id === productId);

        const product = productJson.featuredCollection.products.find(
          (res) => res.id === productId,
        );

        if (index === -1) {
          if (count === 0) {
            return prev;
          }
          prev.push({
            ...product,
            numberOfItems: count,
          } as never);
        } else {
          if (isDelta) {
            prev[index].numberOfItems += count;
          } else {
            prev[index].numberOfItems = count;
          }

          if (prev[index].numberOfItems === 0) {
            prev.splice(index, 1);
          }
        }

        return prev;
      }),
    );
  }

  const [cartItemLength, setCartItemLength] = createSignal(cart.length);

  createEffect(() => {
    setCartItemLength(cart.length);
  });

  return {
    setCartItem,
    cartItemLength,
  };
};
