import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import fonts from '../utils/FontUtils';
import TextInputView from '../Component/TextInputView';
import HomeButtons from '../Component/HomeButtons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PasswordView from '../Component/PasswordView';
import * as RootNavigation from '../utils/RootNavigation';
import Constants from '../utils/Constants';

const NewPassword = ({navigation}) => {
  const [Password, setPassword] = useState('');
  const [confrim, setConfirm] = useState('');
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

      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps={'handled'}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: fonts.frutigebold,
            marginLeft: 15,
            marginTop: 15,
          }}>
          New Password
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.frutigeregular,
            marginLeft: 15,
            marginTop: 8,
            color: '#848484',
          }}>
          Enter your new password
        </Text>

        <View
          style={{
            flex: 1,

            justifyContent: 'space-between',
            marginTop: 50,
            paddingHorizontal: 15,
            paddingVertical: 30,
          }}>
          <View>
            <PasswordView
              placeholderText={'New Password'}
              onChange={i => setPassword(i)}
              showText={Password == '' ? false : true}
              Text={'New Password'}
            />

            <PasswordView
              placeholderText={'Confirm Password'}
              onChange={i => setConfirm(i)}
              showText={confrim == '' ? false : true}
              Text={'Confirm Password'}
            />
          </View>

          <HomeButtons
            text={'Confirm'}
            onPress={() => RootNavigation.navigate(Constants.HOME_SCREEN)}
            style={{backgroundColor: '#FFF200'}}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;
