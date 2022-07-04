import React from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';

export interface HeaderProps {
  rightIcon?: string;
  rightOnPress?: () => void;
  leftIcon?: string;
  leftOnPress?: () => void;
  title?: string;
  placement?: 'left' | 'center';
}
const Header = ({
  rightIcon,
  rightOnPress,
  leftIcon,
  leftOnPress,
  title = '',
  placement = 'left',
}: HeaderProps) => {
  const theme = useTheme();
  return (
    <View testID="header">
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary}
        barStyle={theme.dark ? 'dark-content' : 'light-content'}
      />
      <Appbar.Header
        style={{
          backgroundColor: theme.colors.background,
        }}>
        {leftIcon && (
          <Appbar.Action
            testID="leftOnHandler"
            icon={leftIcon}
            color="#364A15"
            onPress={leftOnPress}
          />
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
        {rightIcon && (
          <Appbar.Action
            testID="rightOnHandler"
            icon={rightIcon}
            color="#364A15"
            onPress={rightOnPress}
          />
        )}
      </Appbar.Header>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerAlign: {
    alignItems: 'center',
  },
});
