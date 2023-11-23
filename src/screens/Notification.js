import React, {useEffect, useState} from 'react';
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
import {getNotification, sendFirebaseToken} from '../networking/CallApi';

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
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [notification, setNotification] = useState([]);

  const onLodeMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = () => {
    const params = {
      page: page,
    };
    getNotification(params, response => {
     
      setTotalPage(response?.last_page)
      if (!response.status) {
          
      } else {
        var list = notification == null ? [] : [...notification];
        if(page==1) {
          setNotification(response?.data)
          console.log('not',response?.data)
        }else{
          setNotification([...list,...response?.data]);
        }
      }

      sendFirebaseToken()
    },
    response=>{
      console.log('fasils',response?.data)
      sendFirebaseToken()
    });
  };

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
        data={notification}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.6}
        onEndReached={() => {
          onLodeMore();
        }}
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
                height: 40,
                width: 40,
              }}
              source={require('../appimages/yellownotify.png')}
            />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fonts.frutigebold,
                  lineHeight: 20,
                }}>
                {item?.title}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Notification;
