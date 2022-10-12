import { FeaturedProduct } from '~/Features/CMSComponents/Components/FeaturedProduct';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import { FeaturedCollection } from '~/Features/CMSComponents/Components/FeaturedCollection';
import { useStyletron } from '@anthaathi/solid-styletron';
import productJson from '../../config/products.json';
import { useRouteData } from '@solidjs/router';
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
