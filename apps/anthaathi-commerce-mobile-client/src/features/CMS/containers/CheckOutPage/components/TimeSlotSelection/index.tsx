import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {CheckOutPageComponentType} from '../../../../types/common';

type SlotProps = {
  key: string;
  name: string;
};

export interface TimeSlotProps {
  title: string;
  timeSlots: SlotProps[];
}

const TimeSlotSelection = (props: TimeSlotProps) => {
  const [selectedKey, setSelectKey] = React.useState('');
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
          return (
            <Slot
              key={slot.key}
              slot={slot}
              selectedKey={selectedKey}
              setSelectKey={setSelectKey}
            />
          );
        })}
      </View>
    </View>
  );
};

const Slot = ({
  slot,
  selectedKey,
  setSelectKey,
}: {
  slot: SlotProps;
  selectedKey: string;
  setSelectKey: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Pressable
      style={{
        backgroundColor: selectedKey === slot.key ? '#B8E0C7' : '#E2F3E9',
        height: 38,
        width: 108,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
      }}
      onPress={() => {
        if (selectedKey === slot.key) {
          setSelectKey('');
        } else {
          setSelectKey(slot.key);
        }
      }}>
      <Text style={{fontSize: 14, color: '#364A15', fontWeight: '400'}}>
        {slot.name}
      </Text>
    </Pressable>
  );
};

export default TimeSlotSelection;

export const TimeSlotSelectionCMSInput = {
  _component: CheckOutPageComponentType.TimeSlotSelection,
  component: TimeSlotSelection,
};
