import React from 'react';
import {useIntl} from 'react-intl';
import {Pressable, View} from 'react-native';
import {Text, TouchableRipple, useTheme} from 'react-native-paper';
import {CheckOutPageComponentType} from '../../../../types/common';

export interface DeliveryAddressCardProps {
  deliveryTitle: string;
  deliveryAddress: string;
  buttonTitle: string;
  handlePress?: () => void;
  mobileNumber: string;
}

const DeliveryAddressCard = (props: DeliveryAddressCardProps) => {
  const theme = useTheme();
  const intl = useIntl();
  return (
    <TouchableRipple
      onPress={() => {}}
      style={{
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#FFF',
        padding: 15,
      }}
      testID="deliveryAddressCard">
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
          <Pressable
            testID="changeAddressButton"
            style={{paddingHorizontal: 10}}
            onPress={props.handlePress}>
            <Text
              testID="deliverAddressButtonTitle"
              style={{
                color: theme.colors.greenTextColor,
                fontSize: 14,
                fontWeight: '500',
              }}>
              {props.buttonTitle}
            </Text>
          </Pressable>
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
    </TouchableRipple>
  );
};

export default DeliveryAddressCard;

export const DeliveryAddressCardCMSInput = {
  _component: CheckOutPageComponentType.DeliveryAddressCard,
  component: DeliveryAddressCard,
};
