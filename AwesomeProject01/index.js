/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppPro from './AppPro';
import {name as appName} from './app.json';

// here in this we are registering a component using the AppRegistry and we are bringing the name from app.json and rendering the component App
AppRegistry.registerComponent(appName, () => AppPro);
