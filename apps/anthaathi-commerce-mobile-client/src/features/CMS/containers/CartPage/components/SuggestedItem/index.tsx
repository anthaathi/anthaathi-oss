import * as React from 'react';
import {Button, Card, Text, Title} from 'react-native-paper';
import {Image, Pressable, View, VirtualizedList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {CartPageComponentType} from '../../../../types/common';

export interface ProductProps {
  name: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
  weight_unit: string;
  packaging: string;
  key: string;
  notes?: string;
}

export interface FeaturedCollectionProps {
  title: string;
  products: ProductProps[];
  handlePress?: () => void; // view all product link
}

export default function SuggestedItem({
  title,
  products,
  handlePress,
}: FeaturedCollectionProps) {
  const intl = useIntl();
  const itemHeight = useResponsiveValue([140, 180, 250, 290]);
  const itemWidth = useResponsiveValue([130, 170, 240, 280]);

  return (
    <View testID="suggestedItem">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Text
          variant="titleLarge"
          style={{marginBottom: 9, fontSize: 18, color: '#808080'}}>
          {title}
        </Text>
        <Pressable onPress={handlePress} testID="handlePressSuggestedItem">
          <Text
            variant="titleMedium"
            style={{
              marginBottom: 9,
              textDecorationLine: 'underline',
              fontSize: 14,
            }}>
            {intl.formatMessage({defaultMessage: 'View All'})}
          </Text>
        </Pressable>
      </View>

      <View>
        <VirtualizedList<ProductProps>
          testID="suggestedItemList"
          data={products}
          initialNumToRender={4}
          horizontal
          renderItem={({item}) => (
            <ItemRenderer
              item={item}
              itemHeight={itemHeight}
              itemWidth={itemWidth}
            />
          )}
          getItemCount={() => products.length}
          keyExtractor={item => item.key}
          getItem={(res, index) => res[index]}
        />
      </View>
    </View>
  );
}

function ItemRenderer({
  item,
  itemHeight,
  itemWidth,
}: {
  item: ProductProps;
  itemHeight: number;
  itemWidth: number;
}) {
  const intl = useIntl();
  return (
    <View
      style={{
        marginVertical: 5,
        marginHorizontal: 10,
      }}
      key={item.key}>
      <Card.Content style={{alignItems: 'center'}}>
        <Image
          style={{height: itemHeight, width: itemWidth, borderRadius: 4}}
          source={{
            uri: item.image,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Title style={{fontSize: 14, marginRight: 10, fontWeight: 'bold'}}>
            {item.name}
          </Title>
          <Entypo name="info-with-circle" color="#364A15" size={18} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#008D3E', fontSize: 14, fontWeight: '400'}}>
            {intl.formatNumber(item.price, {
              style: 'currency',
              currency: item.currency,
            })}
          </Text>
          <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
            {' / ' + item.packaging}
          </Text>
        </View>

        <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
          {item.notes}
        </Text>

        <Button
          mode="contained"
          style={{backgroundColor: '#F1F9F4', width: '100%', borderRadius: 0}}
          labelStyle={{color: '#008D3E'}}
          onPress={() => console.log('Pressed')}>
          Add
        </Button>
      </Card.Content>
    </View>
  );
}

export const SuggestedItemCMSInput = {
  _component: CartPageComponentType.SuggestedItem,
  component: SuggestedItem,
};
