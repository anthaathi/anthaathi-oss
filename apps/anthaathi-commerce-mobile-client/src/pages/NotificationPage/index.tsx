import {View} from 'react-native';
import React from 'react';
import dataJson from '../../config/data.json';
import {
  CartPageComponentType,
  CoreComponentType,
} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';

const NotificationPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'NotificationPage'>
> = props => {
  return (
    <View>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Notification,
            key: '11',
            title: 'title',
            subtitle1: 'subtitle1',
            subtitle2: 'subtitle2',
            time: '1d',
            icon: 'bell',
          },
          {
            _component: CoreComponentType.Notification,
            key: '12',
            title: 'title',
            subtitle1: 'subtitle1',
            subtitle2: 'subtitle2',
            time: '1d',
            icon: 'envelope',
          },
          {
            _component: CoreComponentType.Notification,
            key: '231',
            title: 'title',
            subtitle1: 'subtitle1',
            subtitle2: 'subtitle2',
            time: '1d',
            icon: 'basket-loaded',
          },
          {
            _component: CoreComponentType.Notification,
            key: '2311',
            title: 'title',
            subtitle1: 'subtitle1',
            subtitle2: 'subtitle2',
            time: '1d',
            icon: 'drawer',
          },

          {
            _component: CartPageComponentType.CartCard,
            key: '1',
            title: 'title',
            statusTitle: 'subtitle1',
            statusIcon: 'basket',
            deliveryDate: 'Sun, 17 Jul 2022',
            deliveryBy: 'Company',
            noOfItems: '2 Items',
            imageList: [
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
              'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
            ],
          },
        ]}
      />
    </View>
  );
};

export default NotificationPage;
