import {ScrollView, View} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {
  CartPageComponentType,
  CoreComponentType,
} from '../../features/CMS/types/common';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'react-native-paper';

const CartPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'CartPage'>
> = props => {
  return (
    <View>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '142',
            title: 'Basket',
            leftIcon: 'close',
          },
        ]}
      />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 5, paddingBottom: 100}}>
        <View style={{marginTop: 14}} />
        <CMSRenderer
          components={[
            {
              _component: CartPageComponentType.SuggestedItem,
              key: '14',
              title: 'Suggested',
              products: [
                {
                  name: 'Baby Yellow Pepper',
                  image:
                    'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                  key: '12',
                  price: 12,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: 'pack',
                },
                {
                  name: 'Capsicum mixed',
                  image:
                    'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                  key: '23',
                  price: 23,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: 'pack',
                },
                {
                  name: 'Dabbas Dates',
                  key: 'test2',
                  price: 105.0,
                  currency: 'AED',
                  weight_unit: 'KG',
                  packaging: 'Box',
                  image:
                    'https://www.nrtcfresh.com/wp-content/uploads/2021/10/dabbas-500g-pkt-box-500x500.jpg',
                },
                {
                  name: 'Sweet Potato Orange (Cut Cube)',
                  key: 'test3',
                  price: 7.35,
                  currency: 'AED',
                  weight_unit: 'Pack',
                  packaging: 'pack',
                  notes: '250g',
                  image:
                    'https://www.nrtcfresh.com/wp-content/uploads/2020/11/Sweet_Potato_Orange-1.jpg',
                },
              ],
            },
            {
              _component: CartPageComponentType.BasketItem,
              key: '1213',
              title: 'Items',
              items: [
                {
                  name: 'Baby Yellow Pepper',
                  image:
                    'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                  key: '123',
                  price: 12,
                  numberOfItems: 2,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: '500 gms',
                },
                {
                  name: 'Baby Yellow Pepper',
                  image:
                    'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                  key: '12',
                  price: 12,
                  numberOfItems: 2,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: '500 gms',
                },
                {
                  name: 'Capsicum mixed',
                  image:
                    'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                  key: '23',
                  price: 23,
                  numberOfItems: 2,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: '500 gms',
                },
              ],
            },
            {
              _component: CartPageComponentType.PromoCode,
              key: '12',
              title: 'Add your promo code',
            },
            {
              _component: CartPageComponentType.PricingCard,
              key: '1',
              subtotal: {currency: 'USD', price: 10.1},
              discount: {currency: 'USD', price: 10.1},
              promoDiscount: {currency: 'USD', price: 10.1},
              shippingCharges: {currency: 'USD', price: 0},
              total: {currency: 'USD', price: 10.1},
            },
          ]}
        />

        <Button
          style={{marginTop: 12, padding: 10, marginHorizontal: 10}}
          mode="contained"
          onPress={() => {
            props.navigation.navigate('CheckoutPage');
          }}>
          Continue to Checkout
        </Button>
      </ScrollView>
    </View>
  );
};

export default CartPage;
