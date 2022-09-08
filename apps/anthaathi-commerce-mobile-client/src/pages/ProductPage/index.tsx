import { ScrollView } from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import { HomePageComponentType } from '../../features/CMS/types/common';
import dataJson from '../../config/data.json';
import { RootStackParamList } from '../../types/Route';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRecoilState } from 'recoil';
import { CartItemData } from '../../features/CMS/context/CartItemContext';
import { ProductProps } from '../../features/CMS/containers/HomePage/components/FeaturedCollection';
import Header from '../../features/CMS/containers/Header';

const ProductPage = (
  props: NativeStackScreenProps<RootStackParamList, 'ProductPage'>,
) => {
  const productDetails = props.route.params?.productDetails;
  const [cartItem, setCartItem] = useRecoilState(CartItemData);
  return (
    <>
      <Header
        leftIcon={'arrow-left'}
        leftOnPress={() => props.navigation.goBack()}
        languageIcon={true}
        cartIcon={true}
        cartOnPress={() => {
          props.navigation.navigate('CartPage');
        }}
        mailIcon={false}
        searchIcon={true}
        logoImage={'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/everyday_1_256x256.png?v=1662529180'}
      />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 5 }}>
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
                      return { ...obj, numberOfItems: obj.numberOfItems + 1 };
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
                      return { ...obj, numberOfItems: obj.numberOfItems + 1 };
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
              onProductPress: (item: ProductProps) => {
                props.navigation.push('ProductPage', {
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
              _component: HomePageComponentType.FeaturedCollection,
              key: '1250',
              title: 'Recently viewed',
              products: dataJson.core.productPage.featuredCollection.products,
              onProductPress: (item: ProductProps) => {
                props.navigation.push('ProductPage', {
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
          ]}
        />
      </ScrollView>
    </>
  );
};

export default ProductPage;
