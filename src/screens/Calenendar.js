import React, {useEffect, useState} from 'react';
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
import {getCalendar} from '../networking/CallApi';
import { VellyItems } from './MackenzieValley';

// const list = [
//   {
//     date: '19Aug',
//     heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
//   },
//   {
//     date: '20Aug',
//     heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
//   },
//   {
//     date: '21Aug',
//     heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
//   },
//   {
//     date: '22June',
//     heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
//   },
// ];

const Calendar = ({navigation}) => {
  const [calendars, setCalendars] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const onLodeMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setLoading(true)
    LoadData();
  }, []);

  const LoadData = () => {
    const params = {
      page: page,
    };
    getCalendar(
      params,
      response => {
        setTotalPage(response?.last_page);
        if (!response.status) {
        } else {
          var list = calendars == null ? [] : [...calendars];
          if (page == 1) {
            setCalendars(response?.data);
            console.log('not', response?.data);
          } else {
            setCalendars([...list, ...response?.data]);
          }
          setLoading(false)
        }
      },
      response => {
        console.log('fasils', response?.data);
      },
    );
  };

  // useEffect(() => {
  //   getCalendar(
  //     {},
  //     response => {
  //       setCalendars(response.data);
  //     },
  //     response => {
  //       'calendarFail', console.log(response);
  //     },
  //   );
  // },[]);

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
          onPress={() => RootNavigation.goBack()}
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

      {isLoading && (
        <View style={{}}>
          <VellyItems />
          <VellyItems />
          <VellyItems />
          <VellyItems />
        </View>
      )}
      <FlatList
        style={{backgroundColor: 'white', paddingTop: 10}}
        showsVerticalScrollIndicator={false}
        data={calendars}
        onEndReachedThreshold={0.6}
        onEndReached={() => {
          onLodeMore();
        }}
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
            <View style={{marginRight: 15, flex: 1}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fonts.frutigeregular,
                  textAlignVertical: 'center',
                  paddingVertical: 20,
                  lineHeight: 20,
                  marginLeft: 15,
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
export default Calendar;
