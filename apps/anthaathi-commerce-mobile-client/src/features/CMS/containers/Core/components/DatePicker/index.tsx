import {View, Text} from 'react-native';
import React from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

const DatePicker = (props: {title: string}) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const formatDate = (dateData: Date) => {
    return `${dateData.getDate()}/${
      dateData.getMonth() + 1
    }/${dateData.getFullYear()}`;
  };

  return (
    <View testID="datePicker" style={{marginHorizontal: 10, marginVertical: 5}}>
      <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
        {props.title}
      </Text>

      <Button
        style={{
          marginVertical: 3,
          borderColor: '#E3E2E7',
          backgroundColor: '#fff',
        }}
        contentStyle={{
          paddingVertical: 5,
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        }}
        labelStyle={{color: '#364A15'}}
        icon="pencil"
        onPress={() => setOpen(true)}
        uppercase={false}
        mode="outlined">
        {formatDate(date)}
      </Button>
      {open && (
        <DateTimePicker
          mode="date"
          value={date}
          onChange={(_e, d) => {
            const currentDate = d || new Date();
            setDate(currentDate);
            setOpen(false);
          }}
        />
      )}
    </View>
  );
};

export default DatePicker;

export const DatePickerCMSInput = {
  _component: CoreComponentType.DatePicker,
  component: DatePicker,
};
