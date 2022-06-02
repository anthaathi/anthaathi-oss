import * as React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './src/App';
import enUS from './src/compiled-locales/en-US.json';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IntlProvider} from 'react-intl';

MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

export default function Main() {
  return (
    <IntlProvider locale="en-US" messages={enUS}>
      <PaperProvider>
        <SafeAreaView>
          <App />
        </SafeAreaView>
      </PaperProvider>
    </IntlProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
