import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/Route';
import {useIntl} from 'react-intl';

const SignInPage = (
  props: NativeStackScreenProps<RootStackParamList, 'SignIn'>,
) => {
  const theme = useTheme();
  const intl = useIntl();
  const [passwordShow, setPasswordShow] = React.useState(true);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <ScrollView style={{paddingHorizontal: 25}}>
        <View
          style={{
            paddingTop: '40%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 138,
              height: 128,
              zIndex: 999,
            }}
            source={{
              uri: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/everyday_1_256x256.png?v=1662529180',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{marginVertical: 15}}>
          <TextInput
            mode="flat"
            label={intl.formatMessage({
              defaultMessage: 'Username or email address',
            })}
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              height: 56,
              marginHorizontal: 5,
              marginVertical: 10,
            }}
            activeUnderlineColor={theme.colors.primary}
          />
          <TextInput
            mode="flat"
            label={intl.formatMessage({defaultMessage: 'Password'})}
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              height: 56,
              marginHorizontal: 5,
              marginVertical: 10,
            }}
            activeUnderlineColor={theme.colors.primary}
            secureTextEntry={passwordShow}
            right={
              <TextInput.Icon
                icon={passwordShow ? 'eye' : 'eye-off'}
                onPress={() => {
                  setPasswordShow(!passwordShow);
                }}
              />
            }
          />
        </View>

        <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ResetPassword');
            }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: theme.colors.primary,
                fontWeight: '600',
                fontSize: 13,
              }}>
              {intl.formatMessage({defaultMessage: 'Forgot Password?'})}
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          mode="contained"
          uppercase={false}
          style={{
            marginVertical: 15,
            marginHorizontal: 30,
            borderRadius: 32,
          }}
          labelStyle={{paddingVertical: 5}}
          onPress={() => {
            props.navigation.navigate('Dashboard');
          }}>
          {intl.formatMessage({defaultMessage: 'Sign In'})}
        </Button>

        <View
          style={{
            paddingBottom: '10%',
            marginTop: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: '500', fontSize: 14}}>
            {intl.formatMessage({defaultMessage: "Don't have an account?"})}
          </Text>
          <TouchableOpacity
            style={{paddingHorizontal: 10, paddingVertical: 10}}
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}>
            <Text
              style={{
                color: theme.colors.primary,
                fontWeight: '700',
                fontSize: 13,
              }}>
              {intl.formatMessage({defaultMessage: 'Sign Up'})}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInPage;
