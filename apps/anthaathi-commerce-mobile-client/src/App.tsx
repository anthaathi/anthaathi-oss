import React from 'react';
import {IntlProvider} from 'react-intl';
import {NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnv from './config/relay-env';
import enUS from './compiled-locales/en-US.json';
import arAE from './compiled-locales/ar-AE.json';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppRootNavStack from './navigators';
import {I18nManager} from 'react-native';
import {RecoilRoot} from 'recoil';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      black: string;
      titleTextColor: string;
      cardBorderColor: string;
      greenTextColor: string;
      greyTextColor: string;
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
    titleTextColor: '#364A15',
    cardBorderColor: '#E3E2E7',
    greenTextColor: '#008D3E',
    greyTextColor: '#808080',
  },
} as ReactNativePaper.Theme;

const App = () => {
  return (
    <RecoilRoot>
      <IntlProvider
        locale={I18nManager.isRTL ? 'ar-AE' : 'en-US'}
        messages={I18nManager.isRTL ? arAE : enUS}>
        <PaperProvider theme={theme as never}>
          <NavigationContainer>
            <RelayEnvironmentProvider environment={RelayEnv as never}>
              <AppRootNavStack />
            </RelayEnvironmentProvider>
          </NavigationContainer>
        </PaperProvider>
      </IntlProvider>
    </RecoilRoot>
  );
};

export default App;
