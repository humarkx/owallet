import { Text } from 'react-native';
import React from 'react';
export const CText = (props) => {
  return (
    <Text {...props} style={[{ fontFamily: 'DMSans-Regular' }, props.style]}>
      {props.children}
    </Text>
  );
};
