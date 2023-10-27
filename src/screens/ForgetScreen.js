import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import fonts from '../utils/FontUtils';
import TextInputView from '../Component/TextInputView';
import HomeButtons from '../Component/HomeButtons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgetScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{height: 55}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#FFF200',
            height: 35,
            width: 35,
            marginTop: 10,

            justifyContent: 'center',
            marginLeft: 15,
          }}>
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
            color:'#848484'
          }}>
          Enter Mobile number to receive recovery code
        </Text>

        <View
          style={{
            flex:1,
            
            justifyContent: 'space-between',
            marginTop: 50,
            paddingHorizontal: 15,
            paddingVertical:30
          }}>
          <TextInputView
            placeholderText={'Mobile Number'}
            onChange={i => setNumber(i)}
            showText={number == '' ? false : true}
            Text={'Mobile Number'}
            keyboardType={'numeric'}
          />

          <HomeButtons
            text={'Get The Code'}
              onPress={() => navigation.navigate('ForgetOtp')}
            style={{backgroundColor: '#FFF200'}}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgetScreen;
