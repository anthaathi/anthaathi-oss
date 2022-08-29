import {View, ScrollView} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {
  CoreComponentType,
  HomePageComponentType,
} from '../../features/CMS/types/common';
import dataJson from '../../config/data.json';

const ProductPage = props => {
  return (
    <View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
        <CMSRenderer
          components={[
            {
              _component: CoreComponentType.Header,
              key: '123',
              title: 'Product',
              leftIcon: 'arrow-left',
              leftOnPress: () => {
                props.navigation.goBack();
              },
              rightIcon: 'account',
              rightOnPress: () => {
                props.navigation.navigate('Profile');
              },
            },
            {
              _component: HomePageComponentType.FeaturedProduct,
              key: '126',
              productInfo:
                dataJson.core.productPage.featuredProduct.productInfo,
            },
            {
              _component: HomePageComponentType.FeaturedCollection,
              key: '1251',
              title: 'Related Products',
              products: dataJson.core.productPage.featuredCollection.products,
            },
            {
              _component: HomePageComponentType.FeaturedCollection,
              key: '1250',
              title: 'Recently viewed',
              products: dataJson.core.productPage.featuredCollection.products,
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default ProductPage;
