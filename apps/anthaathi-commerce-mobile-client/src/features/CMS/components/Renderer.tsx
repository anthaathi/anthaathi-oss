import * as React from 'react';
import {Button, Text, Appbar, useTheme} from 'react-native-paper';
import {View} from 'react-native';
import {DeliveringSelection} from '../containers/HomePage/components/DeliveringSelection';
import HeroCategories from '../containers/HomePage/components/HeroCategories';
import Spacer from '../containers/HomePage/components/Spacer';

export default function () {
  const {
    colors: {background},
  } = useTheme();

  return (
    <View style={{height: '100%', backgroundColor: background}}>
      <DeliveringSelection location="Dubai" country="United Arab Emirates" />

      <Spacer style={{paddingBottom: 36}} />

      <HeroCategories
        title="Our Products"
        items={[
          {title: 'omkar', image: 'okasok', key: '12'},
          {title: 'omkar', image: 'okasok', key: '23'},
          {title: 'omkar', image: 'okasok', key: '34'},
        ]}
      />
    </View>
  );
}
