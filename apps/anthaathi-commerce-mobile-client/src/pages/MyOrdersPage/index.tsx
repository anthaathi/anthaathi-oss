import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';
import CMSRenderer from '../../features/CMS';
import {
  CartPageComponentType,
  CoreComponentType,
} from '../../features/CMS/types/common';

export const MyOrdersPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'MyOrdersPage'>
> = () => {
  return (
    <>
      <CMSRenderer
        components={[
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
          {
            _component: CartPageComponentType.CartCard,
            key: '12',
            title: 'Order #124',
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
          {
            _component: CartPageComponentType.CartCard,
            key: '124',
            title: 'Order #125',
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
    </>
  );
};
