import { ServerContext } from 'solid-start/server';
import { useContext } from 'solid-js';
import { EmailSignup } from '~/Features/CMSComponents/Components/EmailSignup';
import { addServerTiming } from '~/utils/add-server-timing';
import { isServer } from 'solid-js/web';
import { NewsLetter } from '~/Features/CMSComponents/Components/NewsLetter';
import { FeaturedCollection } from '~/Features/CMSComponents/Components/FeaturedCollection';
import { SplitOfferCard } from './Components/SplitOfferCard';
import { HeroSlide } from './Components/HeroSlide';
import { HowItWorks } from '~/Features/CMSComponents/Components/HowItWorks';
import { AboutUs } from '~/Features/CMSComponents/Components/AboutUs';
import { PromotionalProductGrid } from './Components/PromotionalProductGrid';
import { ProductInfo } from '~/Features/Commerce/Components/ProductInfo';
import { BlogPosts } from '~/Features/CMSComponents/Components/BlogPosts';
import { FAB } from '~/Features/Core/Components/FAB';
import MobileAppPromoter from '~/Features/CMSComponents/Components/MobileAppPromoter';
import { CategoryList } from './Components/CategoryList';
import productJson from '../../config/products.json';
import categoryJson from '../../config/category.json';
import { BannerSlide } from './Components/BannerSilde';
import { PromoGrid } from './Components/PromoGrid';
import {
  IconClipboardCheckLarge,
  IconIdCardOLarge,
  IconTruckLarge,
} from '@anthaathi/oracle-apex-solid-icons';

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
    <HowItWorks
      title="How It Works"
      subtitle="Shopping for the freshest produce has never been easier"
      list={[
        {
          icon: <IconIdCardOLarge height="70px" width="70px" />,
          title: 'Register',
        },
        {
          icon: <IconClipboardCheckLarge height="70px" width="70px" />,
          title: 'Select Products & Place Order',
        },
        {
          icon: <IconTruckLarge height="70px" width="70px" />,
          title: 'Schedule Delivery',
        },
      ]}
    />,
    <BlogPosts
      title="From the journal"
      mainBlog={{
        id: 1,
        image:
          'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_1080x.jpg?v=1653586976',
        title: '3 Fantastic Father’s Day Meals with help from NRTC Fresh',
        published_date: 'MAY 26, 2022',
        author: 'Omkar Yadav',
      }}
      blogs={[
        {
          id: 2,
          image:
            'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_360x.jpg?v=1653586497',
          title: '5 Fruit and Vegetable preparation tips with NRTC Fresh',
          published_date: 'MAY 26, 2022',
          author: 'Omkar Yadav',
        },
        {
          id: 3,
          image:
            'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-tips-to-cook-delicious-vegetable-online-Dubai-1200x600_900x.jpg?v=1653586237',
          title: '5 tips to cook delicious Vegetables from NRTC Fresh',
          published_date: 'MAY 26, 2022',
          author: 'Omkar Yadav',
        },
        {
          id: 4,
          image:
            'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Make-perfect-Veggie-burger-with-online-vegetables-Dubai-1200x600_360x.jpg?v=1653585741',
          title:
            'How To Make The Perfect Veggie Burger With NRTC Fresh Vegetables',
          published_date: 'MAY 26, 2022',
          author: 'Omkar Yadav',
        },
      ]}
    />,
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
