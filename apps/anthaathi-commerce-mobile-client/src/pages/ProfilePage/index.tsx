import {View, ScrollView} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {
  CoreComponentType,
  ProfilePageComponentType,
} from '../../features/CMS/types/common';
import dataJson from '../../config/data.json';

const ProfilePage = props => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
        <CMSRenderer
          components={[
            {
              _component: CoreComponentType.Header,
              key: '123',
              title: dataJson.core.profilePage.header.title,
              leftIcon: dataJson.core.profilePage.header.leftIcon,
              leftOnPress: () => {
                props.navigation.goBack();
              },
            },
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
              key: '1231',
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
            },
            {
              _component: ProfilePageComponentType.DeliveryAddresses,
              key: '3232',
              title: 'Address information',
              userAddress: dataJson.core.profilePage.addressInformation,
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default ProfilePage;
