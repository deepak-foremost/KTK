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
} from 'react-native';
import SignUp from './SignUp';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import call from 'react-native-phone-call';
import TextInputView from '../Component/TextInputView';
import fonts from '../utils/FontUtils';

const ContactUs = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [help, setHelp] = useState('');

  const [showName, setShowName] = useState(false);
  const [showEmail, setshowEmail] = useState(false);
  const [showHlep, setshowHlep] = useState(false);
  const [inputValue, setInputValue] = useState('8675894719');
  const [fadeName, setFadeName] = useState(false);
  const [fadeAdress, setFadeAdress] = useState(false);
  const [fadeHelp, setFadeHelp] = useState(false);

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
    if (name === '') {
      setShowName(false);
    } else {
      setShowName(true);
    }
    if (email === '') {
      setshowEmail(false);
    } else {
      setshowEmail(true);
    }
    if (help === '') {
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
          onPress={() => navigation.navigate('Home')}>
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
        style={{backgroundColor: 'white'}}
        extraScrollHeight={20}
        enableOnAndroid={true}>
        {/* TopView */}
        <View
          style={{
            flex: 0.2,
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
            placeholderText={'Enter Full Name'}
            onChange={i => setName(i)}
            showText={name == '' ? false : true}
            Text={'Full Name'}
          />

          <TextInputView
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
            onPress={() => navigation.navigate('SignUp', {name: 'jane'})}
            style={{
              justifyContent: 'center',
              backgroundColor: '#FFF200',
              height: 55,
              alignSelf: 'center',
              width: '100%',
              marginTop: 20,
            }}>
            <Text style={{alignSelf: 'center',fontFamily:fonts.frutigebold}}>Submit</Text>
          </TouchableOpacity>

          <View
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
                  'mailto:ssi.ed@sahtu.ca, ssi.aa@sahtu.ca?subject=SendMail&body=Description',
                )
              }>
              ssi.ed@sahtu.ca, ssi.aa@sahtu.ca{' '}
            </Text>
          </View>
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
              onPress={() => triggerCall()}>
              867-589-4719{' '}
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
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/finalfacebook.png')}
          />
          <View style={{alignSelf: 'center', marginHorizontal: 15}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Facebook</Text>
            <Text style={{fontSize: 10, color: '#AAA100'}}>Follow Us</Text>
          </View>

          <Image
            style={{alignSelf: 'center', marginLeft: 20}}
            source={require('../appimages/finaltwitter.png')}
          />
          <View style={{alignSelf: 'center', marginHorizontal: 15}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Twitter</Text>
            <Text style={{fontSize: 10, color: '#AAA100'}}>Follow Us</Text>
          </View>
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
