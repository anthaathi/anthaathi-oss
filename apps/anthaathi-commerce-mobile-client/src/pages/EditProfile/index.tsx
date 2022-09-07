import {View, ScrollView} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {CoreComponentType} from '../../features/CMS/types/common';

const EditProfile = (props: {navigation: {goBack: () => void}}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '123',
            title: 'Profile',
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
              label: 'Name',
            },
            {
              _component: CoreComponentType.CMSTextInput,
              key: '12',
              label: 'Email',
            },
            {
              _component: CoreComponentType.CMSTextInput,
              key: '123',
              label: 'Mobile',
            },
            {
              _component: CoreComponentType.CMSTextInput,
              key: '124',
              label: 'Alternate Mobile',
            },
            {
              _component: CoreComponentType.CMSButton,
              key: '1241',
              title: 'Save',
              handlePress: () => {
                props.navigation.goBack();
              },
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default EditProfile;
