import React from 'react';
import {Image, StatusBar, StyleSheet} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';

export interface HeaderProps {
  rightIcon?: string;
  leftIcon?: string;
  title?: string;
  placement?: 'left' | 'center';
}
const Header = ({
  rightIcon,
  leftIcon,
  title = '',
  placement = 'left',
}: HeaderProps) => {
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
        }}>
        {rightIcon && (
          <Appbar.Action icon={rightIcon} color="#364A15" onPress={() => {}} />
        )}
        {title === '' ? (
          <Image
            style={[
              {
                height: 48,
                width: 70,
              },
              placement === 'center' && styles.headerAlign,
            ]}
            source={{
              uri: 'app_logo_url',
            }}
          />
        ) : null}
        <Appbar.Content
          title={title}
          style={[placement === 'center' && styles.headerAlign]}
        />
        {leftIcon && (
          <Appbar.Action icon={leftIcon} color="#364A15" onPress={() => {}} />
        )}
      </Appbar.Header>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerAlign: {
    alignItems: 'center',
  },
});
