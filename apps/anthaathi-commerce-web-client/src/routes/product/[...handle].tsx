import { FeaturedProduct } from '~/Features/CMSComponents/Components/FeaturedProduct';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import { FeaturedCollection } from '~/Features/CMSComponents/Components/FeaturedCollection';
import { useStyletron } from '@anthaathi/solid-styletron';

export default function ProductPage() {
  const [css] = useStyletron();

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
          name: 'Mango Badami',
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
          price: 35,
          currency: 'USD',
          image: [
            'https://cdn.shopify.com/s/files/1/0648/1303/9842/products/WhatsApp-Image-2022-03-15-at-15.49.36_1800x1800.jpg?v=1653583607',
            'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
          ],
        }}
      />

      <FeaturedCollection title="Recently viewed product" />
      <FeaturedCollection title="Recommended Products" />

      <div class={css({ paddingBottom: '12px' })} />
    </>
  );
}
