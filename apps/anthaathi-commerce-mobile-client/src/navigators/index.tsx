import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ProfilePage from '../pages/ProfilePage';
import {HomeBottomTab} from './HomeBottomTab';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={HomeBottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductListPage"
        component={ProductListPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductPage"
        component={ProductPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
