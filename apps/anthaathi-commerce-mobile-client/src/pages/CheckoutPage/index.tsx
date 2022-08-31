import React from 'react';
import CMSRenderer from '../../features/CMS';
import {
  CheckOutPageComponentType,
  CoreComponentType,
} from '../../features/CMS/types/common';
import {ScrollView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';

const CheckoutPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'CheckoutPage'>
> = props => {
  return (
    <View>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '142',
            title: 'Checkout',
            leftIcon: 'close',
          },
        ]}
      />
      <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
        <CMSRenderer
          components={[
            {
              _component: CheckOutPageComponentType.DeliveryAddressCard,
              key: '1',
              deliveryTitle: 'Delivery Address',
              deliveryAddress:
                'Flat 13B, Prestine Towers, Downtown Town, Dubai, UAE - 72001',
              buttonTitle: 'Change',
              mobileNumber: '+90909090',
            },
            {
              _component: CoreComponentType.DatePicker,
              key: '1412',
              title: 'Date',
            },
            {
              _component: CheckOutPageComponentType.TimeSlotSelection,
              key: '123',
              title: 'Timeslot',
              timeSlots: [
                {
                  key: '1',
                  name: '09am - 12pm',
                },
                {
                  key: '2',
                  name: '01pm - 05pm',
                },
                {
                  key: '3',
                  name: '05pm - 10pm',
                },
              ],
            },
            {
              _component: CheckOutPageComponentType.TimeSlotSelection,
              key: '12311',
              title: 'Frequency',
              timeSlots: [
                {
                  key: '1',
                  name: 'One time',
                },
                {
                  key: '2',
                  name: 'Weekly',
                },
                {
                  key: '3',
                  name: 'Monthly',
                },
              ],
            },
            {
              _component: CheckOutPageComponentType.PaymentMethodSelection,
              key: '12',
              title: 'Payment Method',
              options: [
                {
                  key: '1',
                  name: 'Credit / Debit Card',
                },
                {
                  key: '2',
                  name: 'Cash on delivery',
                },
                {
                  key: '3',
                  name: 'Wallet',
                },
              ],
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default CheckoutPage;
