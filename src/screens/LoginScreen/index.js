import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {Center, TextInput, Divider, Button} from '../../components';
import Routes from '../../navigation/Routes';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';
import {showMessage} from 'react-native-flash-message';
import Modal from '../../components/Modal';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/actions/authActions';
import {setUsername as setUsernameRedux, setUserToken} from '../../redux/actions/userActions';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const logIn = () => {
    const poolData = {
      UserPoolId: 'us-east-2_MncmyfGQC',
      ClientId: '2ml4t1vfsjppeippf8knjf6jr0',
    };
    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: function (result) {
        console.log('login result', result);
        const accessToken = result.getAccessToken().getJwtToken();
        console.log('username', username);
        dispatch(setUserToken(accessToken))
        dispatch(setUsernameRedux(username));
        dispatch(signIn(accessToken));
      },

      onFailure: function (err) {
        console.log('err', err.message);
        if (err.message === 'User is not confirmed.') setShowModal(true);
        showMessage({
          message: err.message || JSON.stringify(err),
          floating: true,
          type: 'danger',
          autoHide: true,
        });
      },
    });
  };
  const forgotPassword = () => {
    const poolData = {
      UserPoolId: 'us-east-2_MncmyfGQC',
      ClientId: '2ml4t1vfsjppeippf8knjf6jr0',
    };
    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.forgotPassword({
      onSuccess: () => {
        navigation.navigate(Routes.authStack.forgotPassword, {cognitoUser});
      },
      onFailure: err => {
        console.log('failure', err);
      },
    });
  };
  return (
    <Center>
      <View
        style={{width: '100%', paddingHorizontal: 30, alignItems: 'center'}}>
        <TextInput
          otherProps={{placeholder: 'Username'}}
          value={username}
          setValue={setUsername}
        />
        <Divider />
        <TextInput
          otherProps={{placeholder: 'Password', secureTextEntry: true}}
          value={password}
          setValue={setPassword}
        />
        <Divider width={30} />
        <Button title="Login" onPress={logIn} />
        <Divider width={30} />
        <Button
          title="Register"
          onPress={() => navigation.navigate(Routes.authStack.register)}
        />
        <Divider width={30} />
        <Pressable onPress={forgotPassword}>
          <Text style={{color: 'black'}}>Forgot password </Text>
        </Pressable>
      </View>
    </Center>
  );
};

const localStyles = StyleSheet.create({});
export default LoginScreen;
