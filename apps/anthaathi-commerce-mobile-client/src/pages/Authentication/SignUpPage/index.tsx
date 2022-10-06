import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Checkbox, Text, TextInput, useTheme} from 'react-native-paper';
import {RootStackParamList} from '../../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useIntl} from 'react-intl';

const SignUpPage = (
  props: NativeStackScreenProps<RootStackParamList, 'SignUp'>,
) => {
  const theme = useTheme();
  const intl = useIntl();
  const [passwordShow, setPasswordShow] = React.useState(true);
  const [checked, setChecked] = React.useState(false);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <ScrollView style={{paddingHorizontal: 25}}>
        <View
          style={{
            paddingTop: '30%',
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
            label={intl.formatMessage({defaultMessage: 'Username'})}
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
            label={intl.formatMessage({defaultMessage: 'Email address'})}
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
          <TextInput
            mode="flat"
            label={intl.formatMessage({defaultMessage: 'Phone number'})}
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              height: 56,
              marginHorizontal: 5,
              marginVertical: 10,
            }}
            activeUnderlineColor={theme.colors.primary}
          />
        </View>

        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Checkbox
            color={theme.colors.primary}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{fontWeight: '500', fontSize: 14}}>
            {intl.formatMessage({defaultMessage: 'I agree with'}) + ' '}
          </Text>
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Text
              style={{
                color: theme.colors.primary,
                fontWeight: '700',
                fontSize: 13,
                textDecorationLine: 'underline',
              }}>
              {intl.formatMessage({defaultMessage: 'Terms and Conditions'})}
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
          labelStyle={{paddingVertical: 5}}>
          {intl.formatMessage({defaultMessage: 'Create an account'})}
        </Button>

        <View
          style={{
            marginTop: 30,
            paddingBottom: '10%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: '500', fontSize: 14, marginRight: 10}}>
            {intl.formatMessage({defaultMessage: 'OR'})}
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SignIn');
            }}>
            <Text
              style={{
                color: theme.colors.primary,
                fontWeight: '700',
                fontSize: 13,
              }}>
              {intl.formatMessage({defaultMessage: 'Login to your account'})}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpPage;
