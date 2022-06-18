import * as React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {useIntl} from 'react-intl';
import {IconButton, Text, ThemeBase, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';

export interface DeliveringSelectionProps {
  location: string;
  country: string;
  onPress?: () => {};
}

export function DeliveringSelection(props: DeliveringSelectionProps) {
  const intl = useIntl();
  const theme: ThemeBase = useTheme();

  return (
    <TouchableHighlight
      underlayColor={(theme.colors as MD3Colors).primary}
      onPress={props.onPress}
      style={[
        {
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: (theme.colors as MD3Colors).primary,
          borderRadius: 4,
        },
      ]}
    >
      <View
        style={[
          styles.root,
          {
            backgroundColor: (theme.colors as MD3Colors).primaryContainer,
            borderRadius: 4,
          },
        ]}
      >
        <View style={{...styles.alignCenter, ...{width: 38}}}>
          <Icon name="map-marker" color={theme.colors.primary} size={24}></Icon>
        </View>
        <View style={styles.column}>
          <Text variant="labelMedium">
            {intl.formatMessage({defaultMessage: 'Delivering to'})}
          </Text>
          <Text variant="labelLarge">
            {props.location} - {props.country}
          </Text>
        </View>

        <View style={{flexGrow: 1}} />

        <IconButton onPress={props.onPress} icon="chevron-right"></IconButton>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 12,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});