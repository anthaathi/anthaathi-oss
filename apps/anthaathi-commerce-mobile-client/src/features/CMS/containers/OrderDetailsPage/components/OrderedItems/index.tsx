import {Image, View, Text as RNText, Pressable} from 'react-native';
import React from 'react';
import {Divider, Text, useTheme} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {OrderDetailsPageComponentType} from '../../../../types/common';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ProductProps} from '../../../ProductListPage/components/ProductList';

export interface ItemProps extends ProductProps {
  numberOfItems: number;
}

export interface OrderedItemProps {
  title: string;
  items: ItemProps[];
  handlePress?: (item: ProductProps) => void;
}

const OrderedItems = (props: OrderedItemProps) => {
  const theme = useTheme();
  const itemHeight = useResponsiveValue([120, 250, 290, 330]);
  const itemWidth = useResponsiveValue([120, 240, 280, 320]);

  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
      testID="orderedItems">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <RNText
          style={{
            color: theme.colors.titleTextColor,
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 5,
          }}>
          {props.title}
        </RNText>
      </View>

      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderColor: theme.colors.cardBorderColor,
          borderWidth: 1,
          borderRadius: 4,
        }}>
        {props.items.map((item, index) => {
          return (
            <ItemRenderer
              key={item.key}
              item={item}
              itemHeight={itemHeight}
              itemWidth={itemWidth}
              handlePress={props.handlePress || (() => {})}
              divider={index !== props.items.length - 1}
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
  divider,
  handlePress,
}: {
  item: ItemProps;
  itemHeight: number;
  itemWidth: number;
  divider: boolean;
  handlePress: (item: ProductProps) => void;
}) => {
  const theme = useTheme();
  const intl = useIntl();
  return (
    <Pressable onPress={() => handlePress(item)}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            testID="basketProductImage"
            source={{uri: item.image}}
            style={{height: itemHeight, width: itemWidth}}
          />

          <View
            style={{
              marginHorizontal: 15,
            }}>
            <Text
              testID="productName"
              variant="titleLarge"
              style={{
                marginBottom: 5,
                fontSize: 14,
                color: theme.colors.titleTextColor,
                fontWeight: '900',
              }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Text
                variant="titleLarge"
                style={{
                  fontSize: 14,
                  color: theme.colors.titleTextColor,
                  fontWeight: '900',
                }}>
                {intl.formatMessage({defaultMessage: 'Quantity'}) + ' :'}
              </Text>

              <Text
                testID="productPrice"
                variant="titleLarge"
                style={{
                  fontSize: 14,
                  color: theme.colors.greenTextColor,
                  fontWeight: '700',
                  marginLeft: 5,
                }}>
                {item.numberOfItems}
              </Text>
            </View>

            <Text
              variant="titleLarge"
              style={{
                fontSize: 13,
                color: theme.colors.titleTextColor,
                fontWeight: '600',
                marginBottom: 5,
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
                marginBottom: 5,
              }}>
              <Text
                variant="titleLarge"
                style={{
                  fontSize: 14,
                  color: theme.colors.titleTextColor,
                  fontWeight: '900',
                }}>
                {intl.formatMessage({defaultMessage: 'Total'}) + ' :'}
              </Text>

              <Text
                testID="productPrice"
                variant="titleLarge"
                style={{
                  fontSize: 14,
                  color: theme.colors.greenTextColor,
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
      {divider && <Divider style={{marginVertical: 10}} />}
    </Pressable>
  );
};

export default OrderedItems;

export const OrderedItemsCMSInput = {
  _component: OrderDetailsPageComponentType.OrderedItems,
  component: OrderedItems,
};
