import React from 'react';
import {IntlProvider} from 'react-intl';
import {NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnv from './config/relay-env';
import enUS from './compiled-locales/en-US.json';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  ThemeBase,
} from 'react-native-paper';
import CMSRenderer from './features/CMS';

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
  },
} as ThemeBase;

const App = () => {
  return (
    <IntlProvider locale="en-US" messages={enUS}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RelayEnvironmentProvider environment={RelayEnv as never}>
            <CMSRenderer />
          </RelayEnvironmentProvider>
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
};

export default App;
