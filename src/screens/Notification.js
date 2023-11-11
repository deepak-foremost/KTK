import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  SectionList,
  ScrollView,
} from 'react-native';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';

const list = [
  {
    id: 0,
    title: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    id: 1,
    title: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    id: 2,
    title: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    id: 3,
    title: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    id: 4,
    title: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
];

const Notification = ({navigation}) => {
  const [show, setShow] = useState(true);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          height: 55,
          alignItems: 'center',
          paddingHorizontal: 15,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: '#FFF200',
            justifyContent: 'center',
            height: 35,
            width: 35,
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
            flex: 1,
            textAlign: 'center',
            fontFamily: fonts.frutigebold,
            marginVertical: 10,
          }}>
          Notificactions
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>

      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 15,
              paddingHorizontal: 15,
              backgroundColor: '#F5F5F5',
              paddingVertical: 15,
            }}>
            <Image
              style={{
                alignSelf: 'center',
                alignSelf: 'center',
                height:45,
                width:45
              }}
              source={require('../appimages/yellownotify.png')}
            />
            <View style={{flex:1,marginLeft:10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fonts.frutigeregular,
                  lineHeight:20
                }}>
                {item.title}
              </Text>
            </View>
          </View>
        )}
      />
     
    </SafeAreaView>
  );
};
export default Notification;
