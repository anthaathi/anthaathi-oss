import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import HomePage from '../HomePage';
import ProfilePage from '../ProfilePage';
import NotificationPage from '../NotificationPage';
import {RootStackParamList} from '../../types/Route';
import {MyOrdersPage} from '../MyOrdersPage';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function MainPage() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#364A15',
        // tabBarInactiveTintColor: '#008D3E',
        tabBarActiveBackgroundColor: '#F1F9F4',
        tabBarStyle: {
          height: 56,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 11,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}: {color: any}) => (
            <SimpleLineIcons name="home" color={color} size={20} />
          ),
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="NotificationPage"
        component={NotificationPage}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}: {color: any}) => (
            <SimpleLineIcons name="bell" color={color} size={20} />
          ),
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="MyOrdersPage"
        component={MyOrdersPage}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color}: {color: any}) => (
            <SimpleLineIcons name="basket" color={color} size={20} />
          ),
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}: {color: any}) => (
            <SimpleLineIcons name="user" color={color} size={20} />
          ),
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
