import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  CartPageComponentType,
  CoreComponentType,
  OrderDetailsPageComponentType,
} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';
import {ItemProps} from '../../features/CMS/containers/OrderDetailsPage/components/OrderedItems';
import { ProductProps } from '../../features/CMS/containers/ProductListPage/components/ProductList';

const OrderDetailsPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'OrderDetailsPage'>
> = props => {
  return (
    <View style={{flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '142',
            title: 'Order #123',
            leftIcon: 'close',
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
        ]}
      />
      <ScrollView>
        <CMSRenderer
          components={[
            {
              _component: CartPageComponentType.CartCard,
              key: '111',
              title: 'Order #123',
              statusTitle: 'Delivered',
              statusIcon: 'basket',
              deliveryDate: 'Sun, 17 Jul 2022',
              deliveryBy: 'NRTCFresh',
              noOfItems: '2 Items',
              orderStatus: false,
              imageList: [
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
              ],
              buyAgainPress: () => {},
            },
            {
              _component: OrderDetailsPageComponentType.OrderedItems,
              key: '1213',
              title: 'Items',
              items: [
                {
                  id: 1,
                  name: 'Capsicum mixed',
                  image:
                    'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                  key: '213',
                  price: 23,
                  numberOfItems: 2,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: '500 gms',
                },
                {
                  id: 2,
                  name: 'Capsicum mixed',
                  image:
                    'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                  key: '23',
                  price: 23,
                  numberOfItems: 2,
                  currency: 'USD',
                  weight_unit: 'KG',
                  packaging: '500 gms',
                },
              ],
              handlePress: (item: ProductProps) => {
                props.navigation.navigate('ProductPage', {
                  productDetails: {
                    id: item.id,
                    description: item.description,
                    weight_unit: item.weight_unit,
                    packaging: item.packaging,
                    key: item.key,
                    notes: item.notes,
                    name: item.name,
                    listInfo: {
                      description:
                        '100% fresh. Sourced from UAE. Benefits: Dates contain vitamins such as B1, B2, B3 and B5, as well as A1 and C. Dates are loaded with potassium and rich in Iron, which is highly recommended for those who suffer from iron deficiency.',
                      shippingInformation: 'Shipping Information',
                    },
                    blockInfo: {
                      freeShipping: 'Free shipping in UAE',
                      inStock: 'In stock, ready to ship',
                      securePayments: 'Secure Payments',
                      isFresh: 'Fresh',
                    },
                    price: item.price,
                    currency: item.currency,
                    image: [item.image],
                  },
                });
              },
            },
            {
              _component:
                OrderDetailsPageComponentType.DeliveryAddressDetailsCard,
              key: '12',
              deliveryTitle: 'Delivery Address',
              deliveryAddress: 'USA',
              mobileNumber: '+90909090',
            },
            {
              _component: CartPageComponentType.PricingCard,
              key: '1',
              title: 'Payment Information',
              subtotal: {currency: 'AED', price: 100},
              discount: {currency: 'AED', price: 0},
              taxAmount: {currency: 'AED', price: 100 * 0.05},
              shippingCharges: {currency: 'AED', price: 0},
              total: {
                currency: 'AED',
                price: 100 + 100 * 0.05,
              },
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default OrderDetailsPage;
