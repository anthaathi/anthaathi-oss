import {Pressable, View} from 'react-native';
import React from 'react';
import {Button, Card, Divider, Text} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {ProfilePageComponentType} from '../../../../types/common';

type AddressProps = {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  country: string;
  address: string;
  apartment: string;
  city: string;
  landmark: string;
  postalCode: number;
};

export interface DeliveryAddressesProps {
  title: string;
  handlePress?: () => void;
  userAddress: AddressProps[];
}

const DeliveryAddresses = (props: DeliveryAddressesProps) => {
  const intl = useIntl();
  return (
    <View style={{marginHorizontal: 10}} testID="deliveryAddresses">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
          {props.title}
        </Text>
        <Button
          testID="addNewAddress"
          mode="text"
          labelStyle={{color: '#008D3E'}}
          onPress={props.handlePress}>
          {intl.formatMessage({defaultMessage: 'Add New'})}
        </Button>
      </View>
      <Card
        style={{
          borderColor: '#E3E2E7',
          borderWidth: 1,
          borderRadius: 4,
          marginVertical: 2,
        }}
        testID="personalInformation">
        <Card.Content>
          {props.userAddress.map((data, index) => (
            <AddressRenderer key={index} data={data} />
          ))}
        </Card.Content>
      </Card>
    </View>
  );
};

const AddressRenderer = ({
  data,
  handlePress,
}: {
  data: AddressProps;
  handlePress?: () => void;
}) => {
  const intl = useIntl();
  return (
    <>
      <View
        testID="addressComponent"
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginVertical: 5,
        }}>
        <View style={{width: '80%'}}>
          <Text
            testID="addressText1"
            style={{fontSize: 14, color: '#364A15', fontWeight: '600'}}>
            {data.apartment +
              ', ' +
              data.address +
              ', ' +
              data.city +
              ', ' +
              data.country}
          </Text>

          <Text style={{fontSize: 14, color: '#808080', fontWeight: '500'}}>
            {'Landmark: ' + data.landmark}
          </Text>
        </View>
        <Pressable
          testID="addressChangeButtonPress"
          onPress={handlePress}
          style={{width: '20%', alignItems: 'center'}}>
          <Text
            testID="addressChangeButtonTitle"
            style={{color: '#008D3E', fontSize: 14, fontWeight: '500'}}>
            {intl.formatMessage({defaultMessage: 'Edit'})}
          </Text>
        </Pressable>
      </View>
      <Divider style={{marginVertical: 4}} />
    </>
  );
};

export default DeliveryAddresses;

export const DeliveryAddressesCMSInput = {
  _component: ProfilePageComponentType.DeliveryAddresses,
  component: DeliveryAddresses,
};
