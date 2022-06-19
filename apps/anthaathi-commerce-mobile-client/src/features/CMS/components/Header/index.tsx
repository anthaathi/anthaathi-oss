import React from 'react';
import {Image, StatusBar} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';

export interface HeaderProps {
  rightIcon?: string;
  leftIcon?: string;
  title?: string;
}
const Header = ({rightIcon, leftIcon, title = ''}: HeaderProps) => {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary}
        barStyle={theme.dark ? 'dark-content' : 'light-content'}
      />

      <Appbar.Header
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        {rightIcon && (
          <Appbar.Action icon={rightIcon} color="#364A15" onPress={() => {}} />
        )}
        {title === '' ? (
          <Image
            style={{height: 48, width: 70}}
            source={{
              uri: 'https://www.nrtcfresh.com/wp-content/uploads/elementor/thumbs/logo-oxvdmbxi6g2vpdrt9kcwy3xyhpvajr03in9rykvzfk.png',
            }}
          />
        ) : null}
        <Appbar.Content title={title} />
        {leftIcon && (
          <Appbar.Action icon={leftIcon} color="#364A15" onPress={() => {}} />
        )}
      </Appbar.Header>
    </>
  );
};

export default Header;
