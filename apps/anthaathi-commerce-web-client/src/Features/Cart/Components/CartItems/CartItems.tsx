import { createStore } from 'solid-js/store';
import { ItemProps } from '~/Features/Cart/Components/CartItems/index';

export const cartItems = createStore<ItemProps[]>([]);
