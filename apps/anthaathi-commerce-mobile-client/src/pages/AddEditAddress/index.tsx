import {View, ScrollView} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {CoreComponentType} from '../../features/CMS/types/common';

const AddEditAddress = (props: {navigation: {goBack: () => void}}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '123',
            title: 'Address',
            leftIcon: 'arrow-left',
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
        ]}
      />
      <ScrollView contentContainerStyle={{paddingHorizontal: 5, flex: 1}}>
        <CMSRenderer
          components={[
            {
              _component: CoreComponentType.CMSTextInput,
              key: '11',
              label: 'Apartment',
            },
            {
              _component: CoreComponentType.CMSTextInput,
              key: '12',
              label: 'Landmark',
            },
            {
              _component: CoreComponentType.CMSTextInput,
              key: '123',
              label: 'Address',
            },
            {
              _component: CoreComponentType.CMSTextInput,
              key: '124',
              label: 'City',
            },
            {
              _component: CoreComponentType.CMSTextInput,
              key: '1241',
              label: 'Country',
            },
            {
              _component: CoreComponentType.CMSTextInput,
              key: '1242',
              label: 'Postal Code',
            },
            {
              _component: CoreComponentType.CMSButton,
              key: '1244',
              title: 'Save',
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default AddEditAddress;
