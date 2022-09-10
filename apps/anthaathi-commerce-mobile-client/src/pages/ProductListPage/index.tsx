import {View} from 'react-native';
import React from 'react';
import {
  CartPageComponentType,
  CoreComponentType,
  ProductListPageComponentType,
} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import productJson from '../../config/product.json';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';
import {useRecoilState} from 'recoil';
import {CartItemData} from '../../features/CMS/context/CartItemContext';
import {ProductProps} from '../../features/CMS/containers/ProductListPage/components/ProductList';
import { useIntl } from 'react-intl';

const ProductListPage = (
  props: NativeStackScreenProps<RootStackParamList, 'ProductListPage'>,
) => {
  const [cartItem, setCartItem] = useRecoilState(CartItemData);
  const intl = useIntl();

  const productList = productJson.featuredCollection.products;

  const productFilter = React.useMemo(() => {
    return productList.filter(item => item.category === props.route.name);
  }, [productList, props.route.name]);

  const productTotalPrice = React.useMemo(() => {
    return cartItem.reduce((accumulator, object) => {
      return accumulator + object.numberOfItems * object.price;
    }, 0);
  }, [cartItem]);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CartPageComponentType.SuggestedItem,
            key: '14',
            title: 'Suggested',
            handlePress2: (item: ProductProps) => {
              if (cartItem.some(el => el.id === item.id)) {
                const newState = cartItem.map(obj => {
                  if (obj.id === item.id) {
                    return {...obj, numberOfItems: obj.numberOfItems + 1};
                  }
                  return obj;
                });
                setCartItem(newState);
              } else {
                setCartItem(oldCartItem => [
                  ...oldCartItem,
                  {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    currency: item.currency,
                    numberOfItems: 1,
                    packaging: item.packaging,
                    weight_unit: item.weight_unit,
                    key: item.key,
                  },
                ]);
              }
            },
            products: [
              {
                id: 1,
                name: 'Fruit Platter Production',
                key: 'test5',
                price: '40.0',
                currency: 'AED',
                weight_unit: 'Piece',
                packaging: 'pack',
                notes: '(10 pcs of Sticks)',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/products/WhatsApp-Image-2022-02-17-at-16.47.25_360x.jpg?v=1653585638',
              },
              {
                id: 2,
                name: 'Dabbas Dates',
                key: 'test6',
                price: '105.0',
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'Box',
                notes: 'Approx 8kg per box.',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/products/8kg-dabbas-1kg_1800x1800.jpg?v=1653584833',
              },
              {
                id: 3,
                name: 'Sweet Potato Orange (Cut Cube)',
                key: 'test7',
                price: '7.35',
                currency: 'AED',
                weight_unit: 'Pack',
                packaging: 'pack',
                notes: '250g',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/products/Sweet_Potato_Orange-1_360x.jpg?v=1653583303',
              },
              {
                id: 4,
                name: 'Apricot',
                key: 'test8',
                price: '10.0',
                currency: 'AED',
                weight_unit: 'pack',
                packaging: 'pack',
                notes: 'approx 1kg to 1.15 kg per pack',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/products/WhatsApp-Image-2022-05-19-at-5.39.55-PM-removebg-preview_1800x1800.jpg?v=1653585843',
              },
            ],
          },
          {
            _component: ProductListPageComponentType.ProductList,
            key: '1233',
            handlePress: (item: ProductProps) => {
              if (cartItem.some(el => el.id === item.id)) {
                const newState = cartItem.map(obj => {
                  if (obj.id === item.id) {
                    return {...obj, numberOfItems: obj.numberOfItems + 1};
                  }
                  return obj;
                });
                setCartItem(newState);
              } else {
                setCartItem(oldCartItem => [
                  ...oldCartItem,
                  {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    currency: item.currency,
                    numberOfItems: 1,
                    packaging: item.packaging,
                    weight_unit: item.weight_unit,
                    key: item.key,
                  },
                ]);
              }
            },
            handleLongPress: (item: ProductProps) => {
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
            products: productFilter,
          },
          {
            _component: CoreComponentType.CMSFABButton,
            key: '123',
            title:
              'View Basket ' +
              (cartItem.length > 0 ? `(${cartItem.length} Items) (${intl.formatNumber(productTotalPrice, {
                style: 'currency',
                currency: 'AED',
              })})` : ''),
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
