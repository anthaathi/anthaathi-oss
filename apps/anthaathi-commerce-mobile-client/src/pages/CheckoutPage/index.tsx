import React from 'react';
import CMSRenderer from '../../features/CMS';
import {
  CheckOutPageComponentType,
  CoreComponentType,
} from '../../features/CMS/types/common';
import {ScrollView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';
import {OptionDataProps} from '../../features/CMS/containers/Core/components/CMSSelectOption';
import {TextInput} from 'react-native-paper';
import {useSetRecoilState} from 'recoil';
import {CartItemData} from '../../features/CMS/context/CartItemContext';

const CheckoutPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'CheckoutPage'>
> = props => {
  const setCartItem = useSetRecoilState(CartItemData);
  return (
    <View style={{flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '142',
            title: 'Checkout',
            leftIcon: 'close',
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
        ]}
      />
      <ScrollView
        style={{
          paddingHorizontal: 10,
          flex: 1,
          marginBottom: 60,
        }}>
        <CMSRenderer
          components={[
            // {
            //   _component: CheckOutPageComponentType.DeliveryAddressCard,
            //   key: '1',
            //   deliveryTitle: 'Delivery Address',
            //   deliveryAddress:
            //     'Flat 13B, Prestine Towers, Downtown Town, Dubai, UAE - 72001',
            //   buttonTitle: 'Change',
            //   mobileNumber: '+90909090',
            // },
            {
              _component: CoreComponentType.CMSSelectOption,
              key: '21',
              title: 'Delivery Address',
              options: [
                {
                  id: 1,
                  key: 1,
                  title: 'Apartment',
                  subtitle: '14b street, AI Quoz Industrial Area 4',
                  leftIconName: 'map-marker',
                },
                {
                  id: 2,
                  key: 2,
                  title: 'Apartment',
                  subtitle: '1A street, Discovery Gardens',
                  leftIconName: 'map-marker',
                },
                {
                  id: 3,
                  key: 3,
                  title: 'Building No. 17',
                  subtitle: '14b street, AI Quoz Industrial Area 4',
                  leftIconName: 'map-marker',
                },
                {
                  id: 4,
                  key: 4,
                  title: 'Apartment',
                  subtitle: '1A street, Discovery Gardens',
                  leftIconName: 'map-marker',
                },
              ],
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
                {
                  key: '4',
                  name: 'Card on delivery',
                },
              ],
            },
          ]}
        />
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
            Comments
          </Text>

          <TextInput
            mode="flat"
            label={'Add a note to your order'}
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              height: 120,
              marginVertical: 10,
            }}
            multiline={true}
            activeUnderlineColor="#0f8443"
          />
        </View>
      </ScrollView>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.CMSButton,
            key: '1241',
            title: 'Purchase',
            handlePress: () => {
              setCartItem([]);
              props.navigation.navigate('HomePage');
            },
          },
        ]}
      />
    </View>
  );
};

export default CheckoutPage;
