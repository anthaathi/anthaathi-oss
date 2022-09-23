import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {CartPageComponentType} from '../../../../types/common';
import {ProductProps} from '../../../ProductListPage/components/ProductList';

export interface ItemProps extends ProductProps {
  numberOfItems: number;
}

export interface BasketItemProps {
  title: string;
  items: ItemProps[];
  handlePressRemoveAllProduct?: () => void;
  handlePressViewProduct?: (item: ProductProps) => void;
  addProductPress?: (id: number) => void;
  removeProductPress?: (id: number, numberOfItems: number) => void;
}

const BasketItem = (props: BasketItemProps) => {
  const intl = useIntl();
  const itemHeight = useResponsiveValue([120, 250, 290, 330]);
  const itemWidth = useResponsiveValue([120, 240, 280, 320]);

  return (
    <View
      style={{
        marginHorizontal: 5,
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

        <Pressable
          onPress={props.handlePressRemoveAllProduct}
          testID="handlePressBasketItem">
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
              handlePressViewProduct={
                props.handlePressViewProduct || (() => {})
              }
              addProductPress={props.addProductPress || (() => {})}
              removeProductPress={props.removeProductPress || (() => {})}
            />
          );
        })}
      </View>
    </View>
  );
};

const ItemRenderer = ({
  item,
  itemHeight,
  itemWidth,
  handlePressViewProduct,
  addProductPress,
  removeProductPress,
}: {
  item: ItemProps;
  itemHeight: number;
  itemWidth: number;
  handlePressViewProduct: (item: ProductProps) => void;
  addProductPress: (id: number) => void;
  removeProductPress: (id: number, numberOfItems: number) => void;
}) => {
  const intl = useIntl();
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={() => handlePressViewProduct(item)}>
            <Image
              testID="basketProductImage"
              source={{uri: item.image}}
              style={{height: itemHeight, width: itemWidth}}
            />
          </Pressable>

          <View
            style={{
              marginHorizontal: 15,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              testID="productName"
              variant="titleLarge"
              style={{
                fontSize: 14,
                color: '#364A15',
                fontWeight: '900',
              }}>
              {item.name}
            </Text>
            <ProductCountButton
              numberOfItems={item.numberOfItems}
              addProductPress={() => addProductPress(item.id)}
              removeProductPress={() =>
                removeProductPress(item.id, item.numberOfItems)
              }
            />

            <Text
              variant="titleLarge"
              style={{
                fontSize: 13,
                color: '#364A15',
                fontWeight: '600',
              }}>
              {intl.formatNumber(item.price, {
                style: 'currency',
                currency: item.currency,
              }) +
                ' / ' +
                intl.formatMessage({defaultMessage: 'Piece'})}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                variant="titleLarge"
                style={{
                  fontSize: 14,
                  color: '#364A15',
                  fontWeight: '900',
                }}>
                {intl.formatMessage({defaultMessage: 'Total'}) + ' :'}
              </Text>

              <Text
                testID="productPrice"
                variant="titleLarge"
                style={{
                  fontSize: 14,
                  color: '#008D3E',
                  fontWeight: '700',
                  marginLeft: 5,
                }}>
                {intl.formatNumber(item.price * item.numberOfItems, {
                  style: 'currency',
                  currency: item.currency,
                })}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Divider style={{marginVertical: 10}} />
    </View>
  );
};

const ProductCountButton = ({
  numberOfItems,
  addProductPress,
  removeProductPress,
}: {
  numberOfItems: number;
  addProductPress: () => void;
  removeProductPress: () => void;
}) => {
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
        icon={numberOfItems > 1 ? 'minus' : 'delete'}
        iconColor="#008D3E"
        size={20}
        onPress={removeProductPress}
      />
      <Text
        style={{
          marginHorizontal: 5,
          fontSize: 14,
          color: '#364A15',
          fontWeight: '700',
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
        onPress={addProductPress}
      />
    </View>
  );
};

export default BasketItem;

export const BasketItemCMSInput = {
  _component: CartPageComponentType.BasketItem,
  component: BasketItem,
};
