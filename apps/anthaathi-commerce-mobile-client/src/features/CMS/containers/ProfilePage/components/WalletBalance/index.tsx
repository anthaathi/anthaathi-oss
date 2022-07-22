import {View, Pressable} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIntl} from 'react-intl';
import {ProfilePageComponentType} from '../../../../types/common';

export interface WalletBalanceProps {
  title: string;
  balance: number;
  currency: string;
  handlePress?: () => void;
  buttonTitle: string;
}

const WalletBalance = (props: WalletBalanceProps) => {
  const intl = useIntl();
  return (
    <View testID="walletBalance">
      <Pressable
        testID="handlePress"
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          height: 60,
        }}
        onPress={props.handlePress}>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#008D3E',
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: '#808080',
              fontWeight: '400',
              marginLeft: 10,
            }}>
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#008D3E',
              fontWeight: '700',
              marginLeft: 10,
            }}>
            {intl.formatNumber(props.balance, {
              style: 'currency',
              currency: props.currency,
            })}
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            backgroundColor: '#008D3E',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#008D3E',
            borderTopRightRadius: 2,
            borderBottomRightRadius: 2,
          }}>
          <Icon name="clipboard-outline" color="#ffffff" size={18} />
          <Text style={{fontSize: 10, fontWeight: '400', color: '#ffffff'}}>
            {props.buttonTitle}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default WalletBalance;

export const WalletBalanceCMSInput = {
  _component: ProfilePageComponentType.WalletBalance,
  component: WalletBalance,
};
