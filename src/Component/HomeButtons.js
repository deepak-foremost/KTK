import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import fonts from '../utils/FontUtils';

const HomeButtons = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        {
          height: 55,
          justifyContent: 'center',
          marginTop: 15,
        },
        props?.style,
      ]}
      onPress={props?.onPress}>
      <Text
        style={{
          fontSize: 16,
          alignSelf: 'center',
          fontFamily: fonts.frutigebold,
          transform: 'captalize',
        }}>
        {props?.text}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeButtons;
