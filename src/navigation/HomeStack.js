import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen component={HomeScreen} name={Routes.homeStack.home} />
  </Stack.Navigator>
);

export default HomeStack;
