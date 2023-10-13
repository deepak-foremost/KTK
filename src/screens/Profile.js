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
    <SafeAreaView
      style={{paddingHorizontal: 15, flex: 1, backgroundColor: 'black'}}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{backgroundColor: 'yellow', padding: 5}}>
            <Text style={{padding: 15, fontSize: 16}}>
              Are you sure you want to Log Out ?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                alignSelf: 'flex-end',
              }}>
              <Button
                title="yes"
                color={'black'}
                onPress={() => {
                  LogOut();
                }}
              />
              <Button
                title="No"
                color={'black'}
                onPress={() => setVisibile(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* Toolbar view  */}

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingVertical: 25,
          backgroundColor: 'white',
        }}>
        <View style={{backgroundColor: '#FC5858', padding: 5}}>
          <Text
            style={{fontSize: 12, color: 'white'}}
            onPress={() => {
              setVisibile(true);
              // LogOut();
            }}>
            Log Out
          </Text>
        </View>
        <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
          Profile
        </Text>
        <Image source={require('../appimages/finalnotification.png')} />
      </View>
      <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>

      {/* TopView */}

      <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
        <View
          style={{justifyContent: 'center', flex: 0.5, paddingVertical: 25}}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/girlprofile.png')}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Bold',
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
              fontFamily: 'Poppins-Medium',
            }}>
            Upload Photo
          </Text>
        </View>

        {/* BottomView */}
        <View style={{paddingHorizontal: 15, flex: 1, paddingBottom: 40}}>
          <View style={fadeName ? styles.startWrite : styles.stopWrite}>
            {showName ? (
              <View style={{marginLeft: 15, marginBottom: 5}}>
                <Text style={{fontSize: 12}}>Full Name</Text>
              </View>
            ) : null}

            <TextInput
              style={{
                marginLeft: 15,
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
              }}
              onTouchStart={() => setFadeName(true)}
              onEndEditing={() => setFadeName(false)}
              placeholder="Enter full name"
              placeholderTextColor={'#848484'}
              onChangeText={text => setFirstName(text)}
            />
          </View>

          <View style={fadeEmail ? styles.startWrite : styles.stopWrite}>
            {showEmail ? (
              <View style={{marginLeft: 15, marginBottom: 5}}>
                <Text style={{fontSize: 12}}>Email Address</Text>
              </View>
            ) : null}

            <TextInput
              style={{
                marginLeft: 15,
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
              }}
              onTouchStart={() => setFadeEmail(true)}
              onEndEditing={() => setFadeEmail(false)}
              placeholder="Email Address"
              placeholderTextColor={'#848484'}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={fadePass ? styles.startPass : styles.stopPass}>
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
                onTouchStart={() => setFadePass(true)}
                onEndEditing={() => setFadePass(false)}
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

          <View style={fadeNum ? styles.startWrite : styles.stopWrite}>
            {showPhone ? (
              <View style={{marginLeft: 15, marginBottom: 5}}>
                <Text style={{fontSize: 12}}>Phone Number</Text>
              </View>
            ) : null}

            <TextInput
              style={{
                marginLeft: 15,
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
              }}
              onTouchStart={() => setFadeNum(true)}
              onEndEditing={() => setFadeNum(false)}
              placeholder="Phone Number "
              placeholderTextColor={'#848484'}
              onChangeText={text => setPhone(text)}
            />
          </View>

          <TouchableOpacity
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
                fontFamily: 'Poppins-Medium',
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
              fontFamily: 'Poppins-Medium',
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
  }, stopPass: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
    flexDirection:'row'
  },startPass: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
    flexDirection:'row'
  },
});
export default Profile;
