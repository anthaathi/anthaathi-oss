import {View, Text, Pressable} from 'react-native';
import React from 'react';

type SlotProps = {
  key: string;
  name: string;
};

export interface TimeSlotProps {
  title: string;
  timeSlots: SlotProps[];
}

const TimeSlotSelection = (props: TimeSlotProps) => {
  return (
    <View style={{marginHorizontal: 10}} testID="timeSlot">
      <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
        {props.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 5,
        }}>
        {props.timeSlots.map(slot => {
          return <Slot key={slot.key} slot={slot} />;
        })}
      </View>
    </View>
  );
};

const Slot = ({slot}: {slot: SlotProps}) => {
  return (
    <Pressable
      style={{
        backgroundColor: '#F1F9F4',
        height: 38,
        width: 108,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
      }}
      onPress={() => {}}>
      <Text style={{fontSize: 14, color: '#364A15', fontWeight: '400'}}>
        {slot.name}
      </Text>
    </Pressable>
  );
};

export default TimeSlotSelection;
