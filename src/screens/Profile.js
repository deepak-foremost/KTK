import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import eyeOpen from '../appimages/eyeopen.png';
import eyeclosed from '../appimages/eye.png';
import TextInputView from '../Component/TextInputView';
import PasswordView from '../Component/PasswordView';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import Constants from '../utils/Constants';

const Profile = ({navigation}) => {
  const [start, setStart] = useState(false);
  const [visible, setVisibile] = useState(false);

  const [last_name, setLastName] = useState('');
  const [gender, setGender] = useState('male');
  const [dob, setDob] = useState('');

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [gen, setGen] = useState('');
  const [date, setDate] = useState('');

  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [showName, setShowName] = useState(false);
  const [showPhone, setshowPhone] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [showEmail, setshowEmail] = useState(false);

  const [fadeName, setFadeName] = useState(false);
  const [fadeNum, setFadeNum] = useState(false);
  const [fadePass, setFadePass] = useState(false);
  const [fadeEmail, setFadeEmail] = useState(false);

  const [dot, setDot] = useState('');

  const [eye, setEye] = useState(false);

  const getProfile = async token => {
    const url = 'https://foremostdigital.dev/adforest/api/getProfile';
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(responseData => {
        setFirst(responseData.data.first_name);
        setLast(responseData.data.last_name);
        setGen(responseData.data.gender);
        setDate(responseData.data.dob);
        console.log('Phone--->', JSON.stringify(responseData));
        console.log('Mail--->', JSON.stringify(responseData.data?.email));
        console.log('name--->', responseData.data?.phone);
      });
  };

  const myToken = async () => {
    const token = await AsyncStorage.getItem('token');
    Update(token);
  };

  const UpdateToken = async () => {
    const token = await AsyncStorage.getItem('token');
    getProfile(token);
  };

  // useEffect(() => {
  //   UpdateToken();
  // }, []);

  useEffect(() => {
    if (password === '') {
      setshowPassword(false);
    } else {
      setshowPassword(true);
    }
    if (first_name === '') {
      setShowName(false);
    } else {
      setShowName(true);
    }
    if (email === '') {
      setshowEmail(false);
    } else {
      setshowEmail(true);
    }
    if (phone === '') {
      setshowPhone(false);
    } else {
      setshowPhone(true);
    }
  });

  const Update = token => {
    const params = {
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      dob: dob,
    };

    console.log('params------>', params);

    const url = 'https://foremostdigital.dev/adforest/api/updateProfile';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        dob: dob,
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('UpdateStatus ---->', responseData);

        // if (responseData.status) {
        //   console.log('save------>', responseData.status);
        //   SaveToken(responseData.token);
        // } else {
        //   console.log('error', responseData.message);
        // }
      });
  };

  const LogOut = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('LogIn');
  };

  const passVisible = () => {
    if (eye) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Modal visible={visible} animationType="fade" transparent={true}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setVisibile(false)}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 5,
              height: 205,
              width: '75%',
              borderRadius: 15,
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 0},
              shadowRadius: 15,
              shadowOpacity: 0.5,
              elevation: 10,
            }}>
            <Image
              style={{
                height: 50,
                width: 50,
                tintColor: '#FFF200',
                alignSelf: 'center',
                marginTop: 10,
              }}
              source={require('../appimages/warning.png')}
            />
            <Text
              style={{
                paddingHorizontal: 15,
                marginVertical: 10,
                fontSize: 16,
                color: 'black',
                fontFamily: fonts.frutigeregular,
                color: 'black',
                alignSelf: 'center',
              }}>
              Are you leaving?
            </Text>
            <Text
              style={{
                paddingHorizontal: 15,
                fontSize: 12,
                color: '#848484',
                fontFamily: fonts.frutigeregular,
                textAlign: 'center',
                alignSelf: 'center',
                lineHeight: 15,
              }}>
              Are you sure you want to log out of your account?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                alignSelf: 'flex-end',
                marginRight: -30,
                marginTop: 15,
              }}>
              <Text
                onPress={() => setVisibile(false)}
                style={{
                  alignSelf: 'center',
                  padding: 8,
                  marginRight: 20,
                  color: '#848484',
                  fontFamily: fonts.frutigeregular,
                  fontSize: 16,
                }}>
                Cancel
              </Text>

              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: '#FFF200',
                  justifyContent: 'center',
                  borderRadius: 8,
                  paddingHorizontal: 15,
                  shadowColor: 'black',
                  shadowOpacity: 0.5,
                  shadowRadius: 15,
                  shadowOffset: {height: 5, width: 0},
                  elevation: 8,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: fonts.frutigebold,
                    alignSelf: 'center',
                    textAlignVertical: 'center',
                  }}>
                  Yes →
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      {/* Toolbar view  */}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 15,
          height: 55,
          backgroundColor: 'white',
          borderBottomColor: '#E8E4E4',
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setVisibile(true)}
          style={{
            backgroundColor: '#FC5858',
            padding: 5,
            position: 'absolute',
            left: 15,
          }}>
          <Text style={{fontSize: 12, color: 'white', opacity: 1}}>
            Log Out
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontFamily: fonts.frutigebold}}>
          Profile
        </Text>

        <TouchableOpacity
          activeOpacity={1}
          style={{position: 'absolute', right: 15}}
          onPress={() =>
            RootNavigation.navigate(Constants.NOTIFICATION_SCREEN)
          }>
          <Image source={require('../appimages/finalnotification.png')} />
        </TouchableOpacity>
      </View>

      {/* TopView */}

      <KeyboardAwareScrollView
        style={{backgroundColor: 'white'}}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={30}>
        <View
          style={{justifyContent: 'center', flex: 0.5, paddingVertical: 25}}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/girlprofile.png')}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.frutigebold,
              alignSelf: 'center',
              marginTop: 15,
            }}>
            Ariella Bradley
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#AAA100',
              alignSelf: 'center',
              marginTop: 10,
              fontFamily: fonts.frutigeregular,
            }}>
            Upload Photo
          </Text>
        </View>

        {/* BottomView */}
        <View style={{paddingHorizontal: 15, flex: 1, paddingBottom: 40}}>
          <TextInputView
            placeholderText={'Enter Full Name'}
            onChange={i => setFirstName(i)}
            showText={first_name == '' ? false : true}
            Text={'Full Name'}
          />

          <TextInputView
            placeholderText={'Email Address'}
            onChange={i => setEmail(i)}
            showText={email == '' ? false : true}
            Text={'Email Address'}
          />

          <PasswordView
            placeholderText={'Password'}
            Text={'Password'}
            onChange={i => setPassword(i)}
            showText={password == '' ? false : true}
          />

          <TextInputView
            placeholderText={'Phone Number '}
            onChange={i => setPhone(i)}
            showText={phone == '' ? false : true}
            Text={'Phone Number'}
            keyboardType={'numeric'}
          />

          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: '#FFF200',
              justifyContent: 'center',
              height: 60,
              marginTop: 20,
            }}
            onPress={() => {
              myToken();
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.frutigebold,
                alignSelf: 'center',
              }}>
              Update
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: '#FC4545',
              fontSize: 14,
              marginTop: 15,
              alignSelf: 'center',
              fontFamily: fonts.frutigeregular,
            }}>
            DELETE ACCOUNT
          </Text>
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
    borderColor: '#A8A8A8',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
export default Profile;
