import React, {useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {Center, SelectImage, Divider} from '../../components';
import Clipboard from '@react-native-clipboard/clipboard';

const HomeScreen = () => {
  const username = useSelector(state => state.user.username);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    console.log('state', username);
    console.log('TOKEN: ');
    console.log(token)
  }, []);

  const copyToClipboard = () => {
    Clipboard.setString(token);
  };

  return (
    <Center>
      <Text style={{color: 'black'}}>{username}</Text>
      <Divider/>
      <Pressable onPress={copyToClipboard}><Text style={{color:'black', fontSize: 14, fontWeight:'bold'}}>COPY TOKEN</Text></Pressable>
      <Divider/>
      <SelectImage />
    </Center>
  );
};

export default HomeScreen;
