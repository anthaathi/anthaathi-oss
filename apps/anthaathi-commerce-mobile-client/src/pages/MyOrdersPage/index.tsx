import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';
import CMSRenderer from '../../features/CMS';
import {CartPageComponentType} from '../../features/CMS/types/common';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {useRecoilState} from 'recoil';
import {CartItemData} from '../../features/CMS/context/CartItemContext';

export const MyOrdersPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'MyOrdersPage'>
> = props => {
  const [cartItem, setCartItem] = useRecoilState(CartItemData);
  return (
    <SafeAreaView>
      <ScrollView>
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
              orderStatus: true,
              imageList: [
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
              ],
              buyAgainPress: () => {
                if (cartItem.some(el => el.id === 1590)) {
                  const newState = cartItem.map(obj => {
                    if (obj.id === 1590) {
                      return {...obj, numberOfItems: obj.numberOfItems + 1};
                    }
                    return obj;
                  });
                  setCartItem(newState);
                } else {
                  const copyCartItem = [...cartItem];
                  copyCartItem.push({
                    currency: 'AED',
                    id: 1590,
                    image:
                      'https://www.nrtcfresh.com/wp-content/uploads/2022/08/sakura-mix-pack-6pots-1-500x500.jpg',
                    key: 'test71',
                    name: 'Sakura Mix',
                    numberOfItems: 1,
                    packaging: 'Pack',
                    price: 20,
                    weight_unit: 'Pots',
                  });
                  setCartItem(copyCartItem);
                }
                props.navigation.navigate('CartPage');
              },
              handlePress: () => {
                props.navigation.navigate('OrderDetailsPage');
              },
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
              orderStatus: false,
              imageList: [
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
              ],
              handlePress: () => {
                props.navigation.navigate('OrderDetailsPage');
              },
            },
            {
              _component: CartPageComponentType.CartCard,
              key: '124',
              title: 'Order #125',
              statusTitle: 'In Transit',
              statusIcon: 'basket',
              deliveryDate: 'Sun, 17 Jul 2022',
              deliveryBy: 'NRTCFresh',
              orderStatus: true,
              noOfItems: '2 Items',
              imageList: [
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
              ],
              handlePress: () => {
                props.navigation.navigate('OrderDetailsPage');
              },
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
