import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'intl';
import 'intl/locale-data/jsonp/en';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
