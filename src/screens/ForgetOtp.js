import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import fonts from '../utils/FontUtils';
import TextInputView from '../Component/TextInputView';
import HomeButtons from '../Component/HomeButtons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgetOtp = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: 55}}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: '#FFF200',
            height: 35,
            width: 35,
            marginTop: 10,
            justifyContent: 'center',
            marginLeft: 15,
          }} onPress={()=> navigation.goBack()}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/backicon.png')}
          />
        </TouchableOpacity>
      </View>

      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: fonts.frutigebold,
            marginLeft: 15,
            marginTop: 15,
          }}>
          Forgot Password
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.frutigeregular,
            marginLeft: 15,
            marginTop: 8,
            color: '#848484',
          }}>
          Enter the recovery code you received
        </Text>

        <View
          style={{
            flex: 1,

            justifyContent: 'space-between',
            marginTop: 50,
            paddingHorizontal: 15,
            paddingVertical: 30,
          }}>
          <OTPInputView
            style={{
              width: '75%',
              alignSelf: 'center',
              height: 50,
            }}
            pinCount={4}
            color={'black'}
            placeholderTextColor={'#000000'}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is , you are good to go!`);
            }}
          />

         

          <HomeButtons
            text={'Set New Password'}
            onPress={()=> navigation.navigate('NewPassword')}
            style={{backgroundColor: '#FFF200'}}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 50,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 3,
    color:'black',
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
  },

  underlineStyleHighLighted: {
    borderColor: '#FFF200',
    color: 'black',
  },
});

export default ForgetOtp;
