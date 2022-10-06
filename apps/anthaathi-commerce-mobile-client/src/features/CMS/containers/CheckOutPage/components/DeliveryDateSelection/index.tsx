import {View, Pressable, ScrollView, GestureResponderEvent} from 'react-native';
import React from 'react';
import {Text, useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckOutPageComponentType} from '../../../../types/common';

export interface DeliveryDateSelectionProps {
  title: string;
  handlePress?: () => void;
}

const DeliveryDateSelection = (props: DeliveryDateSelectionProps) => {
  const theme = useTheme();
  const dates = 30;
  return (
    <View style={{marginHorizontal: 10}} testID="deliveryDateSelection">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Text
          style={{
            color: theme.colors.titleTextColor,
            fontSize: 16,
            fontWeight: '600',
          }}>
          {props.title}
        </Text>

        <Pressable
          testID="selectMonth"
          onPress={props.handlePress}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.titleTextColor,
              fontSize: 16,
              fontWeight: '600',
            }}>
            August
          </Text>
          <Icon
            name="chevron-down"
            size={20}
            color={theme.colors.titleTextColor}
          />
        </Pressable>
      </View>
      <View>
        <ScrollView horizontal>
          {[...Array(dates).keys()].map(index => {
            return <SelectDate key={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const SelectDate = ({
  onPress,
}: {
  onPress?: ((e: GestureResponderEvent) => void) | undefined;
}) => {
  const theme = useTheme();
  return (
    <Pressable
      style={{
        backgroundColor: '#F1F9F4',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 14,
          color: theme.colors.titleTextColor,
          fontWeight: '400',
        }}>
        Day
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: theme.colors.titleTextColor,
          fontWeight: '400',
        }}>
        00
      </Text>
    </Pressable>
  );
};

export default DeliveryDateSelection;

export const DeliveryDateSelectionCMSInput = {
  _component: CheckOutPageComponentType.DeliveryDateSelection,
  component: DeliveryDateSelection,
};
