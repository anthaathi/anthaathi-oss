import {View, Pressable, ScrollView, GestureResponderEvent} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckOutPageComponentType} from '../../../../types/common';

export interface DeliveryDateSelectionProps {
  title: string;
  handlePress?: () => void;
}

const DeliveryDateSelection = (props: DeliveryDateSelectionProps) => {
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
        <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
          {props.title}
        </Text>

        <Pressable
          testID="selectMonth"
          onPress={props.handlePress}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
            August
          </Text>
          <Icon name="chevron-down" size={20} color="#364A15" />
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
      <Text style={{fontSize: 14, color: '#364A15', fontWeight: '400'}}>
        Day
      </Text>
      <Text style={{fontSize: 14, color: '#364A15', fontWeight: '400'}}>
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
