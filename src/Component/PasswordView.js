import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import eyeOpen from '../appimages/eyeopen.png';
import eyeclosed from '../appimages/eye.png';
import fonts from '../utils/FontUtils';

const PasswordView = props => {
  const [fadePass, setFadePass] = useState(false);
  const [eye, setEye] = useState(false);

  return (
    <View style={fadePass ? styles.startPass : styles.stopPass}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {props?.showText ? (
          <View style={{marginLeft: 15, marginTop: 5}}>
            <Text style={{fontSize: 12}}>{props?.Text}</Text>
          </View>
        ) : null}

        <TextInput
          style={{
            marginLeft: 15,
            fontSize: 16,
            fontFamily: fonts.frutigeregular,
            
          }}
          secureTextEntry={eye ? false : true}
          onFocus={() => setFadePass(true)}
          onEndEditing={() => setFadePass(false)}
          placeholder={props?.placeholderText}
          placeholderTextColor={'#848484'}
          onChangeText={props?.onChange}
        />
      </View>
      <TouchableOpacity activeOpacity={1} style={{justifyContent:'center'}}
      onPress={()=> setEye(!eye)}>
        <Image
          style={{alignSelf: 'center', marginHorizontal: 20}}
          source={eye ? eyeOpen : eyeclosed}
        />
      </TouchableOpacity>
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

export default PasswordView;
