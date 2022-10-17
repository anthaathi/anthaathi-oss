import { ServerContext } from 'solid-start/server';
import { useContext } from 'solid-js';
import { SplitSlides } from '~/Features/CMSComponents/Components/SplitSlides';
import { EmailSignup } from '~/Features/CMSComponents/Components/EmailSignup';
import { addServerTiming } from '~/utils/add-server-timing';
import { isServer } from 'solid-js/web';
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
import { FAB } from '~/Features/Core/Components/FAB';
import MobileAppPromoter from '~/Features/CMSComponents/Components/MobileAppPromoter';
import { CategoryList } from './Components/CategoryList';
import { useStyletron } from '@anthaathi/solid-styletron';
import productJson from '../../config/products.json';
import categoryJson from '../../config/category.json';
import { BannerSlide } from './Components/BannerSilde';
import { PromoGrid } from './Components/PromoGrid';

export function RenderCMSComponents() {
  const context = useContext(ServerContext);
  const timeStart = new Date();

  const App = () => [
    <NewsLetter />,
    <MobileAppPromoter />,
    <BannerSlide
      list={[
        {
          id: '1',
          imgSrc:
            'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
          href: '/',
        },
        {
          id: '2',
          imgSrc:
            'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
          href: '/',
        },
        {
          id: '3',
          imgSrc:
            'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
          href: '/',
        },
      ]}
    />,
    <CategoryList title="Categories" items={categoryJson.categoryList} />,
    <FeaturedCollection
      title="In Season"
      products={productJson.featuredCollection.collection1}
    />,
    <PromoGrid />,
    <FeaturedCollection
      title="Special Offers"
      products={productJson.featuredCollection.collection2}
    />,
    // <ImageAndText />,

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
    // <HowItWorks />,
    <BlogPostJournal />,
    // <AboutUs />,
    // <EmailSignup />,
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
