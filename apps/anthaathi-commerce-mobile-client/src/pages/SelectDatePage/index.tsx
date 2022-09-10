import {View, ScrollView} from 'react-native';
import React from 'react';
import {
  CheckOutPageComponentType,
  CoreComponentType,
} from '../../features/CMS/types/common';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import CMSRenderer from '../../features/CMS';

const SelectDatePage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'SelectDate'>
> = props => {
  return (
    <View style={{flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '142',
            title: 'Schedule Order',
            leftIcon: 'close',
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
        ]}
      />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 5, flex: 1, paddingTop: 10}}>
        <CMSRenderer
          components={[
            {
              _component: CoreComponentType.DatePicker,
              key: '1412',
              title: 'Date',
            },
            {
              _component: CheckOutPageComponentType.TimeSlotSelection,
              key: '123',
              title: 'Timeslot',
              timeSlots: [
                {
                  key: '1',
                  name: '09am - 12pm',
                },
                {
                  key: '2',
                  name: '01pm - 05pm',
                },
                {
                  key: '3',
                  name: '05pm - 10pm',
                },
              ],
            },
            {
              _component: CheckOutPageComponentType.TimeSlotSelection,
              key: '12311',
              title: 'Frequency',
              timeSlots: [
                {
                  key: '1',
                  name: 'One time',
                },
                {
                  key: '2',
                  name: 'Weekly',
                },
                {
                  key: '3',
                  name: 'Monthly',
                },
              ],
            },
            {
              _component: CoreComponentType.CMSButton,
              key: '1241',
              title: 'Save',
              handlePress: () => {
                props.navigation.goBack();
              },
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default SelectDatePage;
