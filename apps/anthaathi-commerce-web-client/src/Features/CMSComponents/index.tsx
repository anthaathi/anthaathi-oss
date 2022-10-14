import { ServerContext } from 'solid-start/server';
import { useContext } from 'solid-js';
import { SplitSlides } from '~/Features/CMSComponents/Components/SplitSlides';
import { EmailSignup } from '~/Features/CMSComponents/Components/EmailSignup';
import { addServerTiming } from '~/utils/add-server-timing';
import { isServer } from 'solid-js/web';
import {
  PromoGrid,
  Shape,
} from '~/Features/CMSComponents/Components/PromoGrid';
import { NewsLetter } from '~/Features/CMSComponents/Components/NewsLetter';
import { ImageAndText } from '~/Features/CMSComponents/Components/ImageAndText';
import { FeaturedCollection } from '~/Features/CMSComponents/Components/FeaturedCollection';
import { SplitOfferCard } from './Components/SplitOfferCard';
import { HeroSlide } from './Components/HeroSlide';
import { HowItWorks } from '~/Features/CMSComponents/Components/HowItWorks';
import { AboutUs } from '~/Features/CMSComponents/Components/AboutUs';
import { PromotionalProductGrid } from './Components/PromotionalProductGrid';
import { ProductInfo } from '~/Features/Commerce/Components/ProductInfo';
import { BlogPostJournal } from '~/Features/CMSComponents/Components/BlogPostJournal';
import productJson from '../../config/products';
import { FAB } from '~/Features/Core/Components/FAB';
import MobileAppPromoter from '~/Features/CMSComponents/Components/MobileAppPromoter';
import { CategoryList } from './Components/CategoryList';
import { useStyletron } from '@anthaathi/solid-styletron';

export function RenderCMSComponents() {
  const context = useContext(ServerContext);
  const timeStart = new Date();
  const [css, $theme] = useStyletron();

  const App = () => [
    <NewsLetter />,
    <MobileAppPromoter />,
    <SplitSlides />,
    // <PromoGrid shape={Shape.Circle} />,
    <div
      class={css({
        maxWidth: $theme.sizing.maxWidth,
        margin: '0 auto',
        width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        marginTop: $theme.sizing.scale700,
      })}
    >
      <CategoryList
        items={[
          {
            id: 1,
            href: '/collections/fruits',
            title: 'Fruits',
            title_ar: 'الفاكهة',
            key: 'fruits',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
          },
          {
            id: 2,
            href: '/collections/vegetables',
            title: 'Vegetables',
            title_ar: 'خضروات',
            key: 'vegetables',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
          },
          {
            id: 3,
            href: '/collections/bulkbuy',
            title: 'Bulk Buy',
            title_ar: 'شراء بالجملة',
            key: 'bulkbuy',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
          },
          {
            id: 4,
            href: '/collections/organic',
            title: 'Organic',
            title_ar: 'عضوي',
            key: 'organic',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
          },
          {
            id: 5,
            href: '/collections/precut',
            title: 'Pre-Cut',
            title_ar: 'قص مسبق',
            key: 'precut',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
          },
          {
            id: 6,
            href: '/collections/prepacked',
            title: 'Pre-Packed',
            title_ar: 'معبأة مسبقا',
            key: 'prepacked',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
          },
          {
            id: 7,
            href: '/collections/giftcorner',
            title: 'Gift Corner',
            title_ar: 'ركن الهدايا',
            key: 'giftcorner',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
          },
          {
            id: 8,
            href: '/collections/juices',
            title: 'Juices',
            title_ar: 'عصائر',
            key: 'juices',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
          },
          {
            id: 9,
            href: '/collections/freshblooms',
            title: 'Fresh Blooms',
            title_ar: 'أزهار منعشة',
            key: 'freshblooms',
            image:
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
          },
        ]}
      />
    </div>,
    <ImageAndText />,
    <FeaturedCollection
      title="In Season"
      products={productJson.featuredCollection.collection1}
    />,
    <SplitOfferCard
      title={'Get Exclusive Offers'}
      subtitle={
        'Get exclusive offers & more by signing up for our promotional email'
      }
      buttonTitle={'View Offers'}
      image={
        'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/Newsletter_bg_300x.png?v=1653648705'
      }
    />,
    <ProductInfo />,
    <HeroSlide
      backgroundImageSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430"
      title="Fresh Juices"
      subTitle="Perfect for rich lifestyle photography"
      buttonTitle="View All"
    />,
    <PromotionalProductGrid
      products={[
        {
          name: 'Baby Yellow Pepper',
          image:
            'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
          price: 12,
          currency: 'AED',
          heading: 'NRTC Fresh',
          buttonTitle: 'Shop',
          label: 'New',
          description: '100% fresh. Sourced from Netherlands',
        },
        {
          name: 'Capsicum mixed',
          image:
            'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
          price: 23,
          currency: 'AED',
          heading: 'NRTC Fresh',
          buttonTitle: 'Shop',
          label: 'New',
          description: '100% fresh. Sourced from Netherlands',
        },
      ]}
    />,
    <HowItWorks />,
    <BlogPostJournal />,
    <AboutUs />,
    <EmailSignup />,
    <FAB />,
  ];

  const renderedElements = (
    <>
      <App />
    </>
  );

  const timeEnd = new Date();

  if (isServer) {
    addServerTiming(
      context.responseHeaders,
      'cms-rendered',
      timeEnd.getTime() - timeStart.getTime(),
      'Render CMS Components Dynamic',
    );
  }

  return renderedElements;
}
