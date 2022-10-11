import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Divider, useTheme} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';
import CMSBottomSheet from '../CMSBottomSheet';
import {useIntl} from 'react-intl';

const DatePicker = (props: {title: string}) => {
  const theme = useTheme();
  const intl = useIntl();
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const formatDate = (dateData: Date) => {
    return `${dateData.getDate()}/${
      dateData.getMonth() + 1
    }/${dateData.getFullYear()}`;
  };

  return (
    <View testID="datePicker" style={{marginHorizontal: 10, marginVertical: 5}}>
      <Text
        style={{
          color: theme.colors.titleTextColor,
          fontSize: 16,
          fontWeight: '600',
        }}>
        {props.title}
      </Text>

      <Button
        style={{
          marginVertical: 3,
          borderColor: theme.colors.cardBorderColor,
          backgroundColor: '#fff',
        }}
        contentStyle={{
          paddingVertical: 5,
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        }}
        labelStyle={{color: theme.colors.titleTextColor}}
        icon="pencil"
        onPress={() => setOpen(true)}
        uppercase={false}
        mode="outlined">
        {formatDate(date)}
      </Button>

      {Platform.OS === 'ios' && (
        <CMSBottomSheet
          bottomSheetTitle={intl.formatMessage({defaultMessage: 'Select Date'})}
          bottomSheetIconColor="#0A2463"
          bottomSheetStyle={{
            backgroundColor: 'white',
          }}
          bottomSheetTitleStyle={{color: '#0A2463'}}
          setBottomSheetVisible={setOpen}
          bottomSheetVisible={open}>
          <View>
            <Divider />
            <DateTimePicker
              mode="date"
              display={'spinner'}
              value={date}
              onChange={(_e, d) => {
                const currentDate = d || new Date();
                setDate(currentDate);
                setOpen(false);
              }}
            />
            <Divider />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                alignItems: 'center',
                width: '50%',
              }}
              onPress={() => setOpen(!open)}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#ff3d33'}}>
                {intl.formatMessage({defaultMessage: 'Cancel'})}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                alignItems: 'center',
                width: '50%',
              }}
              onPress={() => setOpen(!open)}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#017aff'}}>
                {intl.formatMessage({defaultMessage: 'Confirm'})}
              </Text>
            </TouchableOpacity>
          </View>
        </CMSBottomSheet>
      )}

      {Platform.OS === 'android' && open && (
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
