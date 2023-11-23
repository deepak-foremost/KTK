import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  windowWidth,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  Linking,
  Platform,
  ToastAndroid,
} from 'react-native';
import SignUp from './SignUp';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import call from 'react-native-phone-call';
import TextInputView from '../Component/TextInputView';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import Constants from '../utils/Constants';
import {showMessage} from 'react-native-flash-message';
import {postHelp} from '../networking/CallApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-spinkit';

const ContactUs = ({navigation}) => {
  const [full_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setHelp] = useState('');
  const [bounce, setBounce] = useState(false);

  const [showName, setShowName] = useState(false);
  const [showEmail, setshowEmail] = useState(false);
  const [showHlep, setshowHlep] = useState(false);
  const [inputValue, setInputValue] = useState('8675894719');
  const [fadeName, setFadeName] = useState(false);
  const [fadeAdress, setFadeAdress] = useState(false);
  const [fadeHelp, setFadeHelp] = useState(false);
  const [msgDescription, setMsgDescription] = useState('');
  const [msgTitle, setMsgTitle] = useState('');

  const [setting, setSetting] = useState(null);
  useEffect(async () => {
    let settings = await AsyncStorage.getItem(`getSetting`);
    setSetting(JSON.parse(settings));
  }, []);

  const data = {
    full_name: full_name,
    email: email,
    description: description,
  };

  const Register = async () => {
    const url = 'https://fdstaging.com/sahtu/api/v1/addContactUs';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({full_name, email, description}),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('status ---->', responseData.data);
        // console.log('token------->', responseData.data);

        if (responseData.status) {
          console.log('save------>', responseData.status);
          // SaveToken(responseData.token);
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

  const SubmitHelp = () => {
    if (full_name != '' && email != '' && description != '') {
      setBounce(true);
      postHelp(
        data,
        onSuccess => {
          console.log('helpsent', onSuccess.status);
          if (onSuccess.status == false) {
            // setMsgTitle('Error');
            // setMsgDescription(onSuccess.message);
            showMessage({
              message: 'Error',
              description: onSuccess.message,
              type: 'info',
              duration: 2000,
              backgroundColor: '#FFF200',
              textStyle: {color: 'black', fontStyle: fonts.frutigeregular},
              color: 'black',
              style: {
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              },
              fontFamily: fonts.popinsbold,
            });
            setBounce(false);
            // setEmail('');
            // setHelp('');
            // setName('');
          } else {
            // setMsgTitle('!');
            // setMsgDescription('Your request for help has been sent.');
            showMessage({
              message: 'Help Sent!',
              description: 'Your request for help has been sent.',
              type: 'info',
              duration: 2000,
              backgroundColor: '#FFF200',
              textStyle: {color: 'black', fontStyle: fonts.frutigeregular},
              color: 'black',
              style: {
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              },
              fontFamily: fonts.popinsbold,
            });
            setEmail('');
            setHelp('');
            setName('');
            setBounce(false);
          }
        },
        onFailure => {
          setMsgDescription(onFailure);
        },
      );
    } else {
      if (Platform.OS == 'android') {
        ToastAndroid.show('Please Enter Details', ToastAndroid.SHORT);
      }
    }
  };

  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 10) {
      alert('Please insert correct contact number');
      return;
    }
    const args = {
      number: inputValue,
      prompt: true,
    };
    call(args).catch(console.error);
  };

  useEffect(() => {
    if (full_name === '') {
      setShowName(false);
    } else {
      setShowName(true);
    }
    if (email === '') {
      setshowEmail(false);
    } else {
      setshowEmail(true);
    }
    if (description === '') {
      setshowHlep(false);
    } else {
      setshowHlep(true);
    }
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 15,
          height: 55,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: '#FFF200',
            justifyContent: 'center',
            alignSelf: 'center',
            marginHorizontal: 15,
            position: 'absolute',
            height: 35,
            width: 35,
            left: 0,
          }}
          onPress={() => RootNavigation.goBack()}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/backicon.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,

            fontFamily: fonts.frutigebold,
            marginVertical: 10,
            alignSelf: 'center',
          }}>
          Contact Us
        </Text>
      </View>
      <View style={{backgroundColor: '#E8E4E4', height: 1}}></View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: 'white', flexGrow: 1}}
        extraScrollHeight={20}
        enableOnAndroid={true}>
        {/* TopView */}
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            paddingVertical: 25,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              fontFamily: fonts.frutigebold,
              fontSize: 24,
              alignSelf: 'center',
            }}>
            Need Help?
          </Text>

          <Text
            style={{
              color: '#848484',
              fontSize: 12,
              alignSelf: 'center',
              marginTop: 10,
              lineHeight: 20,
              textAlign: 'center',
              fontFamily: fonts.frutigeregular,
            }}>
            Please contact us by submitting the form below.{'\n'} We will get
            back to you ASAP.
          </Text>
        </View>

        {/* Centre Vie */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 15,
            paddingHorizontal: 15,
          }}>
          <TextInputView
            value={full_name}
            placeholderText={'Enter Full Name'}
            onChange={i => setName(i)}
            showText={full_name == '' ? false : true}
            Text={'Full Name'}
          />

          <TextInputView
            value={email}
            placeholderText={'Email Address'}
            onChange={i => setEmail(i)}
            showText={email == '' ? false : true}
            Text={'Emaill Adress'}
          />

          <View style={fadeHelp ? styles.startHelp : styles.stopHelp}>
            {showHlep ? (
              <View style={{marginLeft: 15, marginTop: 5}}>
                <Text style={{fontSize: 12}}>How can we Help</Text>
              </View>
            ) : null}

            <TextInput
              value={description}
              style={{
                color: 'black',
                height: '80%',
                fontFamily: fonts.frutigeregular,
                padding: 15,
                fontSize: 16,
                textAlignVertical: 'top',
              }}
              onChangeText={text => setHelp(text)}
              onFocus={() => setFadeHelp(true)}
              onEndEditing={() => setFadeHelp(false)}
              placeholder="How can we help?"
              placeholderTextColor={'#848484'}
              multiline={true}
            />
          </View>

          <TouchableOpacity
            activeOpacity={1}
            onPress={
              () => SubmitHelp()
              // Register()
            }
            // onPress={() => RootNavigation.navigate(Constants.SIGNUP_SCREEN)}
            // onPress={()=>   ToastAndroid.show("Submitt", ToastAndroid.SHORT)}
            style={{
              justifyContent: 'center',
              backgroundColor: '#FFF200',
              height: 55,
              alignSelf: 'center',
              width: '100%',
              marginTop: 20,
            }}>
            {!bounce ? (
              <Text
                style={{alignSelf: 'center', fontFamily: fonts.frutigebold}}>
                Submit
              </Text>
            ) : (
              <Spinner
                style={{alignSelf: 'center'}}
                isVisible={true}
                size={50}
                type={'ThreeBounce'}
                color={'black'}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 30,
              alignSelf: 'center',
            }}>
            <Image source={require('../appimages/maillogo.png')} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.frutigeregular,
                marginLeft: 10,
              }}
              onPress={() =>
                Linking.openURL(
                  `mailto:${setting?.data?.emails?.[0]},?subject=SendMail&body=Description`,
                )
              }>
              {`${setting?.data?.emails[0]} ` + ','}
            </Text>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.frutigeregular,
                marginLeft: 10,
              }}
              onPress={() =>
                Linking.openURL(
                  `mailto:${setting?.data?.emails?.[1]},?subject=SendMail&body=Description`,
                )
              }>
              {`${setting?.data?.emails[1]} `}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <Image source={require('../appimages/calllogo.png')} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.frutigeregular,
                marginLeft: 10,
              }}
              onPress={() =>
                Platform.OS == 'ios'
                  ? triggerCall()
                  : Linking.openURL(`tel:${inputValue}`)
              }>
              {`${setting?.data?.phone} `}
            </Text>
          </View>
        </View>

        {/* Bottom View */}
        <View
          style={{
            backgroundColor: '#F8F8F8',
            flexDirection: 'row',
            flex: 0.4,
            justifyContent: 'center',
            paddingVertical: 40,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            activeOpacity={1}
            onPress={() => {
              Linking.openURL(`${setting?.data?.facebook_link}`);
            }}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../appimages/finalfacebook.png')}
            />
            <View style={{alignSelf: 'center', marginHorizontal: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>Facebook</Text>
              <Text style={{fontSize: 10, color: '#AAA100'}}>Follow Us</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row'}}
            activeOpacity={1}
            onPress={() => {
              Linking.openURL(`${setting?.data?.twitter_link}`);
            }}>
            <Image
              style={{alignSelf: 'center', marginLeft: 20}}
              source={require('../appimages/finaltwitter.png')}
            />
            <View style={{alignSelf: 'center', marginHorizontal: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>Twitter</Text>
              <Text style={{fontSize: 10, color: '#AAA100'}}>Follow Us</Text>
            </View>
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
  stopHelp: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    height: 111,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
  },
  startHelp: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
    height: 111,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
  },
});
export default ContactUs;
