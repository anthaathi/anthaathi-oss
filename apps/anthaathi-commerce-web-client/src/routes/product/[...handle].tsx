import { FeaturedProduct } from '~/Features/CMSComponents/Components/FeaturedProduct';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import { FeaturedCollection } from '~/Features/CMSComponents/Components/FeaturedCollection';
import { useStyletron } from '@anthaathi/solid-styletron';
import productJson from '../../config/products.json';
import { useNavigate, useRouteData } from '@solidjs/router';
import { appStore, cartItems } from '~/Features/Cart/Components/CartItems';
import { RouteDataArgs } from 'solid-start';

export const routeData = ({ params }: RouteDataArgs) => {
  const handle = () =>
    productJson.featuredCollection.products.find(
      (res) => res.id === +params.handle,
    );

  return { product: handle };
};

export default function ProductPage() {
  const { product } = useRouteData<typeof routeData>();
  const [css] = useStyletron();
  const navigate = useNavigate();
  const [cartItem, setCartItem] = cartItems;
  const [appData, setAppData] = appStore;

  return (
    <>
      <Breadcrumbs
        list={[
          { key: '1', title: 'Home', link: '/' },
          { key: '2', title: 'Collections', link: '/collections' },
          {
            key: '3',
            title: product()?.name,
            link: '/',
          },
        ]}
      />
      <FeaturedProduct
        productInfo={{
          id: product()?.id || 0,
          name: product()?.name || '',
          listInfo: {
            description: 'test',
            shippingInformation: 'Shipping Information',
          },
          blockInfo: {
            freeShipping: 'Free shipping in UAE',
            inStock: 'In stock, ready to ship',
            securePayments: 'Secure Payments',
            isFresh: 'Fresh',
          },
          price: +product()?.price!,
          currency: product()?.currency!,
          image: [product()?.image!],
          notes: product()?.notes || '',
        }}
        handleAddToCart={() => {
          if (
            !appData.items.some(
              (el: { id: number; quantity: number }) => el.id === product()?.id,
            )
          ) {
            setAppData({
              ...appData,
              items: [
                ...appData.items,
                {
                  id: product()?.id,
                  quantity: appData.items.length + 1,
                } as never,
              ],
            });
          }
        }}
        handleBuyItNow={() => {
          if (cartItem.some((el) => el.id === product()?.id)) {
            const newState = cartItem.map((obj) => {
              if (obj.id === product()?.id) {
                return { ...obj, numberOfItems: obj.numberOfItems + 1 };
              }
              return obj;
            });
            setCartItem(newState);
          } else {
            setCartItem([
              ...cartItem,
              {
                ...product(),
                numberOfItems: 1,
              } as never,
            ]);
            setAppData({
              ...appData,
              items: [
                ...appData.items,
                {
                  id: product()?.id,
                  quantity: appData.items.length + 1,
                } as never,
              ],
            });
          }
          navigate('/cart');
        }}
        handleAddProduct={() => {
          if (cartItem.some((el) => el.id === product()?.id)) {
            const newState = cartItem.map((obj) => {
              if (obj.id === product()?.id) {
                return { ...obj, numberOfItems: obj.numberOfItems + 1 };
              }
              return obj;
            });
            setCartItem(newState);
          } else {
            setCartItem([
              ...cartItem,
              {
                ...product(),
                numberOfItems: 1,
              } as never,
            ]);
          }
        }}
        handleRemoveProduct={() => {
          if (
            cartItem.some(
              (el) => el.id === product()?.id && el.numberOfItems > 1,
            )
          ) {
            const newState = cartItem.map((obj) => {
              if (obj.id === product()?.id && obj.numberOfItems !== 0) {
                return { ...obj, numberOfItems: obj.numberOfItems - 1 };
              }
              return obj;
            });
            setCartItem(newState);
          }
        }}
      />

      <FeaturedCollection
        title="Recently viewed product"
        products={productJson.featuredCollection.collection1}
      />
      <FeaturedCollection
        title="Recommended Products"
        products={productJson.featuredCollection.collection2}
      />

      <div class={css({ paddingBottom: '12px' })} />
    </>
  );
}
