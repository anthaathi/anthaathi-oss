import {StyleProp, TextStyle, StyleSheet, View} from 'react-native';
import React from 'react';
import {CoreComponentType} from '../../../../types/common';
import {Text} from 'react-native-paper';

const CMSText = ({
  title,
  textStyle,
  variant = 'titleLarge',
}: {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  variant?:
    | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    | 'headlineLarge'
    | 'headlineMedium'
    | 'headlineSmall'
    | 'titleLarge'
    | 'titleMedium'
    | 'titleSmall'
    | 'labelLarge'
    | 'labelMedium'
    | 'labelSmall'
    | 'bodyLarge'
    | 'bodyMedium'
    | 'bodySmall';
}) => {
  return (
    <View testID="CMSText">
      <Text
        variant={variant}
        style={StyleSheet.flatten([
          {
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            marginVertical: 10,
          },
          textStyle,
        ])}>
        {title}
      </Text>
    </View>
  );
};

export default CMSText;

export const TextCMSInput = {
  _component: CoreComponentType.CMSText,
  component: CMSText,
};
