import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Center} from '../../components';

const HomeScreen = () => {
  const username = useSelector(state => state.user.username);
  useEffect(() => {
    console.log('state', username);
  }, []);
  return (
    <Center>
      <Text style={{color: 'black'}}>{username}</Text>
    </Center>
  );
};

export default HomeScreen;
