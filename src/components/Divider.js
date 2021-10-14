import React from 'react';
import {View, Text} from 'react-native';

const Divider = ({horizontal = false, width = 15}) => (
  <View style={horizontal ? {width} : {height: width}} />
);

export default Divider;
