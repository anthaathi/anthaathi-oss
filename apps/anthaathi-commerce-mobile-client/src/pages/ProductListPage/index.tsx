import {View} from 'react-native';
import React from 'react';
import {
  CoreComponentType,
  ProductListPageComponentType,
} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import dataJson from '../../config/data.json';

const ProductListPage = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <CMSRenderer
        components={[
          {
            _component: ProductListPageComponentType.ProductList,
            key: '1233',
            handlePress: () => {
              props.navigation.navigate('ProductPage');
            },
            products: dataJson.core.productPage.featuredCollection.products,
          },
          {
            _component: CoreComponentType.CMSFABButton,
            key: '123',
            title: 'View Basket',
            icon: 'cart',
            handlePress: () => {
              // props.navigation.navigate()
            },
          },
        ]}
      />
    </View>
  );
};

export default ProductListPage;
