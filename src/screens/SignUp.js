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
  Dimensions
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import eyeOpen from '../appimages/eyeopen.png';
import eyeclosed from '../appimages/eye.png';

const SignUp = ({navigation}) => {
  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [showName, setShowName] = useState(false);
  const [showPhone, setshowPhone] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [showEmail, setshowEmail] = useState(false);
  const [fadeName,setFadeName]=useState(false);
  const [fadeNum,setFadeNum]=useState(false);
  const [fadePass,setFadePass]=useState(false);
  const [fadeEmail,setFadeEmail]=useState(false);

  const [eye,setEye]=useState(false);

  //   const show= (text)=>{
  //     setPassword(text);
  //     if(text==null){
  //      setshowPassword(false)
  //     }

  //  }

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
    if (email==="") {
      setshowEmail(false)
    } else {
      setshowEmail(true)
    }
    if (phone==="") {
      setshowPhone(false)
    } else {
      setshowPhone(true)
    }
  });

  return (
   
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      
      <KeyboardAwareScrollView style={{backgroundColor:'white'}}>
      <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
        {/* TopView */}
        <View style={{flex: 0.8, justifyContent: 'center', paddingTop: 20}}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              alignSelf: 'center',
              fontFamily:'Poppins-SemiBold',
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
              fontFamily:'Poppins-Medium'
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
          <View
            style={fadeName ? styles.startWrite :styles.stopWrite}>
              {showName ? (
                <View style={{marginLeft: 15, marginBottom: 5}}>
                  <Text style={{fontSize: 12}}>Full Name</Text>
                </View>
              ) : null}
            
            <TextInput
              style={{marginLeft: 15,fontSize:16,fontFamily:'Poppins-Medium'}}
              onTouchStart={()=>setFadeName(true)}
              onEndEditing={()=>setFadeName(false)}
              placeholder="Enter full name"
              placeholderTextColor={'#848484'}
              onChangeText={text => setFirstName(text)}
            />
          </View>

          <View
            style={fadeNum ? styles.startWrite :styles.stopWrite}>
              {showPhone ? (
                <View style={{marginLeft: 15, marginBottom: 5}}>
                  <Text style={{fontSize: 12}}>Phone Number</Text>
                </View>
              ) : null}
           
            <TextInput
              style={{marginLeft: 15,fontSize:16,fontFamily:'Poppins-Medium'}}
              onTouchStart={()=>setFadeNum(true)}
              onEndEditing={()=>setFadeNum(false)}
              placeholder="Phone Number "
              placeholderTextColor={'#848484'}
              onChangeText={text => setPhone(text)}
            />
          </View>

          <View style={fadePass ? styles.startPass : styles.stopPass}>
            
            <View style={{flex:1,justifyContent:'center'}}>

            {showPassword ? (
                <View style={{marginLeft: 15,marginBottom:5 }}>
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
              style={{alignSelf: 'center', marginHorizontal:20}}
              onStartShouldSetResponder={() => setEye(!eye)}
              source={eye ? eyeOpen : eyeclosed}
            />
           
          </View>

          <View
            style={fadeEmail ? styles.startWrite :styles.stopWrite}>
              {showEmail ? (
                <View style={{marginLeft: 15, marginBottom: 5}}>
                  <Text style={{fontSize: 12}}>Email Address</Text>
                </View>
              ) : null}
           
            <TextInput
              style={{marginLeft: 15,fontSize:16,fontFamily:'Poppins-Medium'}}
              onTouchStart={()=>setFadeEmail(true)}
              onEndEditing={()=>setFadeEmail(false)}
              placeholder="Email Address"
              placeholderTextColor={'#848484'}
              onChangeText={text => setEmail(text)}
            />
          </View>
        </View>

        {/* bottomView */}

        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            paddingBottom:25 ,
            paddingHorizontal:15,
            paddingTop:10,
            backgroundColor: '#F5F5F5',
          }}>
          
          <Text
            style={{
              color: '#848484',
              fontSize: 13,
              alignSelf: 'center',
              fontFamily:'Poppins-Regular'
            }}>
            {' '}
            By Creating your account or logging in, You {'\n'}
            agree to our {<Text style={{fontSize:12,fontFamily:'Poppins-Bold'}}>Terms Of Service</Text>} and {<Text style={{fontSize:12,fontFamily:'Poppins-Bold'}}>Privacy Policy </Text>} 
          </Text>
          
          <TouchableOpacity
            onPress={() => {
              Register();
            }}
            style={{
              backgroundColor: '#FFF200',
              height: 50,

              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text style={{alignSelf: 'center',fontFamily:'Poppins-Medium',fontSize:14}}>Registration</Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('LogIn')}
            style={{fontSize: 12, marginTop: 15, alignSelf: 'center',fontFamily:'Poppins-Regular'}}>
            Already have an account? {<Text style={{fontFamily:'Poppins-SemiBold',color:'#AAA100'}}>Sign in</Text>} 
          </Text>
        </View>
      </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  startWrite: {
    marginTop: 15,
    borderWidth:1,
    borderColor: 'black',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width-25,
    alignSelf: 'center',
  },
  stopWrite: {
    marginTop: 15,
    borderWidth:1,
    borderColor: '#A8A8A8',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width-25,
    alignSelf: 'center',
  }, stopPass: {
    marginTop: 15,
    borderWidth:1,
    borderColor: '#A8A8A8',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width-25,
    alignSelf: 'center',
    flexDirection:'row'
  },startPass: {
    marginTop: 15,
    borderWidth:1,
    borderColor: 'black',
    height: 70,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    width: Dimensions.get('window').width-25,
    alignSelf: 'center',
    flexDirection:'row'
  },
});
export default SignUp;
