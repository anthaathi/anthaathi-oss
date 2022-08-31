import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';

export interface CMSFABButtonProps {
  title: string;
  icon: string;
  handlePress: () => void;
}

const CMSFABButton = ({title, icon, handlePress}: CMSFABButtonProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <FAB icon={icon} label={title} style={styles.fab} onPress={handlePress} />
    </View>
  );
};

export default CMSFABButton;

export const FABButtonCMSInput = {
  _component: CoreComponentType.CMSFABButton,
  component: CMSFABButton,
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    width: '90%',
    bottom: 0,
    backgroundColor: '#0f8443',
  },
});
