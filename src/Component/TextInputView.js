import {View, Text, StyleSheet,TextInput, Dimensions, Platform} from 'react-native';
import React, { useState } from 'react';
import fonts from '../utils/FontUtils';

const TextInputView = (props) => {
    const [fadeNum,setFadeNum]=useState(false);
    const platform=Platform.OS;
  return (
    <View style={fadeNum ? styles.startWrite : styles.stopWrite}>
      {props?.showText ? (
        <View style={{marginLeft: 15,marginTop:5 }}>
          <Text style={{fontSize: 12,marginBottom:platform=='ios' ?10 : 0 }}>{props?.Text}</Text>
        </View>
      ) : null}

      <TextInput
        style={{marginLeft: 15, fontSize: 16, fontFamily: fonts.frutigeregular,}}
        onFocus={() => setFadeNum(true)}
        onEndEditing={() => setFadeNum(false)}
        keyboardType={props?.keyboardType}
        placeholder={props?.placeholderText}
        placeholderTextColor={'#848484'}
        onChangeText={props?.onChange}
        value={props?.value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  startWrite: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
  },
  stopWrite: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
  },
  stopPass: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  startPass: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default TextInputView;
