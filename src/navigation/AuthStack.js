import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Routes from './Routes';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen component={LoginScreen} name={Routes.authStack.login} />
    <Stack.Screen component={RegisterScreen} name={Routes.authStack.register} />
    <Stack.Screen
      component={ForgotPasswordScreen}
      name={Routes.authStack.forgotPassword}
    />
  </Stack.Navigator>
);

export default AuthStack;
