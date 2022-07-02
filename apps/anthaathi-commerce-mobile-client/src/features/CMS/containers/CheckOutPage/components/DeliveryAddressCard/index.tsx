import React from 'react';
import {useIntl} from 'react-intl';
import {Pressable, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

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
      }}>
      <Card.Content>
        <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
          {props.deliveryTitle}
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={{color: '#364A15', fontSize: 14, width: '85%'}}>
            {props.deliveryAddress}
          </Text>
          <Pressable
            style={{paddingHorizontal: 10}}
            onPress={props.handlePress}>
            <Text style={{color: '#008D3E', fontSize: 14, fontWeight: '500'}}>
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
