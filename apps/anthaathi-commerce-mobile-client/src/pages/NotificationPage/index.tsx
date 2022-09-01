import {View} from 'react-native';
import React from 'react';
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
            title: 'Back to school promotion',
            subtitle1: 'Buy now',
            subtitle2: 'subtitle2',
            time: '1d',
            icon: 'bell',
          },
          {
            _component: CartPageComponentType.CartCard,
            key: '1',
            title: 'Order #123',
            statusTitle: 'In Transit',
            statusIcon: 'basket',
            deliveryDate: 'Sun, 17 Jul 2022',
            deliveryBy: 'NRTCFresh',
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
