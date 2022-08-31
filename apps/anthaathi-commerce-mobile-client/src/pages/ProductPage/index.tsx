import {View, ScrollView} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {
  CoreComponentType,
  HomePageComponentType,
} from '../../features/CMS/types/common';
import dataJson from '../../config/data.json';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ProductPage = (
  props: NativeStackScreenProps<RootStackParamList, 'ProductPage'>,
) => {
  return (
    <>
      <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
        <CMSRenderer
          components={[
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
    </>
  );
};

export default ProductPage;
