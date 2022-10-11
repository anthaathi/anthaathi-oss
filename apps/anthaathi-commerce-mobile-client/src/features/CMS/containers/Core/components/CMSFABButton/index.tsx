import {View} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

export interface CMSFABButtonProps {
  title: string;
  icon: string;
  handlePress: () => void;
  buttonBackgroundColor?: string;
  buttonWidth?: string;
  buttonHeight?: number;
  buttonRadius?: number;
  buttonViewWidth?: string;
  buttonViewheight?: number;
}

const CMSFABButton = ({
  title,
  icon,
  handlePress,
  buttonBackgroundColor,
  buttonWidth,
  buttonHeight,
  buttonRadius,
  buttonViewWidth,
  buttonViewheight,
}: CMSFABButtonProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        bottom: 0,
        position: 'absolute',
        right: 0,
        width: buttonViewWidth,
        height: buttonViewheight,
      }}>
      <FAB
        icon={icon}
        label={title}
        uppercase={false}
        style={{
          margin: 16,
          backgroundColor: buttonBackgroundColor || '#fff',
          width: buttonWidth,
          height: buttonHeight,
          borderRadius: buttonRadius,
        }}
        onPress={handlePress}
      />
    </View>
  );
};

export default CMSFABButton;

export const FABButtonCMSInput = {
  _component: CoreComponentType.CMSFABButton,
  component: CMSFABButton,
};
