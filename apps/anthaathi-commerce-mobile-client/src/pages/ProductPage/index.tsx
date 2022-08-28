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
            // {
            //   _component: ProductListPageComponentType.SubCategories,
            //   key: '2121',
            //   subCategoryList: [
            //     {
            //       id: '1',
            //       title: 'Fruits',
            //     },
            //     {
            //       id: '2',
            //       title: 'Vegitables',
            //     },
            //     {
            //       id: '3',
            //       title: 'Bulk Buy',
            //     },
            //     {
            //       id: '4',
            //       title: 'Organic',
            //     },
            //     {
            //       id: '5',
            //       title: 'Pre-Cut',
            //     },
            //     {
            //       id: '6',
            //       title: 'Pre-Packed',
            //     },
            //     {
            //       id: '7',
            //       title: 'Gift Corner',
            //     },
            //     {
            //       id: '8',
            //       title: 'Juices',
            //     },
            //     {
            //       id: '9',
            //       title: 'Fresh Blooms',
            //     },
            //   ],
            // },
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
