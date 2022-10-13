import productJson from '../config/product.json';
import {atom, useRecoilState} from 'recoil';
import {ItemProps} from '../features/CMS/containers/CartPage/components/BasketItem';

export const CartItemData = atom<ItemProps[]>({
    key: 'cartProduct',
    default: [],
});


export const useCart = () => {
    const [cart, setCart] = useRecoilState(CartItemData);

    async function setCartItem(
        productId: string | number,
        count = 1,
        isDelta = false,
    ) {
        const prev = [...cart];
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

            setCart(prev)
        } else {
            if (prev[index].numberOfItems === 1 && count === -1 || prev[index].numberOfItems === 1 && !isDelta && count === 0) {
                setCart(current =>
                    current.filter(obj => {
                        return obj.id !== productId;
                    }),
                );
            } else {
                if (isDelta) {
                    const newD = prev.map(obj => {
                        if (obj.id === productId) {
                            return {
                                ...obj,
                                numberOfItems: obj.numberOfItems + count,
                            };
                        }
                        return obj;
                    })
                    setCart(newD)
                } else {
                    const newD = prev.map(obj => {
                        if (obj.id === productId) {
                            return {
                                ...obj,
                                numberOfItems: count,
                            };
                        }
                        return obj;
                    })
                    setCart(newD)
                }
            }

        }
    }

    return {
        setCartItem,
    };
};
