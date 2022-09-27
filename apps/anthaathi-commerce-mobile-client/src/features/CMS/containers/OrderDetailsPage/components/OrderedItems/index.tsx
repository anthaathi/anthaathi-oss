import {Image, View, Text as RNText} from 'react-native';
import React from 'react';
import {Divider, Text} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {OrderDetailsPageComponentType} from '../../../../types/common';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface ItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  currency: string;
  numberOfItems: number;
  packaging: string;
  weight_unit?: string;
  key: string;
}

export interface OrderedItemProps {
  title: string;
  items: ItemProps[];
  handlePress?: (item: ItemProps) => void;
}

const OrderedItems = (props: OrderedItemProps) => {
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
            color: '#364A15',
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
          borderColor: '#E3E2E7',
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
  handlePress: (item: ItemProps) => void;
}) => {
  const intl = useIntl();
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(item);
      }}>
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
                color: '#364A15',
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
                  color: '#364A15',
                  fontWeight: '900',
                }}>
                {intl.formatMessage({defaultMessage: 'Quantity'}) + ' :'}
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
                {item.numberOfItems}
              </Text>
            </View>

            <Text
              variant="titleLarge"
              style={{
                fontSize: 13,
                color: '#364A15',
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
      {divider && <Divider style={{marginVertical: 10}} />}
    </TouchableOpacity>
  );
};

export default OrderedItems;

export const OrderedItemsCMSInput = {
  _component: OrderDetailsPageComponentType.OrderedItems,
  component: OrderedItems,
};
