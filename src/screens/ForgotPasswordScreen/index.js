import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Center, TextInput, Divider, Button} from '../../components';
import Routes from '../../navigation/Routes';

const ForgotPasswordScreen = ({navigation, route}) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const forgotPassword = () => {
    return new Promise((resolve, reject) => {
      route.params.cognitoUser.confirmPassword(code, password, {
        onFailure(err) {
          reject(err);
          showMessage({
            message: err,
            floating: true,
            type: 'danger',
            autoHide: true,
          });
        },
        onSuccess() {
          resolve();
          showMessage({
            message: 'Password successfully changed',
            floating: true,
            type: 'success',
            autoHide: true,
          });
          navigation.goBack();
        },
      });
    });
  };
  return (
    <Center>
      <View
        style={{width: '100%', paddingHorizontal: 30, alignItems: 'center'}}>
        <TextInput
          otherProps={{placeholder: 'Code'}}
          value={code}
          setValue={setCode}
        />
        <Divider />
        <TextInput
          otherProps={{placeholder: 'Password', secureTextEntry: true}}
          value={password}
          setValue={setPassword}
        />
        <Divider width={30} />
        <Button title="Reset password" onPress={forgotPassword} />
      </View>
    </Center>
  );
};

const localStyles = StyleSheet.create({});
export default ForgotPasswordScreen;
