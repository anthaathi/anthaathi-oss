import {View} from 'react-native';
import React from 'react';
import {
  CoreComponentType,
  ProductListPageComponentType,
} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import productJson from '../../config/product.json';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';

const ProductListPage = (
  props: NativeStackScreenProps<RootStackParamList, 'ProductListPage'>,
) => {
  const productList = productJson.featuredCollection.products;
 
  const productFilter = React.useMemo(() => {
    return productList.filter(item => item.category === props.route.name);
  }, [productList, props.route.name]);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: ProductListPageComponentType.ProductList,
            key: '1233',
            handlePress: () => {
              props.navigation.navigate('ProductPage');
            },
            products: productFilter,
          },
          {
            _component: CoreComponentType.CMSFABButton,
            key: '123',
            title: 'View Basket',
            icon: 'cart',
            handlePress: () => {
              props.navigation.navigate('CartPage');
            },
          },
        ]}
      />
    </View>
  );
};

export default ProductListPage;
