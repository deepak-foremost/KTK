import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

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
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View>
        <Text>first Name</Text>
        <Text>{first_name}</Text>
      </View>
      <View>
        <Text>Email</Text>
        <Text>{email}</Text>
      </View>
      <View>
        <Text>phone_number</Text>
        <Text>{phone}</Text>
      </View>

      <Text> </Text>
    </SafeAreaView>
  );
};
export default Climate;
