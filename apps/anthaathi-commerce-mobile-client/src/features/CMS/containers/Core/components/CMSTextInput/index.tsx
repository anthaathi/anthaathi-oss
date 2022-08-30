import {View, TextInput as RNTextInput} from 'react-native';
import React, {ComponentPropsWithRef} from 'react';
import {TextInput} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

export interface CMSTextInputProps
  extends ComponentPropsWithRef<typeof RNTextInput> {
  label: string;
}

const CMSTextInput = ({label}: CMSTextInputProps) => {
  return (
    <View style={{marginHorizontal: 5, marginVertical: 5}}>
      <TextInput
        label={label}
        style={{backgroundColor: '#fff'}}
        activeUnderlineColor="#858585"
      />
    </View>
  );
};

export default CMSTextInput;

export const TextInputCMSInput = {
  _component: CoreComponentType.CMSTextInput,
  component: CMSTextInput,
};
