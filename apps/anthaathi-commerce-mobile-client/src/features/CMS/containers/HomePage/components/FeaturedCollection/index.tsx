import * as React from 'react';
import {Text, Title, useTheme} from 'react-native-paper';
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
    <View testID="featuredCollection" style={{backgroundColor: '#fff'}}>
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

      <View style={{marginHorizontal: 5}}>
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
  const theme = useTheme();
  const intl = useIntl();
  return (
    <View
      style={{
        margin: 5,
        // width: '48%',
        borderColor: '#e7e7e7',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderRadius: 12,
      }}
      key={item.key}>
      <View>
        <Pressable onPress={onProductPress}>
          <View style={{height: itemHeight, width: '100%'}}>
            <Image
              style={{
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                height: itemHeight,
                width: '99.9%',
                paddingHorizontal: '0.1%',
                backgroundColor: '#fff',
              }}
              source={{
                uri: item.image,
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              backgroundColor: '#f0f0f0',
              paddingVertical: 5,
              paddingHorizontal: 8,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: itemWidth * 0.9,
              }}>
              <Title
                style={{
                  fontSize: 12,
                  marginRight: 5,
                  fontWeight: 'bold',
                  flexShrink: 1,
                }}>
                {item.name}
              </Title>
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
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export const FeaturedCollectionCMSInput = {
  _component: HomePageComponentType.FeaturedCollection,
  component: FeaturedCollection,
};
