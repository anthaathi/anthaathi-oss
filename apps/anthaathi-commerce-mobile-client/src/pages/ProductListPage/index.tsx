import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  CoreComponentType,
  ProductListPageComponentType,
} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import dataJson from '../../config/data.json';

const ProductListPage = props => {
  return (
    <View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
        <CMSRenderer
          components={[
            {
              _component: CoreComponentType.Header,
              key: '123',
              title: 'Products',
              leftIcon: 'menu',
              rightIcon: 'account',
              rightOnPress: () => {
                props.navigation.navigate('Profile');
              },
            },
            {
              _component: ProductListPageComponentType.SubCategories,
              key: '2121',
              subCategoryList: dataJson.core.productListPage.subCategoryList,
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default ProductListPage;
