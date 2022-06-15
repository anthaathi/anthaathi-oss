import * as React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import enUS from './src/compiled-locales/en-US.json';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IntlProvider} from 'react-intl';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnv from './src/config/relay-env';
import Products from './src/screens/Products';
import {RootRoute} from './src/types/Route';

MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator<RootRoute>();

StatusBar.setHidden(true, 'none');

export default function Main() {
  return (
    <IntlProvider locale="en-US" messages={enUS}>
      <ThemeProvider>
        <NavigationContainer>
          <RelayEnvironmentProvider environment={RelayEnv as never}>
            <Stack.Navigator
              initialRouteName="Products"
              defaultScreenOptions={{headerShown: false}}
              screenOptions={{headerShown: false}}
            >
              <Stack.Screen
                name="Products"
                component={Products}
                initialParams={{handle: 'a-new-day'}}
              />
            </Stack.Navigator>
          </RelayEnvironmentProvider>
        </NavigationContainer>
      </ThemeProvider>
    </IntlProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
