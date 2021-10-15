import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {Center, SelectImage, Divider} from '../../components';

const HomeScreen = () => {
  const username = useSelector(state => state.user.username);
  useEffect(() => {
    console.log('state', username);
  }, []);
  return (
    <Center>
      <Text style={{color: 'black'}}>{username}</Text>
      <Divider/>
      <SelectImage />
    </Center>
  );
};

export default HomeScreen;
