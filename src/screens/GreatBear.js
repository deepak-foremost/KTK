import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import Toolbar from '../Component/Toolbar';
import fonts from '../utils/FontUtils';

const GreatBear = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Toolbar text={'Great Bear River Bridge'} 
      onPress={()=> navigation.goBack()}/>

      <ScrollView
       showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          justifyContent: 'center',

          backgroundColor: 'white',
        }}>
        <View style={{flex: 1}}>
          {/* TopView
           */}
          <View style={{flex: 0.2}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 15,
              }}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../appimages/clock.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#848484',
                  marginLeft: 10,
                  fontFamily: fonts.frutigeregular,
                  alignSelf: 'center',
                }}>
                25 Aug 08 AM
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontFamily: fonts.frutigebold,
              }}
              numberOfLines={2}>
              November 29-30 & December 01 2021 in Deline NT and virtually via
              Zoom PDF Documents available To download please select below:
            </Text>
          </View>

          {/* ImageView  */}
          <View style={{flex: 0.5}}>
            <Image
              style={{
                width: '100%',
                height: 210,

                alignSelf: 'center',
                backgroundColor: 'green',
              }}
              source={require('../appimages/newstwo.png')}
            />
          </View>

          {/* Bottom View  */}
          <View style={{flex: 0.6}}>
            <Text
              style={{
                textAlign: 'justify',
                lineHeight: 20,
                marginTop: 20,
                color: '#848484',
                fontFamily: fonts.frutigeregular,
                fontSize:14
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit,{'\n'}sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Cursus vitae congue
              mauris rhoncus aenean vel. Lacus vel facilisis volutpat est velit
              egestas dui id ornare.{'\n'}Aenean vel elit scelerisque mauris.
              Ullamcorper a lacus vestibulum sed arcu non odio euismod.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GreatBear;
