import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import {Button, TextInput, useTheme} from 'react-native-paper';
import {RootStackParamList} from '../../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useIntl} from 'react-intl';

const ResetPasswordPage = (
  props: NativeStackScreenProps<RootStackParamList, 'ResetPassword'>,
) => {
  const theme = useTheme();
  const intl = useIntl();

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <ScrollView style={{paddingHorizontal: 25}}>
        <View
          style={{
            paddingTop: '45%',
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.primary,
              fontWeight: '700',
              fontSize: 28,
            }}>
            {intl.formatMessage({defaultMessage: 'Reset your password'})}
          </Text>
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
            props.navigation.navigate('SignIn');
          }}>
          {intl.formatMessage({defaultMessage: 'Get password link'})}
        </Button>
      </ScrollView>
    </View>
  );
};

export default ResetPasswordPage;
