import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import fonts from '../utils/FontUtils';

const BreakingDetail = ({navigation, route}) => {
  const item = route.params.item;
  // console.warn(route.params.item.heading)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 15,
            height: 55,
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: '#FFF200',
              justifyContent: 'center',
              height: 35,
              width: 35,
              position: 'absolute',
              left: 15,
            }}
            onPress={() => navigation.goBack()}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../appimages/backicon.png')}
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: fonts.frutigebold,
                fontSize: 18,
                alignSelf: 'center',
              }}>
              Breaking News Detail
            </Text>
          </View>
        </View>

        <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>

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
                {item.heading}
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
                source={item.src}
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
                }}>
                {item.details}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default BreakingDetail;
