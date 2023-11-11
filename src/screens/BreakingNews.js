import React, {useEffect, useState} from 'react';
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
import * as RootNavigation from '../utils/RootNavigation';
import Constants from '../utils/Constants';
import {getNews} from '../networking/CallApi';

const newsList = [
  {
    id: 0,
    heading:
      'November 29-30 & December 01 2021 in Délı̨nę NT virtually via Zoom PDF Documents available To download please select below:',
    src: require('../appimages/newsone.png'),
    time: '25 Aug, 8:00 PM',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sitamet, consectetur adipiscing elit sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Cursus vitae conguemauris rhoncus aenean vel. Lacus vel facilisis volutpat estvelit egestas dui id ornare. Aenean vel elit scelerisque mauris',
  },
  {
    id: 1,
    heading:
      'November 29-30 & December 01 2021 in Délı̨nę NT virtually via Zoom PDF Documents available To download please select below::',
    src: require('../appimages/newstwo.png'),
    time: '25 Aug, 8:00 PM',
  },
  {
    id: 2,
    heading:
      'November 29-30 & December 01 2021 in Délı̨nę NT virtually via Zoom PDF Documents available To download please select below:',
    src: require('../appimages/newsthree.png'),
    time: '25 Aug, 8:00 PM',
  },
];

const BreakingNews = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews({}, onSuccess => {
      setNews(onSuccess?.data);
    });
  }, [news, setNews]);
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
            style={{justifyContent: 'center', paddingRight: 15}}
            onPress={() =>
              RootNavigation.navigate(Constants.NOTIFICATION_SCREEN)
            }>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../appimages/notifydot.png')}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity
          activeOpacity={1}
            style={{justifyContent: 'center',paddingRight:15,}}
            onPress={() => RootNavigation.navigate(Constants.PROFILE_SCREEN)}>
            <Image
              style={{alignSelf: 'center',height:35,width:35 }}
              source={require('../appimages/girlimg.png')}
            />
          </TouchableOpacity> */}
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
              onPress={() =>
                RootNavigation.navigate(Constants.NEWS_DETAIL_SCREEN, {
                  item: item,
                })
              }>
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
