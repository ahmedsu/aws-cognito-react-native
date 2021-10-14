import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomTextInput = ({value, setValue, otherProps}) => (
  <TextInput
    value={value}
    onChangeText={setValue}
    style={localStyles.input}
    placeholderTextColor="black"
    {...otherProps}
  />
);

const localStyles = StyleSheet.create({
  input: {
    height: 60,
    paddingHorizontal: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    color: 'black',
  },
});
export default CustomTextInput;
