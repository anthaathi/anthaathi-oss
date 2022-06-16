import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useIntl} from 'react-intl';
import {Text, ThemeBase, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';

export interface DeliveringSelectionProps {
  location: string;
  country: string;
}

export function DeliveringSelection(props: DeliveringSelectionProps) {
  const intl = useIntl();
  const theme: ThemeBase = useTheme();

  return (
    <View
      style={[
        styles.root,
        {backgroundColor: (theme.colors as MD3Colors).primaryContainer},
        {
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: (theme.colors as MD3Colors).primary,
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
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 12,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
