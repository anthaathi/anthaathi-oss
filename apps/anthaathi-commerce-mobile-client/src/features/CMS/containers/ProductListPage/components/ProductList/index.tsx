import * as React from 'react';
import {Card, Text, Title} from 'react-native-paper';
import {Image, Pressable, View, VirtualizedList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {ProductListPageComponentType} from '../../../../types/common';
import {useNavigation} from '@react-navigation/native';

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

export interface ProductListProps {
  products: ProductProps[];
  handlePress: () => void;
}

export default function ProductList({products, handlePress}: ProductListProps) {
  const itemHeight = useResponsiveValue([160, 200, 220, 280]);
  const itemWidth = useResponsiveValue([170, 190, 210, 270]);
  const productSplitted: ProductProps[][] = React.useMemo(() => {
    return products.reduce<ProductProps[][]>(
      (previousValue, currentValue, currentIndex) => {
        if (currentIndex % 2) {
          const newArray: ProductProps[][] = [...previousValue];
          newArray[previousValue.length - 1].push(currentValue);
          return newArray;
        } else {
          return [...previousValue, [currentValue]];
        }
      },
      [],
    );
  }, [products]);

  return (
    <VirtualizedList<ProductProps[]>
      data={productSplitted}
      contentContainerStyle={{paddingBottom: 200}}
      testID="productList"
      // initialNumToRender={4}
      // horizontal
      renderItem={({item}) => (
        <ItemRendererColumn
          item={item}
          itemHeight={itemHeight}
          itemWidth={itemWidth}
          handlePress={handlePress}
        />
      )}
      getItemCount={() => productSplitted.length}
      keyExtractor={(item, index) => item?.[0]?.key || index + ''}
      getItem={(res, index) => res[index]}
    />
  );
}

function ItemRendererColumn({
  item,
  itemHeight,
  itemWidth,
  handlePress,
}: {
  item: ProductProps[];
  itemHeight: number;
  itemWidth: number;
  handlePress: () => void;
}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      }}>
      {item.map(element => (
        <ItemRenderer
          key={element.key}
          item={element}
          itemHeight={itemHeight}
          itemWidth={itemWidth}
          handlePress={handlePress}
        />
      ))}
    </View>
  );
}

function ItemRenderer({
  item,
  itemHeight,
  itemWidth,
  handlePress,
}: {
  item: ProductProps;
  itemHeight: number;
  itemWidth: number;
  handlePress: () => void;
}) {
  const intl = useIntl();
  return (
    <View
      style={{
        marginVertical: 5,
      }}
      key={item.key}>
      <Card.Content style={{alignItems: 'flex-start'}}>
        <Pressable style={{alignItems: 'flex-start'}} onPress={handlePress}>
          <Image
            style={{height: itemHeight, width: itemWidth, borderRadius: 4}}
            source={{
              uri: item.image,
            }}
          />
          <View style={{alignItems: 'flex-start'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: itemWidth,
              }}>
              <Title style={{fontSize: 12, marginRight: 5, fontWeight: 'bold'}}>
                {item.name}
              </Title>
              <Entypo
                name="info-with-circle"
                color="#364A15"
                size={18}
                style={{marginTop: 5}}
              />
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

            {/* <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
              {item.notes}
            </Text> */}
          </View>
        </Pressable>
      </Card.Content>
    </View>
  );
}

export const ProductListCMSInput = {
  _component: ProductListPageComponentType.ProductList,
  component: ProductList,
};
