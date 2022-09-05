import {ScrollView} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {HomePageComponentType} from '../../features/CMS/types/common';
import dataJson from '../../config/data.json';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRecoilState} from 'recoil';
import {CartItemData} from '../../features/CMS/context/CartItemContext';

const ProductPage = (
  props: NativeStackScreenProps<RootStackParamList, 'ProductPage'>,
) => {
  const productDetails = props.route.params?.productDetails;
  const [cartItem, setCartItem] = useRecoilState(CartItemData);
  return (
    <>
      <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
        <CMSRenderer
          components={[
            {
              _component: HomePageComponentType.FeaturedProduct,
              key: '126',
              productInfo: productDetails,
              handleAddToCart: () => {
                if (cartItem.some(el => el.id === productDetails.id)) {
                  const newState = cartItem.map(obj => {
                    if (obj.id === productDetails.id) {
                      return {...obj, numberOfItems: obj.numberOfItems + 1};
                    }
                    return obj;
                  });
                  setCartItem(newState);
                } else {
                  setCartItem(oldCartItem => [
                    ...oldCartItem,
                    {
                      id: productDetails.id,
                      name: productDetails.name,
                      image: productDetails.image[0],
                      price: productDetails.price,
                      currency: productDetails.currency,
                      numberOfItems: 1,
                      packaging: productDetails.packaging,
                      weight_unit: productDetails.weight_unit,
                      key: productDetails.key,
                    },
                  ]);
                }
              },
              handleBuyItNow: () => {
                if (cartItem.some(el => el.id === productDetails.id)) {
                  const newState = cartItem.map(obj => {
                    if (obj.id === productDetails.id) {
                      return {...obj, numberOfItems: obj.numberOfItems + 1};
                    }
                    return obj;
                  });
                  setCartItem(newState);
                } else {
                  setCartItem(oldCartItem => [
                    ...oldCartItem,
                    {
                      id: productDetails.id,
                      name: productDetails.name,
                      image: productDetails.image[0],
                      price: productDetails.price,
                      currency: productDetails.currency,
                      numberOfItems: 1,
                      packaging: productDetails.packaging,
                      weight_unit: productDetails.weight_unit,
                      key: productDetails.key,
                    },
                  ]);
                }
                props.navigation.navigate('CartPage');
              },
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
