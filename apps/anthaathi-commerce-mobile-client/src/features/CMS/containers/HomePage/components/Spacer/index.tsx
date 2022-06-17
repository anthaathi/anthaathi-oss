import * as React from 'react';
import {StyleProp, View, ViewProps} from 'react-native';

export type SpacerProps = StyleProp<ViewProps>;

export default function Spacer(props: SpacerProps) {
  return <View style={props} />;
}
