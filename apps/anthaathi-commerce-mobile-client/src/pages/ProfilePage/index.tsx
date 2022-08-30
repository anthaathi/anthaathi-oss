import {View, ScrollView} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {
  CoreComponentType,
  ProfilePageComponentType,
} from '../../features/CMS/types/common';
import dataJson from '../../config/data.json';

const ProfilePage = (props: {
  navigation: {goBack: () => void; navigate: (arg0: string) => void};
}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '123',
            title: dataJson.core.profilePage.header.title,
            leftIcon: 'menu',
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
        ]}
      />
      <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
        <CMSRenderer
          components={[
            {
              _component: CoreComponentType.CMSAvatar,
              key: '1231',
              userData: {
                name: 'OY',
                photo: 'https://reactnative.dev/img/tiny_logo.png',
              },
              size: 120,
              type: 'image',
            },
            {
              _component: CoreComponentType.CMSText,
              key: '11',
              title: 'Welcome Omkar Yadav',
            },
            {
              _component: ProfilePageComponentType.WalletBalance,
              key: '2323',
              title: dataJson.core.profilePage.walletBalance.title,
              balance: dataJson.core.profilePage.walletBalance.balance,
              currency: dataJson.core.profilePage.walletBalance.currency,
              buttonTitle: dataJson.core.profilePage.walletBalance.buttonTitle,
            },
            {
              _component: ProfilePageComponentType.PersonalInformation,
              title: dataJson.core.profilePage.personalInformation.title,
              key: 'test12',
              personalInfo:
                dataJson.core.profilePage.personalInformation.personalInfo,
              handlePress: () => {
                props.navigation.navigate('EditProfile');
              },
            },
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
      </ScrollView>
    </View>
  );
};

export default ProfilePage;
