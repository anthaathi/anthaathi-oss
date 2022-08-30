import {View} from 'react-native';
import React from 'react';
import {Avatar as Avatar} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

export interface AvatarProps {
  userData: {
    name: string;
    photo: string;
  };
  size?: number;
}

const CMSAvatar = ({userData, size = 120}: AvatarProps) => {
  return (
    <View
      testID="CMSAvatar"
      style={{alignItems: 'center', marginTop: 10, marginBottom: 15}}>
      {userData.photo ? (
        <Avatar.Image
          size={size}
          source={{
            uri: userData.photo,
          }}
        />
      ) : (
        <Avatar.Text size={size} label={userData.name} />
      )}
    </View>
  );
};

export default CMSAvatar;

export const AvatarCMSInput = {
  _component: CoreComponentType.CMSAvatar,
  component: CMSAvatar,
};
