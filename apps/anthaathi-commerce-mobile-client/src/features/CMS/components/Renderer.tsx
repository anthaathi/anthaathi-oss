import * as React from 'react';
import {useTheme} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import Header from './Header';
import DeliveryAddressCard from '../containers/CheckOutPage/components/DeliveryAddressCard';
import {useIntl} from 'react-intl';
import PaymentMethodSelection from '../containers/CheckOutPage/components/PaymentMethodSelection';

export default function () {
  const {
    colors: {background},
  } = useTheme();

  const intl = useIntl();

  return (
    <>
      <Header rightIcon="close" title="Checkout" placement="center" />
      <ScrollView style={{height: '100%', backgroundColor: background}}>
        <View style={{marginTop: 12}}>
          <DeliveryAddressCard
            deliveryTitle={intl.formatMessage({
              defaultMessage: 'Delivery Address',
            })}
            deliveryAddress="Flat 13B, Prestine Towers, Downtown Town, Dubai, UAE - 72001"
            buttonTitle={intl.formatMessage({
              defaultMessage: 'Change',
            })}
            mobileNumber="+971 50 123 4567"
          />
        </View>
        <View style={{marginTop: 12}}>
          <PaymentMethodSelection
            title="Payment Method"
            options={[
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
            ]}
          />
        </View>
      </ScrollView>
    </>
  );
}
