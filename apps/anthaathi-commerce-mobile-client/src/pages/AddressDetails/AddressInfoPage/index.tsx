import {View} from 'react-native';
import React from 'react';
import {ProfilePageComponentType} from '../../../features/CMS/types/common';
import CMSRenderer from '../../../features/CMS';
import dataJson from '../../../config/data.json';
import {RootStackParamList} from '../../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const AddressInfoPage = (
  props: NativeStackScreenProps<RootStackParamList, 'AddressInfo'>,
) => {
  return (
    <View style={{marginVertical: 10}}>
      <CMSRenderer
        components={[
          {
            _component: ProfilePageComponentType.DeliveryAddresses,
            key: '3232',
            title: 'Address information',
            userAddress: dataJson.core.profilePage.addressInformation,
            handlePress: () => {
              props.navigation.navigate('AddEditAddress');
            },
          },
        ]}
      />
    </View>
  );
};

export default AddressInfoPage;
