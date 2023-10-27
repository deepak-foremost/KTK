import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import fonts from '../utils/FontUtils';

const Toolbar = (props,{navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: 55,
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor:'#E8E4E4',
        borderBottomWidth:1
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          backgroundColor: '#FFF200',
          justifyContent: 'center',
          height: 35,
          width: 35,
          position: 'absolute',
          left: 15,
        }}
        onPress={props?.onPress}>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../appimages/backicon.png')}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: fonts.frutigebold,
          fontSize: 18,
         
        }}>
        {props?.text}
      </Text>
    </View>
  );
};

export default Toolbar;
