import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Navigator = () => {
  const userToken = useSelector(state => state.auth.userToken);
  return userToken ? <HomeStack /> : <AuthStack />;
};

export default Navigator;
