import React from 'react';
import {useIntl} from 'react-intl';
import {Pressable, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {CheckOutPageComponentType} from '../../../../types/common';

export interface DeliveryAddressCardProps {
  deliveryTitle: string;
  deliveryAddress: string;
  buttonTitle: string;
  handlePress?: () => void;
  mobileNumber: string;
}

const DeliveryAddressCard = (props: DeliveryAddressCardProps) => {
  const intl = useIntl();
  return (
    <Card
      style={{
        marginHorizontal: 10,
        borderColor: '#E3E2E7',
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 5,
      }}
      testID="deliveryAddressCard">
      <Card.Content>
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
          <Pressable
            testID="changeAddressButton"
            style={{paddingHorizontal: 10}}
            onPress={props.handlePress}>
            <Text
              testID="deliverAddressButtonTitle"
              style={{color: '#008D3E', fontSize: 14, fontWeight: '500'}}>
              {props.buttonTitle}
            </Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={{color: '#808080', fontSize: 14}}>
            {intl.formatMessage({defaultMessage: 'Mobile'})}
          </Text>
          <Text style={{color: '#364A15', fontSize: 14}}>
            {': ' + props.mobileNumber}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default DeliveryAddressCard;

export const DeliveryAddressCardCMSInput = {
  _component: CheckOutPageComponentType.DeliveryAddressCard,
  component: DeliveryAddressCard,
};
