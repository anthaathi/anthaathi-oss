import {View} from 'react-native';
import React from 'react';
import {ProductListPageComponentType} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import dataJson from '../../config/data.json';

const ProductListPage = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <CMSRenderer
        components={[
          // {
          //   _component: ProductListPageComponentType.SubCategories,
          //   key: '2121',
          //   subCategoryList: dataJson.core.productListPage.subCategoryList,
          // },
          {
            _component: ProductListPageComponentType.ProductList,
            key: '1233',
            handlePress: () => {
              props.navigation.navigate('ProductPage');
            },
            products: dataJson.core.productPage.featuredCollection.products,
          },
        ]}
      />
    </View>
  );
};

export default ProductListPage;
