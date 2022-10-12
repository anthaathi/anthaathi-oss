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
import { Link } from '@solidjs/router';

export function RenderCMSComponents() {
  const context = useContext(ServerContext);
  const timeStart = new Date();

  const App = () => [
    <NewsLetter />,
    <MobileAppPromoter />,
    <SplitSlides />,
    <PromoGrid shape={Shape.Circle} />,
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
