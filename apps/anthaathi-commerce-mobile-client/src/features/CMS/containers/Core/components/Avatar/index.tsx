import {View} from 'react-native';
import React from 'react';
import {Avatar as AvatarA} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

export interface AvatarProps {
  type: 'text' | 'image';
  userData: {
    name: string;
    photo: string;
  };
  size?: number;
}

const Avatar = ({type, userData, size = 120}: AvatarProps) => {
  return (
    <View style={{alignItems: 'center', marginTop: 10, marginBottom: 15}}>
      {type === 'image' && (
        <AvatarA.Image
          size={size}
          source={{
            uri: userData.photo,
          }}
        />
      )}

      {type === 'text' && <AvatarA.Text size={size} label={userData.name} />}
    </View>
  );
};

export default Avatar;

export const AvatarCMSInput = {
  _component: CoreComponentType.Avatar,
  component: Avatar,
};
