import React from 'react';
import {Pressable, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';
import {CartPageComponentType} from '../../../../types/common';

export interface PromoCodeProps {
  title: string;
  handlePress?: () => void;
}

const PromoCode = (props: PromoCodeProps) => {
  const theme = useTheme();
  return (
    <View
      style={{alignItems: 'center', marginVertical: 5, marginHorizontal: 10}}
      testID="promoCode">
      <Pressable
        testID="handlePress"
        onPress={props.handlePress}
        style={{
          backgroundColor: (theme.colors as MD3Colors).primaryContainer,
          width: '100%',
          height: 48,
          borderRadius: 4,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: '#737272', fontSize: 14, fontWeight: '500'}}>
            {props.title}
          </Text>
          <Icon name="tag" color={theme.colors.primary} size={20} />
        </View>
      </Pressable>
    </View>
  );
};

export default PromoCode;

export const PromoCodeCMSInput = {
  _component: CartPageComponentType.PromoCode,
  component: PromoCode,
};
