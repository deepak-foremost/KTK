import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';

const Climate = ({navigation}) => {
  const [first_name, setFirstName] = useState('deep');
  const [email, setEmail] = useState('ilbev');
  const [phone, setPhone] = useState('vebvl');

  useEffect(() => {
    getToken();
    // getProfile();
  });

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('token--->', token);

    getProfile(token);
  };

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
        setEmail(responseData.email);
        console.log('Phone--->', JSON.stringify(responseData));
        console.log('Mail--->', JSON.stringify(responseData.data?.email));
        console.log('name--->', responseData.data?.phone);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomColor: '#E8E4E4',
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => RootNavigation.goBack()}
          style={{
            backgroundColor: '#FFF200',
            height: 35,
            width: 35,
            justifyContent: 'center',
            position: 'absolute',
            left: 15,
          }}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/backicon.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontFamily: fonts.frutigebold}}>
          Climate Change
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          style={{position: 'absolute', right: 15}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{alignSelf: 'center', width: 35, height: 35}}
            source={require('../appimages/girlimg.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 15}}>
        <Image
          style={{width: '100%', height: 120}}
          source={require('../appimages/newstwo.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 22,
          marginBottom: 15,
          fontFamily: fonts.frutigebold,
          marginLeft: 15,
        }}>
        Climate Change
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: fonts.frutigebold,
          color: '#848484',
          marginHorizontal: 15,
          lineHeight: 18,
        }}>
        SSI has established a small climate change research facility that will
        support research into the effects of climate change on very young
        people. This facility will be overseen by a science advisor (a pediatric
        physician) and will, when fully funded in the new year, begin community
        consultations on the health of very young children and look for ways to
        help them to avoid climate change caused health issues and/or overcome
        them. Community information sessions for parents of very young children
        are planned to start in April of next year.
      </Text>
    </SafeAreaView>
  );
};
export default Climate;
