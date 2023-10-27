import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import fonts from '../utils/FontUtils';

const newsList = [
  {
    id: 0,
    heading:
      'November 29-30 & December 01 2021 in Deline NT virtually via Zoom PDF Documents available To download please select below:',
    src: require('../appimages/newsone.png'),
    time: '25 Aug, 8:00 PM',
  },
  {
    id: 1,
    heading:
      'November 29-30 & December 01 2021 in Deline NT virtually via Zoom PDF Documents available To download please select below::',
    src: require('../appimages/newstwo.png'),
    time: '25 Aug, 8:00 PM',
  },
  {
    id: 2,
    heading:
      'November 29-30 & December 01 2021 in Deline NT virtually via Zoom PDF Documents available To download please select below:',
    src: require('../appimages/newsthree.png'),
    time: '25 Aug, 8:00 PM',
  },
];

const BreakingNews = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          justifyContent: 'center',
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.goBack()}
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

        <Text
          style={{
            fontSize: 18,

            alignSelf: 'center',
            fontFamily: fonts.frutigebold,
          }}>
          Breaking News
        </Text>

        <View
          style={{
            position: 'absolute',
            right: 0,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          activeOpacity={1}
            style={{justifyContent: 'center',paddingRight:15}}
            onPress={() => navigation.navigate('Notification')}>
            <Image
              style={{alignSelf: 'center',}}
              source={require('../appimages/notifydot.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
          activeOpacity={1}
            style={{justifyContent: 'center',paddingRight:15,}}
            onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{alignSelf: 'center',height:35,width:35 }}
              source={require('../appimages/girlimg.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}
        data={newsList}
        renderItem={({item}) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E8E4E4',
              paddingHorizontal: 15,
            }}>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 20,
                fontFamily: fonts.frutigebold,
                color: 'black',
                marginTop: 10,
              }}>
              {item.heading}
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('BreakingDetail')}>
              <Image
                style={{
                  height: 176,
                  marginVertical: 10,
                  flex: 1,
                  width: '100%',
                }}
                source={item.src}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../appimages/clock.png')}
              />

              <Text
                style={{
                  color: '#848484',
                  fontSize: 12,
                  marginLeft: 10,
                  fontFamily: fonts.frutigeregular,
                }}>
                {item.time}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default BreakingNews;
