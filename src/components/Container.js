import React from 'react';
import {View, Text} from 'react-native';

const Container = ({children, extraStyles = null}) => (
  <View style={[{flex: 1, backgroundColor: 'white'}, extraStyles]}>
    {children}
  </View>
);

export default Container;
