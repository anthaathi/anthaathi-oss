import * as React from 'react';
import {Text, Title} from 'react-native-paper';
import {Image, Pressable, View, VirtualizedList} from 'react-native';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {HomePageComponentType} from '../../../../types/common';

export interface ProductProps {
  id: number;
  name: string;
  name_ar: string;
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
  title_ar?: string;
  products: ProductProps[];
  handlePress?: () => void; // view all product link
  onProductPress: (item: ProductProps) => void;
}

export default function FeaturedCollection({
  title,
  title_ar: titleAr,
  products,
  handlePress,
  onProductPress,
}: FeaturedCollectionProps) {
  const intl = useIntl();
  const itemHeight = useResponsiveValue([140, 250, 290, 330]);
  const itemWidth = useResponsiveValue([150, 240, 280, 320]);

  return (
    <View testID="featuredCollection">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text variant="titleLarge" style={{fontSize: 16}}>
          {intl.locale.startsWith('ar') ? titleAr ?? title : title}
        </Text>

        <Pressable onPress={handlePress} testID="onPressCollection">
          <Text
            variant="titleMedium"
            style={{
              textDecorationLine: 'underline',
              fontSize: 14,
            }}>
            {intl.formatMessage({defaultMessage: 'View All'})}
          </Text>
        </Pressable>
      </View>

      <View style={{marginHorizontal: 10}}>
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
              onProductPress={() => onProductPress(item)}
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
  onProductPress,
}: {
  item: ProductProps;
  itemHeight: number;
  itemWidth: number;
  onProductPress: () => void;
}) {
  const intl = useIntl();
  return (
    <View
      style={[
        {
          marginVertical: 5,
          marginRight: 10,
        },
      ]}
      key={item.key}>
      <View style={{alignItems: 'center'}}>
        <Pressable style={{alignItems: 'flex-start'}} onPress={onProductPress}>
          <Image
            source={{
              uri: item.image,
              height: itemHeight,
              width: itemWidth,
            }}
            style={{
              borderRadius: 4,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              alignItems: 'center',
              display: 'flex',
              width: itemWidth,
              marginTop: 6,
            }}>
            <Title
              style={{
                fontSize: 14,
                marginRight: 10,
                fontWeight: 'bold',
                lineHeight: 16,
              }}>
              {intl.locale.startsWith('ar')
                ? item.name_ar ?? item.name
                : item.name}
            </Title>
            <View style={{flex: 1}} />
          </View>
          <View
            style={{
              flexDirection: intl.locale.startsWith('ar')
                ? 'row-reverse'
                : 'row',
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
        </Pressable>
      </View>
    </View>
  );
}

export const FeaturedCollectionCMSInput = {
  _component: HomePageComponentType.FeaturedCollection,
  component: FeaturedCollection,
};
