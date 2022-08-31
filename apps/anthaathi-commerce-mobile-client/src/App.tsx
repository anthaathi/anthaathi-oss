import React, {useEffect} from 'react';
import {IntlProvider} from 'react-intl';
import {NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnv from './config/relay-env';
import enUS from './compiled-locales/en-US.json';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import AppRootNavStack from './navigators';
import RNBootSplash from 'react-native-bootsplash';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      black: string;
    }
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0f8443',
    primaryContainer: '#f4faf7',
    secondary: 'rgb(244, 250, 247)',
    black: '#000',
  },
} as ReactNativePaper.Theme;

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

  return (
    <IntlProvider locale="en-US" messages={enUS}>
      <PaperProvider theme={theme as never}>
        <NavigationContainer>
          <RelayEnvironmentProvider environment={RelayEnv as never}>
            <AppRootNavStack />
          </RelayEnvironmentProvider>
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
};

export default App;
