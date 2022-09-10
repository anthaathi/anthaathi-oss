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
import {CartItemData} from '../../features/CMS/context/CartItemContext';
import {ProductProps} from '../../features/CMS/containers/CartPage/components/SuggestedItem';
import {useIntl} from 'react-intl';

const CartPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'CartPage'>
> = props => {
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
                _component: CartPageComponentType.BasketItem,
                key: '1213',
                title: 'Items',
                items: cartItem,
                handlePress: () => {
                  setCartItem([]);
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
              },
              {
                _component: CartPageComponentType.PricingCard,
                key: '1',
                subtotal: {currency: 'AED', price: productTotalPrice},
                discount: {currency: 'AED', price: 0},
                promoDiscount: {currency: 'AED', price: 0},
                shippingCharges: {currency: 'AED', price: 0},
                total: {currency: 'AED', price: productTotalPrice},
              },
            ]}
          />
        </ScrollView>
      ) : (
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{color: '#364A15', fontSize: 22, fontWeight: '700'}}>
            {intl.formatMessage({defaultMessage: 'Your cart is Empty'})}
          </Text>

          <Text
            style={{
              color: '#364A15',
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
              color: '#364A15',
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
