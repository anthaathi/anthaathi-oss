import { CategoryList } from '~/Features/CMSComponents/Components/CategoryList';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';

export default function CategoryListPage() {
  return (
    <>
      <Breadcrumbs
        list={[
          { key: '1', title: 'Home', link: '/' },
          { key: '2', title: 'Collections', link: '/' },
        ]}
      />
      <CategoryList
        title="Category"
        items={[
          {
            id: 1,
            title: 'Fruits',
            title_ar: 'الفاكهة',
            key: 'fruits',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
          },
          {
            id: 2,
            title: 'Vegetables',
            title_ar: 'خضروات',
            key: 'vegetables',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
          },
          {
            id: 3,
            title: 'Bulk Buy',
            title_ar: 'شراء بالجملة',
            key: 'bulkbuy',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
          },
          {
            id: 4,
            title: 'Organic',
            title_ar: 'عضوي',
            key: 'organic',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
          },
          {
            id: 5,
            title: 'Pre-Cut',
            title_ar: 'قص مسبق',
            key: 'precut',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
          },
          {
            id: 6,
            title: 'Pre-Packed',
            title_ar: 'معبأة مسبقا',
            key: 'prepacked',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
          },
          {
            id: 7,
            title: 'Gift Corner',
            title_ar: 'ركن الهدايا',
            key: 'giftcorner',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
          },
          {
            id: 8,
            title: 'Juices',
            title_ar: 'عصائر',
            key: 'juices',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
          },
          {
            id: 9,
            title: 'Fresh Blooms',
            title_ar: 'أزهار منعشة',
            key: 'freshblooms',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
          },
        ]}
      />
    </>
  );
}
