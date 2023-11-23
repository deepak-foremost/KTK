import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import {getClimateChange} from '../networking/CallApi';
import RenderHTML from 'react-native-render-html';
import {SahtuItem} from './SahtuHeritage';

const Climate = ({navigation}) => {
  const [first_name, setFirstName] = useState('deep');
  const [email, setEmail] = useState('ilbev');
  const [phone, setPhone] = useState('vebvl');
  const [climateData, setClimateDta] = useState([]);
  const [isLoading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getClimateChange(
      {},
      response => {
        setClimateDta(response?.data);
        setloading(false);
      },
      response => {
        console.log(response);
      },
    );
  }, []);
  // useEffect(() => {
  //   getToken();
  //   // getProfile();
  // });

  // const getToken = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   console.log('token--->', token);

  //   getProfile(token);
  // };

  // const getProfile = async token => {
  //   const url = 'https://foremostdigital.dev/adforest/api/getProfile';
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(responseData => {
  //       setEmail(responseData.email);
  //       console.log('Phone--->', JSON.stringify(responseData));
  //       console.log('Mail--->', JSON.stringify(responseData.data?.email));
  //       console.log('name--->', responseData.data?.phone);
  //     });
  // };

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
        {/* <TouchableOpacity
          activeOpacity={1}
          style={{position: 'absolute', right: 15}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{alignSelf: 'center', width: 35, height: 35}}
            source={require('../appimages/girlimg.png')}
          />
        </TouchableOpacity> */}
      </View>

      {isLoading && (
        <View>
          <SahtuItem />
          <SahtuItem />
        </View>
      )}

      <ScrollView>
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 15}}>
          <Image
            style={{width: '100%', height: 120}}
            source={{uri: climateData.image}}
          />
        </View>
        <Text
          style={{
            fontSize: 22,
            marginBottom: 15,
            fontFamily: fonts.frutigebold,
            marginLeft: 15,
          }}>
          {climateData.title}
        </Text>
        {/* <Text
        style={{
          fontSize: 12,
          fontFamily: fonts.frutigebold,
          color: '#848484',
          marginHorizontal: 15,
          lineHeight: 18,
        }}>
        {climateData.description}
      </Text> */}
        <RenderHTML
          source={{html: climateData.description}}
          contentWidth={Dimensions.get('window').width}
          tagsStyles={{body: {marginHorizontal: 15, color: '#848484'}}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Climate;
