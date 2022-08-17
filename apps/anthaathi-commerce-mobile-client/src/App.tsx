import React from 'react';
import {IntlProvider} from 'react-intl';
import {NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnv from './config/relay-env';
import enUS from './compiled-locales/en-US.json';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  ThemeBase,
} from 'react-native-paper';
import CMSRenderer from './features/CMS';
import {
  CoreComponentType,
  HomePageComponentType,
  ProductListPageComponentType,
} from './features/CMS/types/common';
import {ScrollView} from 'react-native';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      black: string;
    }
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0f8443',
    primaryContainer: '#f4faf7',
    secondary: 'rgb(244, 250, 247)',
  },
} as ThemeBase;

const App = () => {
  return (
    <IntlProvider locale="en-US" messages={enUS}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RelayEnvironmentProvider environment={RelayEnv as never}>
            <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
              <CMSRenderer
                components={[
                  {
                    _component: CoreComponentType.Header,
                    key: '123',
                    title: 'NRTC Fresh',
                    leftIcon: 'menu',
                    rightIcon: 'account',
                  },
                  {
                    _component: HomePageComponentType.DeliveringSelection,
                    key: '124',
                    country: 'UAE',
                    location: 'Dubai',
                  },
                  {
                    _component: HomePageComponentType.HeroSlide,
                    key: '128',
                    backgroundImageSrc:
                      'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430',
                    title: 'New Arrivals',
                    subTitle: 'Subtitle',
                    buttonTitle: 'View All',
                  },
                  {
                    _component: HomePageComponentType.HeroCategories,
                    key: '127',
                    title: 'Categories',
                    items: [
                      {
                        title: 'Fruits',
                        key: 'test1',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-17-at-16.47.25-500x500.jpeg',
                      },
                      {
                        title: 'Vegetables',
                        key: 'test2',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2020/11/RC2-1.jpg',
                      },
                      {
                        title: 'Pre-pakced',
                        key: 'test3',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2020/11/QwvPC56o-1.jpeg',
                      },
                      {
                        title: 'Vegetables',
                        key: 'test4',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2020/11/RC2-1.jpg',
                      },
                      {
                        title: 'Pre-pakced',
                        key: 'test5',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2020/11/QwvPC56o-1.jpeg',
                      },
                    ],
                  },
                  {
                    _component: HomePageComponentType.PromotionalGrid,
                    key: '129',
                    items: [
                      {
                        key: '12',
                        // subHeading: 'Something',
                        heading: 'Special Offer',
                        // text: 'test',
                        button1Text: 'SHOP NOW',
                        height: [180, 240, 260, 270],
                        image:
                          'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                        width: ['100%', '50%', '100%', '100%'],
                      },
                      {
                        key: '1233',
                        // subHeading: 'Something',
                        heading: 'Organic',
                        // text: 'test',
                        button1Text: 'SHOP NOW',
                        height: [180, 240, 260, 270],
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                        width: ['100%', '50%', '100%', '100%'],
                      },
                      {
                        key: '1234',
                        // subHeading: 'Something',
                        heading: 'Bulk Buy',
                        // text: 'test',
                        button1Text: 'SHOP NOW',
                        height: [180, 240, 260, 270],
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                        width: ['100%', '50%', '100%', '100%'],
                      },
                    ],
                  },
                  {
                    _component: HomePageComponentType.FeaturedCollection,
                    key: '1251',
                    title: 'In Season Products',
                    products: [
                      {
                        name: 'Fruit Platter Production',
                        key: 'test1',
                        price: 40.0,
                        currency: 'AED',
                        weight_unit: 'Piece',
                        packaging: 'pack',
                        notes: '(10 pcs of Sticks)',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-17-at-16.47.25-500x500.jpeg',
                      },
                      {
                        name: 'Dabbas Dates',
                        key: 'test2',
                        price: 105.0,
                        currency: 'AED',
                        weight_unit: 'KG',
                        packaging: 'Box',
                        notes:
                          'Approx 8kg per box (16 PKT in the box each pkt)',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2021/10/dabbas-500g-pkt-box-500x500.jpg',
                      },
                      {
                        name: 'Sweet Potato Orange (Cut Cube)',
                        key: 'test3',
                        price: 7.35,
                        currency: 'AED',
                        weight_unit: 'Pack',
                        packaging: 'pack',
                        notes: '250g',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2020/11/Sweet_Potato_Orange-1.jpg',
                      },
                    ],
                  },
                  {
                    _component: HomePageComponentType.FeaturedProduct,
                    key: '126',
                    productInfo: {
                      name: 'Dabbas Dates',
                      listInfo: {
                        description:
                          '100% fresh. Sourced from UAE. Benefits: Dates contain vitamins such as B1, B2, B3 and B5, as well as A1 and C. Dates are loaded with potassium and rich in Iron, which is highly recommended for those who suffer from iron deficiency.',
                        shippingInformation: 'Shipping Information',
                      },
                      blockInfo: {
                        freeShipping: 'Free shipping in UAE',
                        inStock: 'In stock, ready to ship',
                        securePayments: 'Secure Payments',
                        isFresh: 'Fresh',
                      },
                      price: 105.0,
                      currency: 'AED',
                      image: [
                        'https://www.nrtcfresh.com/wp-content/uploads/2021/10/dabbas-500g-pkt-box.jpeg',
                        'https://www.nrtcfresh.com/wp-content/uploads/2020/11/ajwa_dates_new-1.jpg',
                      ],
                    },
                  },
                  // {
                  //   _component: HomePageComponentType.PromotionalProductGrid,
                  //   key: '130',
                  //   products: [
                  //     {
                  //       name: 'Baby Yellow Pepper',
                  //       image:
                  //         'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                  //       price: 12,
                  //       currency: 'USD',
                  //       heading: 'Heading',
                  //       buttonTitle: 'Shop',
                  //       label: 'New',
                  //       description: '100% fresh. Sourced from Netherlands',
                  //     },
                  //     {
                  //       name: 'Capsicum mixed',
                  //       image:
                  //         'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                  //       price: 23,
                  //       currency: 'USD',
                  //       heading: 'Heading',
                  //       buttonTitle: 'Shop',
                  //       label: 'New',
                  //       description: '100% fresh. Sourced from Netherlands',
                  //     },
                  //   ],
                  // },
                  {
                    _component: HomePageComponentType.SplitOfferCard,
                    key: '131',
                    title: 'Get Exclusive Offers',
                    subtitle:
                      'Get exclusive offers & more by signing up for our promotional email',
                    image:
                      'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/Newsletter_bg_300x.png?v=1653648705',
                    buttonTitle: 'View Offers',
                  },
                  {
                    _component: HomePageComponentType.BlogPosts,
                    key: '125',
                    title: 'From the journal',
                    mainBlog: {
                      id: 1,
                      title:
                        'How To Make The Perfect Veggie Burger With NRTC Fresh Vegetables',
                      image:
                        'https://www.nrtcfresh.com/wp-content/uploads/2021/12/Make-perfect-Veggie-burger-with-online-vegetables-Dubai-800x600.jpg',
                      published_date: 'May 26, 2022',
                      // author: 'author name',
                    },
                    blogs: [
                      {
                        id: 2,
                        title:
                          '5 tips to cook delicious Vegetables from NRTC Fresh',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2021/11/5-tips-to-cook-delicious-vegetable-online-Dubai-2400x1200.jpg',
                        published_date: 'May 26, 2022',
                        // author: 'author name',
                      },
                      {
                        id: 3,
                        title:
                          '5 Fruit and Vegetable preparation tips with NRTC Fresh',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2021/06/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-800x600.jpg',
                        published_date: 'May 28, 2022',
                        // author: 'author name',
                      },
                    ],
                  },
                  {
                    _component: HomePageComponentType.TextWithImage,
                    key: '132',
                    title: 'How It Works',
                    columns: [
                      {
                        title: 'Register',
                        description: 'Description Register',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2020/07/icon-HIW-02.svg',
                      },
                      {
                        title: 'Select Products & Place Order',
                        description:
                          'Description Select Products & Place Order',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2020/08/Page-1.svg',
                      },
                      {
                        title: 'Schedule Delivery',
                        description: 'Description Schedule Delivery',
                        image:
                          'https://www.nrtcfresh.com/wp-content/uploads/2020/08/Page-1.svg',
                      },
                    ],
                  },
                ]}
              />
            </ScrollView>
          </RelayEnvironmentProvider>
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
};

export default App;
