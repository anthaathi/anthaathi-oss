import {atom} from 'recoil';
import {ItemProps} from '../containers/CartPage/components/BasketItem';

export const CartItemData = atom<ItemProps[]>({
  key: 'cartProduct',
  default: [],
});
