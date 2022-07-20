import * as React from 'react';
import {Card, Text, Title} from 'react-native-paper';
import {Image, Pressable, View, VirtualizedList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {HomePageComponentType} from '../../../../types/common';

export interface ProductProps {
  name: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
  weight_unit: string;
  packaging: string;
  key: string;
  notes: string;
}

export interface FeaturedCollectionProps {
  title: string;
  products: ProductProps[];
  handlePress?: () => {}; // view all product link
}

export default function FeaturedCollection({
  title,
  products,
  handlePress,
}: FeaturedCollectionProps) {
  const intl = useIntl();
  const itemHeight = useResponsiveValue([160, 250, 290, 330]);
  const itemWidth = useResponsiveValue([150, 240, 280, 320]);

  return (
    <View testID="featuredCollection">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Text variant="titleLarge" style={{marginBottom: 9, fontSize: 20}}>
          {title}
        </Text>

        <Pressable onPress={handlePress} testID="onPressCollection">
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
          testID="productList"
          data={products}
          initialNumToRender={4}
          horizontal={true}
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
        <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
          Dorne
        </Text>
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
      </Card.Content>
    </View>
  );
}

export const FeaturedCollectionCMSInput = {
  _component: HomePageComponentType.FeaturedCollection,
  component: FeaturedCollection,
};
