import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';

const Main = () => (
  <NavigationContainer>
    <Provider store={store}>
      <App />
    </Provider>
    <FlashMessage position="top" />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Main);
