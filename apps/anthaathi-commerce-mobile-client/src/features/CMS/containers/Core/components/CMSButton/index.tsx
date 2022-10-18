import React from 'react';
import {Button} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

export interface CMSButtonProps {
  title: string;
  handlePress?: () => void;
}

const CMSButton = ({title, handlePress}: CMSButtonProps) => {
  return (
    <Button
      mode="contained"
      style={{
        marginVertical: 10,
        marginHorizontal: '4%',
        borderRadius: 4,
        width: '92%',
        position: 'absolute',
        bottom: 0,
      }}
      labelStyle={{
        paddingVertical: 5,
      }}
      onPress={handlePress}>
      {title}
    </Button>
  );
};

export default CMSButton;

export const ButtonCMSInput = {
  _component: CoreComponentType.CMSButton,
  component: CMSButton,
};
