import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {TextInput, Button} from '../components';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';
import Divider from './Divider';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/core';

const Modal = ({username}) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const navigation = useNavigation();
  const confirmCode = () => {
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
    cognitoUser.confirmRegistration(confirmationCode, true, (err, res) => {
      if (err) {
        console.log(err);
        showMessage({
          message: err,
          floating: true,
          type: 'danger',
          autoHide: true,
        });
        return;
      }
      console.log('result', res);
      showMessage({
        message: err,
        floating: true,
        type: 'success',
        autoHide: true,
      });
      navigation.goBack();
    });
  };
  return (
    <Pressable
      style={{
        position: 'absolute',
        backgroundColor: '#00000050',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      }}>
      <Pressable
        style={{
          height: 200,
          width: '80%',
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <TextInput
          otherProps={{placeholder: 'Code'}}
          value={confirmationCode}
          setValue={setConfirmationCode}
        />
        <Divider />
        <Button title="Confirm code" onPress={confirmCode} />
      </Pressable>
    </Pressable>
  );
};

export default Modal;
