import {View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Divider, Text} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

export interface NotificationProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  time: string;
  icon: string;
}

const Notification = ({
  title,
  subtitle1,
  subtitle2,
  time,
  icon,
}: NotificationProps) => {
  return (
    <View
      testID="notification"
      style={{
        // borderBottomWidth: 0.2,
        // borderBottomColor: '#364A15',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 5,
      }}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={{padding: 12}}>
          <SimpleLineIcons name={icon} size={18} color="#888" />
        </View>

        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#364A15',
                  fontWeight: '400',
                }}>
                {subtitle1}
              </Text>
            </View>
            <Text style={{fontSize: 14, color: '#364A15', fontWeight: '400'}}>
              {time}
            </Text>
          </View>
          <Text
            style={{
              color: '#364A15',
              fontSize: 16,
              fontWeight: '600',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#364A15',
              fontWeight: '400',
            }}>
            {subtitle2}
          </Text>
        </View>
      </View>

      <Divider bold={true} style={{marginTop: 10}} />
    </View>
  );
};

export default Notification;

export const NotificationCMSInput = {
  _component: CoreComponentType.Notification,
  component: Notification,
};
