import {Linking, ScrollView, View} from 'react-native';
import React from 'react';

import CMSRenderer from '../../features/CMS';
import {
  CoreComponentType,
  HomePageComponentType,
} from '../../features/CMS/types/common';

import dataJson from '../../config/data.json';
import categoryJson from '../../config/category.json';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';
import {ProductProps} from '../../features/CMS/containers/HomePage/components/FeaturedCollection';

const HomePage = (
  props: NativeStackScreenProps<RootStackParamList, 'HomePage'>,
) => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 5, paddingBottom: 80}}>
        <CMSRenderer
          components={[
            {
              _component: HomePageComponentType.DeliveringSelection,
              key: '124',
              userAddresses: [
                {
                  key: 1,
                  title: 'Apartment',
                  subtitle: '14b street, AI Quoz Industrial Area 4',
                },
                {
                  key: 2,
                  title: 'Apartment',
                  subtitle: '1A street, Discovery Gardens',
                },
                {
                  key: 3,
                  title: 'Building No. 17',
                  subtitle: '14b street, AI Quoz Industrial Area 4',
                },
                {
                  key: 4,
                  title: 'Apartment',
                  subtitle: '1A street, Discovery Gardens',
                },
              ],
            },

            {
              _component: HomePageComponentType.HeroCategories,
              key: '127',
              title: categoryJson.heroCategories.title,
              items: categoryJson.heroCategories.items,
              onPress: (value: string) => {
                props.navigation.navigate('ProductListPage1', {
                  categoryName: value,
                });
              },
            },
            {
              _component: HomePageComponentType.FeaturedCollection,
              key: '1251',
              title: 'Special Offers',
              products: dataJson.core.homePage.featuredCollection.products,
              handlePress: () => {
                props.navigation.navigate('ProductListPage1');
              },
              onProductPress: (item: ProductProps) => {
                props.navigation.navigate('ProductPage', {
                  productDetails: {
                    id: item.id,
                    description: item.description,
                    weight_unit: item.weight_unit,
                    packaging: item.packaging,
                    key: item.key,
                    notes: item.notes,
                    name: item.name,
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
                    price: item.price,
                    currency: item.currency,
                    image: [item.image],
                  },
                });
              },
            },

            {
              _component: HomePageComponentType.HeroSlide,
              key: '128',
              backgroundImageSrc:
                dataJson.core.homePage.heroSlide.backgroundImage,
              title: dataJson.core.homePage.heroSlide.title,
              subTitle: dataJson.core.homePage.heroSlide.subTitle,
              buttonTitle: dataJson.core.homePage.heroSlide.buttonTitle,
              handlePress: () => {
                props.navigation.navigate('ProductListPage1', {
                  categoryName: 'juices',
                });
              },
            },

            {
              _component: HomePageComponentType.PromotionalGrid,
              key: '129',
              items: [
                {
                  key: dataJson.core.homePage.promotionalGrid.items[1].key,
                  heading:
                    dataJson.core.homePage.promotionalGrid.items[1].heading,
                  button1Text:
                    dataJson.core.homePage.promotionalGrid.items[1].button1Text,
                  onPress1: () => {
                    props.navigation.navigate('ProductListPage1', {
                      categoryName: 'organic',
                    });
                  },
                  height: [180, 240, 260, 270],
                  image: dataJson.core.homePage.promotionalGrid.items[1].image,
                  width: ['50%', '50%', '100%', '100%'],
                },
                {
                  key: dataJson.core.homePage.promotionalGrid.items[2].key,
                  heading:
                    dataJson.core.homePage.promotionalGrid.items[2].heading,
                  button1Text:
                    dataJson.core.homePage.promotionalGrid.items[2].button1Text,
                  onPress1: () => {
                    props.navigation.navigate('ProductListPage1', {
                      categoryName: 'bulkbuy',
                    });
                  },
                  height: [180, 240, 260, 270],
                  image: dataJson.core.homePage.promotionalGrid.items[2].image,
                  width: ['50%', '50%', '100%', '100%'],
                },
              ],
            },
            {
              _component: HomePageComponentType.SplitOfferCard,
              key: '131',
              title: 'Get Exclusive Offers',
              subtitle:
                'Get exclusive offers & more by signing up for our promotional email',
              image: dataJson.core.homePage.splitOfferCard.image,
              buttonTitle: 'View Offers',
              onPress: () => {
                props.navigation.navigate('ProductListPage1');
              },
            },
            // {
            //   _component: HomePageComponentType.ChatFloatingButton,
            //   key: '1312',
            // },
          ]}
        />
      </ScrollView>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.CMSFABButton,
            key: '35435345',
            icon: 'whatsapp',
            buttonRadius: 50,
            buttonBackgroundColor: '#0f8443',
            handlePress: () => {
              Linking.openURL(
                'http://api.whatsapp.com/send?phone=971557707314',
              );
            },
          },
        ]}
      />
    </View>
  );
};

export default HomePage;
