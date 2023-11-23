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
import {getNews, sendFirebaseToken} from '../networking/CallApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShimmerCustomView from '../Component/ShimmerCustomView';
import Shimmer from 'react-native-shimmer';

// const newsList = [
//   {
//     id: 0,
//     heading:
//       'November 29-30 & December 01 2021 in Délı̨nę NT virtually via Zoom PDF Documents available To download please select below:',
//     src: require('../appimages/newsone.png'),
//     time: '25 Aug, 8:00 PM',
//     details:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sitamet, consectetur adipiscing elit sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Cursus vitae conguemauris rhoncus aenean vel. Lacus vel facilisis volutpat estvelit egestas dui id ornare. Aenean vel elit scelerisque mauris',
//   },
//   {
//     id: 1,
//     heading:
//       'November 29-30 & December 01 2021 in Délı̨nę NT virtually via Zoom PDF Documents available To download please select below::',
//     src: require('../appimages/newstwo.png'),
//     time: '25 Aug, 8:00 PM',
//   },
//   {
//     id: 2,
//     heading:
//       'November 29-30 & December 01 2021 in Délı̨nę NT virtually via Zoom PDF Documents available To download please select below:',
//     src: require('../appimages/newsthree.png'),
//     time: '25 Aug, 8:00 PM',
//   },
// ];

const BreakingNews = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [notification, setNotification] = useState(false);
  const [isLoading, setLoading] = useState(false);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      sendFirebaseToken();

      setTimeout(async () => {
        let isNotification = await AsyncStorage.getItem(`isUnreadNotification`);
        setNotification(isNotification > 0);
      }, 1000);
    });

    return unsubscribe;
  }, [navigation]);

  const onLodeMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  useEffect(async () => {
    sendFirebaseToken();
    let isNotification = await AsyncStorage.getItem(`isUnreadNotification`);
    setNotification(isNotification > 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [page]);

  const loadData = () => {
    const params = {
      page: page,
    };
    getNews(
      params,
      response => {
        setTotalPage(response?.last_page);
        if (!response.status) {
        } else {
          var list = news == null ? [] : [...news];
          if (page == 1) {
            setNews(response.data);
          } else {
            setNews([...list, ...response?.data]);
          }
          setLoading(false);
        }
      },
      response => {
        if (news == null) {
          setNews([]);
        }
      },
    );
    // ApiManager(
    //   ApiRequestType.get,
    //   Apis.GetShifts,
    //   params,
    //   onSuccess => {
    //     setTotalPage(onSuccess?.last_page);
    //     setRefreshing(false);
    //     if (!onSuccess?.status) {
    //       ToastMessage(onSuccess?.message);
    //     } else {
    //       var list = jobs == null ? [] : [...jobs];
    //       if (page == 1) {
    //         setJobs(onSuccess?.data);
    //       } else {
    //         setJobs([...list, ...onSuccess?.data]);
    //       }
    //     }
    //   },
    //   onFailure => {
    //     setRefreshing(false);
    //     if (jobs == null) {
    //       setJobs([]);
    //     }
    //   },
    //   loader => {},
    //   props,
    // );
  };

  // useEffect(() => {
  //   getNews(
  //     {},
  //     response => {
  //       console.log('news---', response.data);
  //       setNews(response.data);
  //     },
  //     response => {
  //       console.log('newsFailure', response.data);
  //     },
  //   );
  // }, []);
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
            style={{justifyContent: 'center', marginRight: 20}}
            onPress={() =>
              RootNavigation.navigate(Constants.NOTIFICATION_SCREEN)
            }>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../appimages/notifydot.png')}
            />
            {notification && (
              <View
                style={{
                  backgroundColor: '#FFF200',
                  height: 8,
                  width: 8,
                  borderRadius: 8,
                  position: 'absolute',
                  right: 0,
                  top: -3,
                }}
              />
            )}
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

      {isLoading && (
        <View>
          <NewList />
          <NewList />
          <NewList />
        </View>
      )}

      <FlatList
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.6}
        data={news}
        onEndReached={() => {
          onLodeMore();
        }}
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
              {item.title}
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
                source={{uri: item.image}}
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
                {item.date}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default BreakingNews;

export const ImageView = () => {
  return (
    <View style={{height: 150, width: '90%', marginHorizontal:15}}>
      <ShimmerCustomView />
    </View>
  );
};

export const TextView = () => {
  return (
    <View
      style={{
        height: 30,
        width: '90%',
        marginVertical: 10,
        marginHorizontal:15,
      }}>
      <ShimmerCustomView />
    </View>
  );
};

export const TimeView = () => {
  return (
    <View
      style={{
        width: '30%',
        height: 15,
        marginVertical: 10,
        marginHorizontal:15
      }}>
      <ShimmerCustomView />
    </View>
  );
};

export const NewList = () => {
  return (
    <View>
      <TextView />
      <ImageView />
      <TimeView />
    </View>
  );
};
