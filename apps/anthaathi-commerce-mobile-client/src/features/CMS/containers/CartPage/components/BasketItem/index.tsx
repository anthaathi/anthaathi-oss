import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {IntlShape, useIntl} from 'react-intl';

export interface ItemProps {
  name: string;
  image: string;
  price: number;
  currency: string;
  numberOfItems: number;
  packaging: string;
  weight_unit?: string;
  key: string;
}

export interface BasketItemProps {
  title: string;
  items: ItemProps[];
  handlePress?: () => void;
}

const BasketItem = (props: BasketItemProps) => {
  const intl = useIntl();
  const itemHeight = useResponsiveValue([120, 250, 290, 330]);
  const itemWidth = useResponsiveValue([120, 240, 280, 320]);

  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
      testID="basketItem">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text variant="titleLarge" style={{marginBottom: 9, fontSize: 20}}>
          {props.title}
        </Text>

        <Pressable onPress={props.handlePress}>
          <Text
            variant="titleMedium"
            style={{
              marginBottom: 9,
              textDecorationLine: 'underline',
              fontSize: 14,
              color: '#008D3E',
            }}>
            {intl.formatMessage({defaultMessage: 'Remove All'})}
          </Text>
        </Pressable>
      </View>

      <View>
        {props.items.map(item => {
          return (
            <ItemRenderer
              key={item.key}
              item={item}
              itemHeight={itemHeight}
              itemWidth={itemWidth}
              intl={intl}
            />
          );
        })}
      </View>
    </View>
  );
};

function ItemRenderer({
  item,
  itemHeight,
  itemWidth,
  intl,
}: {
  item: ItemProps;
  itemHeight: number;
  itemWidth: number;
  intl: IntlShape;
}) {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.image}}
            style={{height: itemHeight, width: itemWidth}}
          />

          <View
            style={{
              marginHorizontal: 15,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                variant="titleLarge"
                style={{fontSize: 14, color: '#364A15', fontWeight: '900'}}>
                {item.name}
              </Text>
              <Text
                variant="titleLarge"
                style={{fontSize: 12, color: '#808080', fontWeight: '400'}}>
                {item.packaging}
              </Text>
            </View>
            <ProductCountButton numberOfItems={item.numberOfItems} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignContent: 'flex-end',
          }}>
          <Text
            variant="titleLarge"
            style={{
              fontSize: 14,
              color: '#008D3E',
              fontWeight: '700',
              marginLeft: 5,
            }}>
            {intl.formatNumber(item.price, {
              style: 'currency',
              currency: item.currency,
            })}
          </Text>
        </View>
      </View>
      <Divider style={{marginVertical: 10}} />
    </View>
  );
}

const ProductCountButton = ({numberOfItems}: {numberOfItems: number}) => {
  return (
    <View
      style={{
        width: 120,
        flexDirection: 'row',
        backgroundColor: '#F1F9F4',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
      }}>
      <IconButton
        style={{
          borderRadius: 0,
          height: 42,
        }}
        icon="minus"
        iconColor="#008D3E"
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <Text
        style={{
          marginHorizontal: 5,
          fontSize: 14,
          color: '#364A15',
          fontWeight: '600',
        }}>
        {numberOfItems}
      </Text>
      <IconButton
        style={{
          borderRadius: 0,
          height: 42,
        }}
        icon="plus"
        iconColor="#008D3E"
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default BasketItem;
