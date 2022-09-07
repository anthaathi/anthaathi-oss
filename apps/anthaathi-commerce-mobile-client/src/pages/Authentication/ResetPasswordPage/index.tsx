import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {RootStackParamList} from '../../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ResetPasswordPage = (
  props: NativeStackScreenProps<RootStackParamList, 'ResetPassword'>,
) => {
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
              color: '#0f8443',
              fontWeight: '700',
              fontSize: 28,
            }}>
            Reset your password
          </Text>
        </View>
        <View style={{marginVertical: 15}}>
          <TextInput
            mode="flat"
            label={'Username or email address'}
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              height: 56,
              marginHorizontal: 5,
              marginVertical: 10,
            }}
            activeUnderlineColor="#0f8443"
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
          Get password link
        </Button>
      </ScrollView>
    </View>
  );
};

export default ResetPasswordPage;
