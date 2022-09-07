import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ProfilePage from '../pages/ProfilePage';
import MainPage from '../pages/MainPage';
import EditProfile from '../pages/EditProfile';
import AddEditAddress from '../pages/AddEditAddress';
import {ProductTopTab} from './ProductTopTab';
import {I18nManager, Image, Linking, StyleSheet, View} from 'react-native';
import {Badge, Colors, IconButton, TextInput} from 'react-native-paper';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import RNRestart from 'react-native-restart';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {CartItemData} from '../features/CMS/context/CartItemContext';
import {useNavigation} from '@react-navigation/native';
import SignInPage from '../pages/Authentication/SignInPage';
import SignUpPage from '../pages/Authentication/SignUpPage';
import ResetPasswordPage from '../pages/Authentication/ResetPasswordPage';
import {RootStackParamList} from '../types/Route';
import AddressInfoPage from '../pages/AddressDetails/AddressInfoPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export interface ImageHeaderProps {
  onCartTap: () => void;
  mailTo?: boolean;
  hasBackButton?: boolean;
  inlineSearch?: boolean;
}

function ImageHeader({
  mailTo = false,
  onCartTap,
  hasBackButton,
  inlineSearch = false,
}: ImageHeaderProps) {
  async function changeLanguage() {
    if (I18nManager.isRTL) {
      await I18nManager.forceRTL(false);
    } else {
      if (!I18nManager.isRTL) {
        await I18nManager.forceRTL(true);
      }
    }
    RNRestart.Restart();
  }
  const cartItem = useRecoilValue(CartItemData);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          I18nManager.isRTL ? styles.containerRTL : styles.containerLTR,
          hasBackButton && {paddingLeft: 0},
        ]}>
        {hasBackButton && (
          <IconButton
            color={Colors.grey800}
            icon="arrow-left"
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}

        <IconButton
          onPress={() => changeLanguage()}
          color={Colors.grey800}
          icon="translate"
        />

        <View style={{flexGrow: 1}} />

        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/everyday_1_256x256.png?v=1662529180',
          }}
          resizeMode="contain"
        />

        <View style={{flexGrow: 1}} />

        {mailTo && (
          <IconButton
            onPress={() => Linking.openURL('mailto:customercare@nrtcfresh.com')}
            color={Colors.grey800}
            icon="email-outline"
          />
        )}

        <View>
          <IconButton
            onPress={onCartTap}
            color={Colors.grey800}
            icon="shopping"
          />
          {cartItem.length > 0 && (
            <Badge
              style={{
                backgroundColor: Colors.grey800,
                position: 'absolute',
                top: 6,
              }}>
              {cartItem.length}
            </Badge>
          )}
        </View>

        {inlineSearch && (
          <IconButton
            onPress={() => setIsSearchOpen(!isSearchOpen)}
            color={Colors.grey800}
            icon="magnify"
          />
        )}
      </View>
      {(!inlineSearch || isSearchOpen) && (
        <View
          style={[
            I18nManager.isRTL ? styles.containerRTL : styles.containerLTR,
            {paddingTop: 0, paddingBottom: 12},
          ]}>
          <TextInput placeholder="Search" dense underlineColor="transparent" />
        </View>
      )}
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
  container: {flex: 1, flexDirection: 'row', paddingTop: 12, paddingBottom: 12},
  containerLTR: {
    paddingRight: 24,
    paddingLeft: 8,
  },
  containerRTL: {
    paddingLeft: 48,
    paddingRight: 0,
  },
  image: {
    width: 72,
    height: 48,
    zIndex: 999,
  },
});

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
        options={({navigation}) => ({
          headerShown: true,
          headerBackVisible: false,
          headerTitle: () => (
            <ImageHeader
              hasBackButton={false}
              onCartTap={() => {
                navigation.navigate('CartPage');
              }}
              mailTo={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ProductListPage"
        component={ProductListPage}
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
              inlineSearch={true}
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
        options={({navigation}) => ({
          headerShown: true,
          headerBackVisible: false,
          headerTitle: () => (
            <ImageHeader
              hasBackButton={true}
              inlineSearch={true}
              onCartTap={() => {
                navigation.navigate('CartPage');
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={({navigation}) => ({
          headerShown: true,
          headerBackVisible: false,
          headerTitle: () => (
            <ImageHeader
              hasBackButton={true}
              inlineSearch={true}
              onCartTap={() => {
                navigation.navigate('CartPage');
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={({navigation}) => ({
          headerShown: true,
          headerBackVisible: false,
          headerTitle: () => (
            <ImageHeader
              hasBackButton={true}
              inlineSearch={true}
              onCartTap={() => {
                navigation.navigate('CartPage');
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddressInfo"
        component={AddressInfoPage}
        options={({navigation}) => ({
          headerShown: true,
          headerBackVisible: false,
          headerTitle: () => (
            <ImageHeader
              hasBackButton={true}
              inlineSearch={true}
              onCartTap={() => {
                navigation.navigate('CartPage');
              }}
            />
          ),
        })}
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
