import React from 'react';
import {useIntl} from 'react-intl';
import {View} from 'react-native';
import {Card, Text, useTheme} from 'react-native-paper';
import {OrderDetailsPageComponentType} from '../../../../types/common';

export interface DeliveryAddressDetailsProps {
  deliveryTitle: string;
  deliveryAddress: string;
  mobileNumber: string;
}

const DeliveryAddressDetailsCard = (props: DeliveryAddressDetailsProps) => {
  const theme = useTheme();
  const intl = useIntl();
  return (
    <Card
      style={{
        borderRadius: 4,
        margin: 10,
        padding: 15,
        borderColor: theme.colors.cardBorderColor,
        borderWidth: 1,
      }}
      testID="deliveryAddressDetailsCard">
      <View>
        <Text
          style={{
            color: theme.colors.titleTextColor,
            fontWeight: '700',
            fontSize: 16,
          }}>
          {props.deliveryTitle}
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text
            style={{
              color: theme.colors.titleTextColor,
              fontSize: 14,
              width: '85%',
            }}>
            {props.deliveryAddress}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={{color: theme.colors.greyTextColor, fontSize: 14}}>
            {intl.formatMessage({defaultMessage: 'Mobile'})}
          </Text>
          <Text style={{color: theme.colors.titleTextColor, fontSize: 14}}>
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
