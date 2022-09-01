import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ProfilePage from '../pages/ProfilePage';
import MainPage from '../pages/MainPage';
import EditProfile from '../pages/EditProfile';
import AddEditAddress from '../pages/AddEditAddress';
import {ProductTopTab} from './ProductTopTab';
import {Image, StyleSheet, View} from 'react-native';
import {Colors, IconButton, TextInput} from 'react-native-paper';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

const Stack = createNativeStackNavigator();

export interface ImageHeaderProps {
  onCartTap: () => void;
  hasBackButton?: boolean;
}

function ImageHeader({onCartTap, hasBackButton}: ImageHeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, hasBackButton && {paddingLeft: 0}]}>
        {hasBackButton && (
          <IconButton color={Colors.grey800} icon="arrow-left" />
        )}

        <Image
          style={styles.image}
          source={{
            uri: 'https://www.nrtcfresh.com/wp-content/uploads/elementor/thumbs/logo-oxvdmbxi6g2vpdrt9kcwy3xyhpvajr03in9rykvzfk.png',
          }}
          resizeMode="contain"
        />

        <View style={{flexGrow: 1}} />

        <IconButton onPress={onCartTap} color={Colors.grey800} icon="phone" />

        <IconButton
          onPress={onCartTap}
          color={Colors.grey800}
          icon="shopping"
        />
      </View>
      <View style={{paddingRight: 32, paddingLeft: 12, paddingBottom: 12}}>
        <TextInput placeholder="Search" dense underlineColor="transparent" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginLeft: -16,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 24,
    paddingLeft: 24,
  },
  image: {
    width: 74,
    height: 42,
    zIndex: 999,
  },
});

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={MainPage}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: () => (
            <ImageHeader
              hasBackButton={false}
              onCartTap={() => {
                navigation.navigate('CartPage');
              }}
            />
          ),
        })}
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
        options={({navigation}) => ({
          headerShown: true,
          headerBackVisible: false,
          headerTitle: () => (
            <ImageHeader
              hasBackButton={true}
              onCartTap={() => {
                navigation.navigate('CartPage');
              }}
            />
          ),
        })}
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
        name="AddEditAddress"
        component={AddEditAddress}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
