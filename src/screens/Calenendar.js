import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';

const list = [
  {
    date: '19Aug',
    heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    date: '20Aug',
    heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    date: '21Aug',
    heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    date: '22June',
    heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
];

const Calendar = ({navigation}) => {
  return (
    <SafeAreaView style={{paddingTop: 15, backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 15,
          height: 55,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={()=> RootNavigation.goBack()}
          style={{
            backgroundColor: '#FFF200',
            justifyContent: 'center',
            paddingHorizontal: 10,
            height: 35,
            width: 35,
            position: 'absolute',
            left: 15,
          }}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/backicon.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            
            textAlign: 'center',
            fontFamily: fonts.frutigebold,
          }}>
          Calendar
        </Text>
      </View>
      <View style={{backgroundColor: '#E8E4E4', height: 1}}></View>
      <FlatList
        style={{backgroundColor: 'white', paddingTop: 10}}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F5F5F5',
              marginVertical: 5,
              paddingRight: 10,
            }}>
            <View
              style={{
                backgroundColor: '#E8A23F',
                justifyContent: 'center',
                alignSelf: 'center',
                width: 45,
                height: 45,
                marginLeft: 15,
                
              }}>
              <Text
                style={{
                  fontFamily: fonts.frutigebold,
                  fontSize: 17,
                  alignSelf: 'center',
                }}>
                {item.date.slice(0, 2)}
              </Text>
              <Text
                style={{
                  fontFamily: fonts.frutigebold,
                  alignSelf: 'center',
                  fontSize: 11,
                }}>
                {item.date.slice(2)}
              </Text>
            </View>
            <View style={{marginRight:15,flex:1}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fonts.frutigeregular,
                  textAlignVertical: 'center',
                  paddingVertical: 20,
                  lineHeight:20,
                  marginLeft: 15,
                }}>
                {item.heading}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Calendar;
