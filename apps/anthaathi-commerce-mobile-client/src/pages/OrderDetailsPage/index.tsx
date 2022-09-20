import {View, Text} from 'react-native';
import React from 'react';
import {
  CartPageComponentType,
  CoreComponentType,
  OrderDetailsPageComponentType,
} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';

const OrderDetailsPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'OrderDetailsPage'>
> = props => {
  return (
    <View>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '142',
            title: 'Order #123',
            leftIcon: 'close',
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
          {
            _component: CartPageComponentType.PricingCard,
            key: '1',
            title: 'Payment Information',
            subtotal: {currency: 'AED', price: 100},
            discount: {currency: 'AED', price: 0},
            taxAmount: {currency: 'AED', price: 100 * 0.05},
            shippingCharges: {currency: 'AED', price: 0},
            total: {
              currency: 'AED',
              price: 100 + 100 * 0.05,
            },
          },
          {
            _component: OrderDetailsPageComponentType.DeliveryAddressDetailsCard,
            key: '12',
            deliveryTitle: 'Delivery Address',
            deliveryAddress: 'USA',
            mobileNumber: '+90909090',
          },
        ]}
      />
    </View>
  );
};

export default OrderDetailsPage;
