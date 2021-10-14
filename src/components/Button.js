import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Button = ({title, onPress}) => (
  <Pressable
    style={({pressed}) => [
      localStyles.container,
      {backgroundColor: pressed ? '#00000050' : '#000'},
    ]}
    onPress={onPress}>
    <Text style={localStyles.title}>{title}</Text>
  </Pressable>
);

const localStyles = StyleSheet.create({
  container: {
    height: 50,
    width: '40%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor: '#000',
  },
  title: {
    color: '#FFF',
    fontWeight: '600',
  },
});
export default Button;
