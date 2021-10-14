import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Center, TextInput, Divider, Button, Modal} from '../../components';
import Routes from '../../navigation/Routes';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import {showMessage} from 'react-native-flash-message';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const register = () => {
    const poolData = {
      UserPoolId: 'us-east-2_MncmyfGQC',
      ClientId: '2ml4t1vfsjppeippf8knjf6jr0',
    };
    const userPool = new CognitoUserPool(poolData);
    const attributeList = [];
    const dataEmail = {
      Name: 'email',
      Value: email,
    };

    const attributeEmail = new CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);
    userPool.signUp(username, password, attributeList, null, (err, res) => {
      if (err) {
        console.log('err', err);
        showMessage({
          message: err,
          floating: true,
          type: 'danger',
          autoHide: true,
        });
        return;
      }
      console.log('res', res);
      setShowModal(true);
      showMessage({
        message: 'Account created successfully',
        floating: true,
        type: 'success',
        autoHide: true,
      });
      //  navigation.goBack();
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
          otherProps={{placeholder: 'Email'}}
          value={email}
          setValue={setEmail}
        />
        <Divider />
        <TextInput
          otherProps={{placeholder: 'Password', secureTextEntry: true}}
          value={password}
          setValue={setPassword}
        />
        <Divider width={30} />
        <Button title="Register" onPress={register} />
      </View>
      {showModal && <Modal username={username} />}
    </Center>
  );
};

const localStyles = StyleSheet.create({});
export default RegisterScreen;
