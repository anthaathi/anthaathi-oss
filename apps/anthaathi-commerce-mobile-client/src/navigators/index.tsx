import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ProfilePage from '../pages/ProfilePage';
import MainPage from '../pages/MainPage';
import EditProfile from '../pages/EditProfile';
import AddEditAddress from '../pages/AddEditAddress';
import {ProductTopTab} from './ProductTopTab';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import SignInPage from '../pages/Authentication/SignInPage';
import SignUpPage from '../pages/Authentication/SignUpPage';
import ResetPasswordPage from '../pages/Authentication/ResetPasswordPage';
import {RootStackParamList} from '../types/Route';
import AddressInfoPage from '../pages/AddressDetails/AddressInfoPage';
import SelectDatePage from '../pages/SelectDatePage';
import OrderDetailsPage from '../pages/OrderDetailsPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={MainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductListPage"
        component={ProductListPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartPage"
        component={CartPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckoutPage"
        component={CheckoutPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductListPage1"
        component={ProductTopTab}
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
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddressInfo"
        component={AddressInfoPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddEditAddress"
        component={AddEditAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectDate"
        component={SelectDatePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetailsPage"
        component={OrderDetailsPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
