import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native';

const BreakingDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 15,
            paddingVertical: 20,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFF200',
              justifyContent: 'center',
              height: 40,
              width: 40,
            }}
            onPress={() => navigation.navigate('BreakingNews')}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../appimages/backicon.png')}
            />
          </TouchableOpacity>

          <View style={{flex: 1,justifyContent:'center'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                
                alignSelf: 'center',
              }}>
              Breaking news detail
            </Text>
          </View>
        </View>

        <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>

        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 15,
            justifyContent: 'center',
            

            backgroundColor: 'white',
          }}>
          <View style={{flex: 1}}>
            {/* TopView
             */}
            <View style={{flex:0.2}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent:'flex-start',
                  marginTop:15
                 
                }}>
                <Image style={{alignSelf:'center'}} source={require('../appimages/clock.png')} />
                <Text
                  style={{
                    fontSize: 12,
                    color: '#848484',
                    marginLeft: 10,
                    fontFamily: 'Poppins-Regular',
                    alignSelf:'center'
                  }}>
                  25 Aug 08 Am
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                 marginVertical:20,
                  fontFamily: 'Poppins-Bold',
                }}
                numberOfLines={2}>
                November 29-30 & December 01 2021 in Deline NT and virtually via
                Zoom PDF Documents available To download please select below:
              </Text>
            </View>

            {/* ImageView  */}
            <View style={{flex:0.5}}>
              <Image
                style={{
                  width: '100%',
                  height:210,
                  
                  alignSelf: 'center',
                  backgroundColor: 'green',
                }}
                source={require('../appimages/newstwo.png')}
              />
            </View>

            {/* Bottom View  */}
            <View style={{flex:0.6}}>
              <Text
                style={{
                  textAlign: 'justify',
                  lineHeight: 20,
                  marginTop: 20,
                  color: '#848484',
                  fontFamily: 'Poppins-Regular',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit,{'\n\n'} sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Cursus vitae congue
                mauris rhoncus aenean vel. Lacus vel facilisis volutpat est
                velit egestas dui id ornare. Aenean vel elit scelerisque mauris.
                Ullamcorper a lacus vestibulum sed arcu non odio euismod.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default BreakingDetail;
