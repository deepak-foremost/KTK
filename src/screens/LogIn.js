import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {create} from 'react-test-renderer';
import eyeOpen from '../appimages/eyeopen.png';
import eyeclosed from '../appimages/eye.png';

const LogIn = ({navigation}) => {
  const  windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [showMail, setShowMail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [startWrite, setStartWrite] = useState(false);
  const [startPass, setStartPass] = useState(false);

  const [eye, setEye] = useState(false);

  const logIn = async () => {
    const url = 'https://foremostdigital.dev/adforest/api/login';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })
      .then(response => response.json())
      .then(responseData => {
        if (responseData.status) {
          storeToken(responseData.token);
        } else {
          console.warn('error');
        }

        console.log('status ---->', responseData.status);
        console.log('token------->', responseData.token);
      });
  };

  const logInApi = () => {
    fetch('https://foremostdigital.dev/adforest/api/getCategories', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTE2ZmU3ZDU4NzFkYzZiYTU2ZmViM2JlNTNiOTAwNjY4YTdlZjllYjAzOTljZGU4NzMwYTI5ZmFkZGE1NmZmZGQzODQ5MThlN2NjOGU3NzQiLCJpYXQiOjE2OTM4MjA3OTQuMzAwMTgwOTEyMDE3ODIyMjY1NjI1LCJuYmYiOjE2OTM4MjA3OTQuMzAwMTg0OTY1MTMzNjY2OTkyMTg3NSwiZXhwIjoxNjk2NDEyNzk0LjI5NTQ0OTk3MjE1MjcwOTk2MDkzNzUsInN1YiI6Ijc3Iiwic2NvcGVzIjpbXX0.F6my6iPu1SmpKG6KX0fOC-vhbMJ5O48kQM6M8SJqOLGX380ZXLkOd-MLZ4JydculP_oxaeUJAoUMSeW9cB2qJ0tOtfo86Be4W1jMygC-yZFZ1QVKjsdDoTdC9k3TW_uuy7A9CNtmnz8MkfLE3SF5vMLbT4dn_gX95Jj-FZqznRyXTGqVlwcdE9xpoLM3r8ftFY9RtXm_Vj4xIYcU0zEBhKkyrzC9xUQAhPTa025H8cMLkhANSP2I7w7-BfnYQPnJgDMdRuk5cr4FI1u88p_5rnRhiVzaA3KpigVO1ep-FuyMc2T9PffzNu937Iz9kEcIcZe3ISqgiKxRgFngL5-YUoyIxaZz0IEo_zCqVzq0vDrLYBq0nzzqTXWyvcfH7VHEzsRt9v9-ptGHoSWmBJs6cbb_k8AlWvM4HvRcmB7N_TS3M7XDSYp70L2X5G6WwM3WEsmLXzU78kHbpQP1v8iEslB2qgAxKyaXz6_CPjfgl7DWWtc7ESuGv3vmi7FL4NpZKuVRHj6Mb5gMiPwITBL03BUkqcbLPbkadh-N5bs95GfGR_xdfvzPwrC6qctKsztBvWE-9khPkfcSxA_0gf5vixmkmJVn0JrF2X-C5-dllYKgdD3lG13hmwbJ3oqm7WrSycxrGUwhnlKWMuLbmh1fSFnZScr4yoWi76PhWqAdUlY'}`,
      },
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('hghg', JSON.stringify(responseData));
        showMessage({
          message: JSON.stringify(responseData)?.message,
          type: 'info',
        });
      })
      .catch(error => console.error('erroreesf', error));
  };

  let data = {
    mail: email,
    pswd: password,
  };

  const storeToken = async token => {
    try {
      await AsyncStorage.setItem('token', token);
      const value = AsyncStorage.getItem('token');
      if (value != null) {
        navigation.navigate('Home');
      } else {
        console.warn('error');
      }
    } catch (error) {
      // Error saving data
    }
  };

  const fetchData = async () => {
    try {
      const JsonValue = await AsyncStorage.getItem('auth');
      const myAuth = JSON.parse(JsonValue);
      if ((myAuth.mail === email) & (myAuth.pswd === password)) {
        navigation.navigate('Home');
      } else if (myAuth.mail != email) {
        console.warn('inncorrect email');
      } else if (myAuth.pswd != password) {
        console.warn('inncorrect password');
      } else {
        console.warn('inncorrect Details');
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (password === '') {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
    if (email === '') {
      setShowMail(false);
    } else {
      setShowMail(true);
    }
  });

  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.replace('Information')}
            style={{
              backgroundColor: '#FFF200',
              height: 40,
              width: 40,
              marginTop: 10,
              marginVertical: 10,

              justifyContent: 'center',
              marginLeft: 15,
            }}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../appimages/backicon.png')}
            />
          </TouchableOpacity>

          {/* Top view */}

          <View
            style={{
              justifyContent: 'center',

              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Poppins-SemiBold',
                alignSelf: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                alignItems: 'center',
              }}>
              Hello Again !
            </Text>

            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                marginTop: 7,
                color: '#848484',
                fontFamily: 'Poppins-Regular',
              }}>
              Sign into your account
            </Text>
          </View>

          {/* CentreView */}
          <View style={{paddingTop: 15,paddingBottom:35}}>
            {/* Email View */}
            <View style={startWrite ? styles.startWrite : styles.stopWrite}>
              {showMail ? (
                <View style={{marginLeft: 15, marginBottom: 5}}>
                  <Text style={{fontSize: 12}}>Email address</Text>
                </View>
              ) : null}

              <TextInput
                onChangeText={i => setEmail(i)}
                onTouchStart={() => setStartWrite(true)}
                onEndEditing={() => setStartWrite(false)}
                // onTouchEnd={setStartWrite(false)}
                placeholderTextColor={'#848484'}
                style={{
                  marginLeft: 15,
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                }}
                placeholder="Enter Email address"
              />
            </View>

            {/* Password View */}
            <View style={startPass ? styles.startPass : styles.stopPass}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                {showPassword ? (
                  <View style={{marginLeft: 15, marginBottom: 5}}>
                    <Text style={{fontSize: 12}}>Password</Text>
                  </View>
                ) : null}

                <TextInput
                  style={{
                    marginLeft: 15,
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                  }}
                  secureTextEntry={eye ? false : true}
                  onTouchStart={() => setStartPass(true)}
                  onEndEditing={() => setStartPass(false)}
                  placeholder="Password"
                  placeholderTextColor={'#848484'}
                  onChangeText={text => setPassword(text)}
                  value={password}
                />
              </View>
              <Image
                style={{alignSelf: 'center', marginHorizontal: 20}}
                onStartShouldSetResponder={() => setEye(!eye)}
                source={eye ? eyeOpen : eyeclosed}
              />
            </View>

            <Text
              style={{
                fontSize: 12,
                marginTop: 15,
                color: 'black',
                marginLeft: 15,
                fontFamily: 'Poppins-Regular',
              }}
              onPress={() => fetchData()}>
              Forgot your password?
            </Text>

            <View style={{marginTop: 30}}>
              <TouchableOpacity
                onPress={() => {
                  logIn();
                }}
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#FFF200',
                  height: 55,
                  alignSelf: 'center',
                  width: windowWidth - 30,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                onStartShouldSetResponder={() => navigation.navigate('SignUp')}>
                <Text style={{color: '#707070', fontSize: 12}}>
                  Dont have an account ?{' '}
                  {
                    <Text
                      style={{
                        color: '#AAA100',
                        fontSize: 12,
                        fontFamily: 'Poppins-Bold',
                        marginLeft: 5,
                      }}>
                      Sign Up
                    </Text>
                  }
                </Text>
                {/* <Text
                  style={{
                    color: '#AAA100',
                    fontSize: 12,
                    fontFamily: 'Poppins-Bold',
                    marginLeft: 5,
                  }}>
                  Sign Up
                </Text> */}
              </View>
            </View>
          </View>

          {/* BottomView */}
          <View
            style={{
              paddingVertical: 15,
              width: windowWidth,

              backgroundColor: '#F5F5F5',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#848484',
                alignSelf: 'center',
                fontFamily: 'Poppins-Regular',
              }}>
              Sign in with a social account
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#FF7144',
                height: 58,
                backgroundColor: '#FFE3E3',
                marginLeft: 25,
                marginRight: 25,
                marginTop: 20,
              }}>
              <Image
                style={{alignSelf: 'center', marginHorizontal: 10}}
                source={require('../appimages/finalgoogle.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Medium',
                  alignSelf: 'center',
                }}>
                Sign in with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#879BFF',
                height: 58,
                backgroundColor: '#E4E8FF',
                marginLeft: 25,
                marginRight: 25,
                marginTop: 20,
              }}>
              <Image
                style={{alignSelf: 'center', marginHorizontal: 10}}
                source={require('../appimages/finalfblogo.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Medium',
                  alignSelf: 'center',
                }}>
                Sign in with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{backgroundColor: 'white'}}>
          <View style={{justifyContent: 'center'}}></View>
        </View> */}
      </ScrollView>
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

export default LogIn;
