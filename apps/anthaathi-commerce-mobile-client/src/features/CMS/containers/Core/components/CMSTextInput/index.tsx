import {View, TextInput as RNTextInput} from 'react-native';
import React, {ComponentPropsWithRef} from 'react';
import {TextInput, useTheme} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

export interface CMSTextInputProps
  extends ComponentPropsWithRef<typeof RNTextInput> {
  label: string;
}

const CMSTextInput = ({label}: CMSTextInputProps) => {
  const theme = useTheme();
  return (
    <View style={{marginHorizontal: 5, marginVertical: 10}}>
      <TextInput
        mode="flat"
        label={label}
        style={{backgroundColor: '#fff', fontSize: 14, height: 56}}
        activeUnderlineColor={theme.colors.primary}
      />
    </View>
  );
};

export default CMSTextInput;

export const TextInputCMSInput = {
  _component: CoreComponentType.CMSTextInput,
  component: CMSTextInput,
};
