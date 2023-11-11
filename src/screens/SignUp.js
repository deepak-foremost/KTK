import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputView from '../Component/TextInputView';
import PasswordView from '../Component/PasswordView';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import Constants from '../utils/Constants';

const SignUp = ({navigation}) => {
  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const Register = async () => {
    const url = 'https://foremostdigital.dev/adforest/api/register1';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({first_name, phone, password, email}),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('status ---->', responseData.status);
        console.log('token------->', responseData.token);

        if (responseData.status) {
          console.log('save------>', responseData.status);
          SaveToken(responseData.token);
        } else {
          console.log('error', responseData.message);
        }
      })

      //  .then(responseData => {
      //    console.log('message', JSON.stringify(responseData.token));
      //    let getToken=responseData.token;
      //    setToken(getToken);
      //  })
      //  .then(responseData => {
      //   console.log( 'token',JSON.stringify(responseData) )
      //  })
      .catch(error => console.error('erroreesf', error));
  };

  const SaveToken = async token => {
    console.log('data store');
    console.log('token---123', token);
    await AsyncStorage.setItem('token', token);

    try {
      const value = await AsyncStorage.getItem('token');
      if (value != undefined && value != null) {
        console.log('enter to navigate------>');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('enter to catch------>');

      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <KeyboardAwareScrollView
        style={{backgroundColor: 'white'}}
        keyboardShouldPersistTaps={'handled'}
        extraScrollHeight={50}
        showsVerticalScrollIndicator={false}>
        {/* TopView */}
        <View style={{flex: 0.8, justifyContent: 'center', paddingTop: 20}}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              alignSelf: 'center',
              fontFamily: fonts.frutigebold,
            }}>
            Create Account
          </Text>
          <Image
            style={{alignSelf: 'center', marginTop: 15}}
            source={require('../appimages/girlprofile.png')}
          />
          <Text
            style={{
              fontSize: 12,
              color: '#AAA100',
              alignSelf: 'center',
              marginTop: 10,
              fontFamily: fonts.frutigeregular,
            }}>
            Upload Image
          </Text>
        </View>

        {/* CemtreView */}

        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: 15,
            flex: 1,
            paddingVertical: 20,
          }}>
          <TextInputView
            placeholderText={'Enter Full Name'}
            onChange={i => setFirstName(i)}
            showText={first_name == '' ? false : true}
            Text={'Full Name'}
          />

          <TextInputView
            placeholderText={'Phone Number'}
            onChange={i => setPhone(i)}
            showText={phone == '' ? false : true}
            Text={'Phone Number'}
            keyboardType={'numeric'}
          />

          <PasswordView
            placeholderText={'Password'}
            Text={'Password'}
            onChange={i => setPassword(i)}
            showText={password == '' ? false : true}
          />

          <TextInputView
            placeholderText={'Email Address'}
            onChange={i => setEmail(i)}
            showText={email == '' ? false : true}
            Text={'Email Address'}
          />
        </View>

        {/* bottomView */}

        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            paddingBottom: 25,
            paddingHorizontal: 15,
            paddingTop: 10,
            backgroundColor: '#F5F5F5',
          }}>
          <Text
            style={{
              color: '#848484',
              fontSize: 13,
              alignSelf: 'center',
              fontFamily: fonts.frutigeregular,
              lineHeight: 18,
            }}>
            {' '}
            By Creating your account or logging in, You {'\n'}
            agree to our{' '}
            {
              <Text style={{fontSize: 12, fontFamily: fonts.frutigebold}}>
                Terms Of Service
              </Text>
            }{' '}
            and{' '}
            {
              <Text style={{fontSize: 12, fontFamily: fonts.frutigebold}}>
                Privacy Policy{' '}
              </Text>
            }
          </Text>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              RootNavigation.navigate(Constants.HOME_SCREEN);
            }}
            style={{
              backgroundColor: '#FFF200',
              height: 50,

              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontFamily: fonts.frutigebold,
                fontSize: 14,
              }}>
              Registration
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => RootNavigation.navigate(Constants.LOGIN_SCREEN)}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 15,
                alignSelf: 'center',
                fontFamily: fonts.frutigeregular,
              }}>
              Already have an account?{' '}
              {
                <Text style={{fontFamily: fonts.frutigebold, color: '#AAA100'}}>
                  Sign in
                </Text>
              }
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
export default SignUp;
