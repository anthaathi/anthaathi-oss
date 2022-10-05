import { FeaturedProduct } from '~/Features/CMSComponents/Components/FeaturedProduct';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import { FeaturedCollection } from '~/Features/CMSComponents/Components/FeaturedCollection';
import { useStyletron } from '@anthaathi/solid-styletron';
import productJson from '../../config/products.json';
import { useNavigate, useRouteData } from '@solidjs/router';
import { cartItems } from '~/Features/Cart/Components/CartItems';
import { produce } from 'solid-js/store';
import { RouteDataArgs } from 'solid-start';
import { ProductProps } from '~/Features/Commerce/Components/ProductTile';

export const routeData = ({ location, params }: RouteDataArgs) => {
  const handle = () =>
    productJson.featuredCollection.products.find(
      (res: ProductProps) => res.id === +params.handle,
    );

  return { product: handle };
};

export default function ProductPage() {
  const { product } = useRouteData<typeof routeData>();

  const [css] = useStyletron();

  const navigate = useNavigate();

  return (
    <>
      <Breadcrumbs
        list={[
          { key: '1', title: 'Home', link: '/' },
          { key: '2', title: 'Collections', link: '/pages/category-list' },
          { key: '3', title: 'Product', link: '/' },
        ]}
      />
      <FeaturedProduct
        productInfo={{
          name: product()?.name,
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
          notes: product()?.notes,
        }}
        handleAddToCart={() => {
          cartItems[1](
            produce((prev) => {
              const prevIndex = prev.findIndex(
                (res) => res.id === product()?.id,
              );

              if (prevIndex === -1) {
                prev.push({
                  ...(product() as object),
                  numberOfItems: 1,
                } as never);
              } else {
                prev.at(prevIndex)!!.numberOfItems =
                  prev.at(prevIndex)!!.numberOfItems + 1;
              }

              return prev;
            }),
          );

          navigate('/cart');
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
