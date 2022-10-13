import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {
  CartPageComponentType,
  CoreComponentType,
} from '../../features/CMS/types/common';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRecoilState} from 'recoil';
import {useIntl} from 'react-intl';
import {useTheme} from 'react-native-paper';
import {ProductProps} from '../../features/CMS/containers/ProductListPage/components/ProductList';
import { CartItemData } from '../../hooks/useCart';

const CartPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'CartPage'>
> = props => {
  const theme = useTheme();
  const intl = useIntl();
  const [cartItem, setCartItem] = useRecoilState(CartItemData);

  const productTotalPrice = React.useMemo(() => {
    return cartItem.reduce((accumulator, object) => {
      return accumulator + object.numberOfItems * object.price;
    }, 0);
  }, [cartItem]);

  return (
    <View style={{flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '142',
            title: 'Basket',
            leftIcon: 'close',
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
        ]}
      />
      {cartItem.length > 0 ? (
        <ScrollView
          style={{
            paddingHorizontal: 10,
            flex: 1,
            marginBottom: 60,
          }}>
          <View style={{marginTop: 14}} />
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
                        ...item,
                        numberOfItems: 1,
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
                _component: CartPageComponentType.BasketItem,
                key: '1213',
                title: 'Items',
                items: cartItem,
                handlePressRemoveAllProduct: () => {
                  setCartItem([]);
                },
                handlePressViewProduct: (item: ProductProps) => {
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
                removeProductPress: (id: number, numberOfItems: number) => {
                  if (numberOfItems > 1) {
                    const newState = cartItem.map(obj => {
                      if (obj.id === id) {
                        return {
                          ...obj,
                          numberOfItems: obj.numberOfItems - 1,
                        };
                      }
                      return obj;
                    });
                    setCartItem(newState);
                  } else {
                    setCartItem(current =>
                      current.filter(obj => {
                        return obj.id !== id;
                      }),
                    );
                  }
                },
                addProductPress: (id: number) => {
                  const newState = cartItem.map(obj => {
                    if (obj.id === id) {
                      return {...obj, numberOfItems: obj.numberOfItems + 1};
                    }
                    return obj;
                  });
                  setCartItem(newState);
                },
              },
              {
                _component: CartPageComponentType.PromoCode,
                key: '12',
                title: 'Add your promo code',
                handlePress: () => {
                  props.navigation.navigate('ApplyCouponPage');
                },
              },
              {
                _component: CartPageComponentType.PricingCard,
                key: '1',
                subtotal: {currency: 'AED', price: productTotalPrice},
                discount: {currency: 'AED', price: 0},
                taxAmount: {currency: 'AED', price: productTotalPrice * 0.05},
                shippingCharges: {currency: 'AED', price: 0},
                total: {
                  currency: 'AED',
                  price: productTotalPrice + productTotalPrice * 0.05,
                },
              },
            ]}
          />
        </ScrollView>
      ) : (
        <View
          style={{alignItems: 'center', marginTop: 50, marginHorizontal: 10}}>
          <Text
            style={{
              color: theme.colors.titleTextColor,
              fontSize: 22,
              fontWeight: '700',
            }}>
            {intl.formatMessage({defaultMessage: 'Your cart is Empty'})}
          </Text>

          <Text
            style={{
              color: theme.colors.titleTextColor,
              fontSize: 16,
              fontWeight: '400',
              marginTop: 20,
            }}>
            {intl.formatMessage({
              defaultMessage:
                "Looks like you haven't added any items to the cart yet.",
            })}
          </Text>

          <Text
            style={{
              color: theme.colors.titleTextColor,
              fontSize: 16,
              fontWeight: '400',
              marginTop: 5,
            }}>
            {intl.formatMessage({
              defaultMessage: 'Start shopping to fill it in.',
            })}
          </Text>
        </View>
      )}
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.CMSButton,
            key: '1241',
            title:
              cartItem.length > 0
                ? intl.formatMessage({
                    defaultMessage: 'Continue to Checkout',
                  })
                : intl.formatMessage({
                    defaultMessage: 'Start Shopping',
                  }),
            handlePress: () => {
              if (cartItem.length > 0) {
                props.navigation.navigate('CheckoutPage');
              } else {
                props.navigation.navigate('HomePage');
              }
            },
          },
        ]}
      />
    </View>
  );
};

export default CartPage;
