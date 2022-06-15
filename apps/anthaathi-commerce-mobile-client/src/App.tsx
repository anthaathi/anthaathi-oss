import React from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/themed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const App = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.push('Home2');
        }}
      >
        Hello world
      </Button>
    </View>
  );
};

export default App;
