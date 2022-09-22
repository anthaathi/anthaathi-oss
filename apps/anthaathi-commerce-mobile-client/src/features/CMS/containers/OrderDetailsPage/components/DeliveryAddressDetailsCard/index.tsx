import React from 'react';
import {useIntl} from 'react-intl';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {OrderDetailsPageComponentType} from '../../../../types/common';

export interface DeliveryAddressDetailsProps {
  deliveryTitle: string;
  deliveryAddress: string;
  mobileNumber: string;
}

const DeliveryAddressDetailsCard = (props: DeliveryAddressDetailsProps) => {
  const intl = useIntl();
  return (
    <Card
      style={{
        borderRadius: 4,
        margin: 10,
        padding: 15,
        borderColor: '#E3E2E7',
        borderWidth: 1,
      }}
      testID="deliveryAddressDetailsCard">
      <View>
        <Text
          style={{
            color: '#364A15',
            fontWeight: '700',
            fontSize: 16,
          }}>
          {props.deliveryTitle}
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={{color: '#364A15', fontSize: 14, width: '85%'}}>
            {props.deliveryAddress}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={{color: '#808080', fontSize: 14}}>
            {intl.formatMessage({defaultMessage: 'Mobile'})}
          </Text>
          <Text style={{color: '#364A15', fontSize: 14}}>
            {': ' + props.mobileNumber}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default DeliveryAddressDetailsCard;

export const DeliveryAddressDetailsCardCMSInput = {
  _component: OrderDetailsPageComponentType.DeliveryAddressDetailsCard,
  component: DeliveryAddressDetailsCard,
};
