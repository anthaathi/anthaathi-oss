import { FeaturedProduct } from '~/Features/CMSComponents/Components/FeaturedProduct';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import { FeaturedCollection } from '~/Features/CMSComponents/Components/FeaturedCollection';
import { useStyletron } from '@anthaathi/solid-styletron';
import productJson from '../../config/products';
import { useLocation } from '@solidjs/router';
import { ProductProps } from '~/Features/Commerce/Components/ProductTile';

export default function ProductPage() {
  const [css] = useStyletron();
  const location = useLocation();
  const product = location.state;

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
          name: product?.name,
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
          price: product?.price,
          currency: product?.currency,
          image: [product?.image],
        }}
        handleAddToCart={() => {}}
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
