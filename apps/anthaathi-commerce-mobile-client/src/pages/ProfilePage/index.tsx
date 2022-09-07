/* eslint-disable react/no-unstable-nested-components */
import {View} from 'react-native';
import React from 'react';
import {Divider, List} from 'react-native-paper';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ProfilePage = (
  props: NativeStackScreenProps<RootStackParamList, 'Profile'>,
) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 5}}>
      <ListItemData
        title="Personal details"
        iconName="account"
        onPress={() => {
          props.navigation.navigate('EditProfile');
        }}
      />
      <ListItemData
        title="Delivery addresses"
        iconName="map-marker"
        onPress={() => {
          props.navigation.navigate('AddressInfo');
        }}
      />
      <ListItemData
        title="Payment details"
        iconName="credit-card-edit-outline"
      />
      <ListItemData title="Gift cards" iconName="wallet-giftcard" />
      <ListItemData title="My reviews" iconName="star" />
      <ListItemData title="Settings" iconName="cog" />
      {/* <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
        <CMSRenderer
          components={[
            {
              _component: CoreComponentType.CMSAvatar,
              key: '1231',
              userData: {
                name: 'OY',
                photo: '',
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
        />
      </ScrollView> */}
    </View>
  );
};

const ListItemData = ({
  title,
  subtitle,
  iconName,
  onPress,
}: {
  title: string;
  subtitle?: string;
  iconName: string;
  onPress?: () => void;
}) => {
  return (
    <>
      <List.Item
        onPress={onPress}
        style={{paddingVertical: 15}}
        title={title}
        description={subtitle}
        left={props => <List.Icon {...props} icon={iconName} />}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
      <Divider />
    </>
  );
};
export default ProfilePage;
