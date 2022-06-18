import React from 'react';
import {Image, StatusBar} from 'react-native';
import {Appbar} from 'react-native-paper';

export interface HeaderProps {
  rightIconMenu: boolean;
  rightIconName: string;
  leftIconMenu: boolean;
  leftIconName: string;
  title?: string;
}
const Header = ({
  rightIconMenu,
  rightIconName,
  leftIconMenu,
  leftIconName,
  title = '',
}: HeaderProps) => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <Appbar.Header
        style={{
          backgroundColor: '#fff',
        }}
      >
        {rightIconMenu ? (
          <Appbar.Action
            icon={rightIconName}
            color="#364A15"
            onPress={() => {}}
          />
        ) : null}
        {title === '' ? (
          <Image
            style={{height: 48, width: 70}}
            source={{
              uri: 'https://www.nrtcfresh.com/wp-content/uploads/elementor/thumbs/logo-oxvdmbxi6g2vpdrt9kcwy3xyhpvajr03in9rykvzfk.png',
            }}
          />
        ) : null}
        <Appbar.Content title={title} />
        {leftIconMenu ? (
          <Appbar.Action
            icon={leftIconName}
            color="#364A15"
            onPress={() => {}}
          />
        ) : null}
      </Appbar.Header>
    </>
  );
};

export default Header;
