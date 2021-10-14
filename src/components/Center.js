import React from 'react';
import {View, StyleSheet} from 'react-native';

const Center = ({children = null}) => {
  return <View style={localStyles.container}>{children}</View>;
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Center;
