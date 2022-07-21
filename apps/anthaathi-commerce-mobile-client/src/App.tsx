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
            <ScrollView>
              <CMSRenderer
                components={[
                  {
                    _component: CoreComponentType.Header,
                    key: '123',
                    title: 'Something',
                    leftIcon: 'menu',
                  },
                  {
                    _component: HomePageComponentType.DeliveringSelection,
                    key: '124',
                    country: 'India',
                    location: 'Dubai',
                  },
                  {
                    _component: HomePageComponentType.BlogPosts,
                    key: '125',
                    title: 'From the journal',
                    mainBlog: {
                      id: 1,
                      title: 'blog title',
                      image:
                        'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_360x.jpg',
                      published_date: 'May 26, 2022',
                      author: 'author name',
                    },
                    blogs: [
                      {
                        id: 2,
                        title: 'blog title',
                        image:
                          'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_520x500.jpg',
                        published_date: 'May 26, 2022',
                        author: 'author name',
                      },
                    ],
                  },
                  {
                    _component: HomePageComponentType.FeaturedCollection,
                    key: '1251',
                    title: 'test',
                    products: [
                      {
                        name: 'test',
                        key: 'test1',
                        price: 0,
                        currency: 'USD',
                        weight_unit: 'KG',
                        packaging: 'pack',
                        notes: 'pack',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                      {
                        name: 'test',
                        key: 'test2',
                        price: 0,
                        currency: 'USD',
                        weight_unit: 'KG',
                        packaging: 'pack',
                        notes: 'pack',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                      {
                        name: 'test',
                        key: 'test3',
                        price: 0,
                        currency: 'USD',
                        weight_unit: 'KG',
                        packaging: 'pack',
                        notes: 'pack',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                    ],
                  },
                  {
                    _component: HomePageComponentType.FeaturedProduct,
                    key: '126',
                    productInfo: {
                      name: 'test',
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
                      price: 0,
                      currency: 'USD',
                      image: [
                        'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                        'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      ],
                    },
                  },
                  {
                    _component: HomePageComponentType.HeroCategories,
                    key: '127',
                    title: 'Test',
                    items: [
                      {
                        title: 'test',
                        key: 'test1',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                      {
                        title: 'test',
                        key: 'test2',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                      {
                        title: 'test',
                        key: 'test2',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                      {
                        title: 'test',
                        key: 'test3',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                      {
                        title: 'test',
                        key: 'test4',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                      {
                        title: 'test',
                        key: 'test5',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                      {
                        title: 'test',
                        key: 'test6',
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                      },
                    ],
                  },
                  {
                    _component: HomePageComponentType.HeroSlide,
                    key: '128',
                    backgroundImageSrc:
                      'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430',
                    title: 'test title',
                    subTitle: 'test subtitle',
                    buttonTitle: 'View All',
                  },
                  {
                    _component: HomePageComponentType.PromotionalGrid,
                    key: '129',
                    items: [
                      {
                        key: '12',
                        subHeading: 'Something',
                        heading: 'Something',
                        text: 'test',
                        button1Text: 'SHOP NOW',
                        height: [180, 240, 260, 270],
                        image:
                          'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                        width: ['100%', '50%', '100%', '100%'],
                      },
                      {
                        key: '1233',
                        subHeading: 'Something',
                        heading: 'Something',
                        text: 'test',
                        button1Text: 'SHOP NOW',
                        height: [180, 240, 260, 270],
                        image:
                          'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                        width: ['100%', '50%', '100%', '100%'],
                      },
                    ],
                  },
                  {
                    _component: HomePageComponentType.PromotionalProductGrid,
                    key: '130',
                    products: [
                      {
                        name: 'Baby Yellow Pepper',
                        image:
                          'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                        price: 12,
                        currency: 'USD',
                        heading: 'Heading',
                        buttonTitle: 'Shop',
                        label: 'New',
                        description: '100% fresh. Sourced from Netherlands',
                      },
                      {
                        name: 'Capsicum mixed',
                        image:
                          'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                        price: 23,
                        currency: 'USD',
                        heading: 'Heading',
                        buttonTitle: 'Shop',
                        label: 'New',
                        description: '100% fresh. Sourced from Netherlands',
                      },
                    ],
                  },
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
                    _component: HomePageComponentType.TextWithImage,
                    key: '132',
                    title: 'How It Works',
                    columns: [
                      {
                        title: 'Register',
                        description: 'Description Register',
                        image: '',
                      },
                      {
                        title: 'Select Products & Place Order',
                        description:
                          'Description Select Products & Place Order',
                        image: '',
                      },
                      {
                        title: 'Schedule Delivery',
                        description: 'Description Schedule Delivery',
                        image: '',
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
