import * as React from 'react';
import {useTheme} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import Header from './Header';
import BasketItem from '../containers/CartPage/components/BasketItem';
import PricingCard from '../containers/CartPage/components/PricingCard';
import SuggestedItem from '../containers/CartPage/components/SuggestedItem';

export default function () {
  const {
    colors: {background},
  } = useTheme();

  return (
    <>
      <Header rightIcon="close" title="Basket" placement="center" />
      <ScrollView style={{height: '100%', backgroundColor: background}}>
        <View style={{marginTop: 12}}>
          <SuggestedItem
            title="Suggested"
            products={[
              {
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Cherry Tomato Mix',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '34',
                price: 231,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Cucumber',
                image:
                  'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '324',
                price: 232,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Fruit Platter',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '334',
                price: 334,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Kumquats',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '3341',
                price: 2323,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'pack',
              },
            ]}
          />
        </View>
        <View style={{marginTop: 12}}>
          <BasketItem
            title="Items"
            items={[
              {
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
                numberOfItems: 2,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                numberOfItems: 2,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
              {
                name: 'Cherry Tomato Mix',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '34',
                price: 231,
                numberOfItems: 2,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
              {
                name: 'Cucumber',
                image:
                  'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '324',
                price: 232,
                numberOfItems: 2,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
            ]}
          />
        </View>

        <View style={{marginTop: 12}}>
          <PricingCard
            subtotal={{currency: 'AED', price: 10.1}}
            discount={{currency: 'AED', price: 10.1}}
            promoDiscount={{currency: 'AED', price: 10.1}}
            shippingCharges={{currency: 'AED', price: 0}}
            total={{currency: 'AED', price: 10.1}}
          />
        </View>
      </ScrollView>
    </>
  );
}
