import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import fonts from '../utils/FontUtils';
import HomeButtons from '../Component/HomeButtons';
import * as RootNavigation from '../utils/RootNavigation';
import Constants from '../utils/Constants';
import {getMackenzieValley} from '../networking/CallApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShimmerCustomView from '../Component/ShimmerCustomView';

// const list = [
//   {
//     id: 0,
//     title: 'MACKENZIE VALLEY HIGHWAY',
//   },
//   {
//     id: 1,
//     title: 'GREAT BEAR RIVER BRIDGE',
//   },
//   {
//     id: 2,
//     title: 'OSCAR CREEK BRIDGE',
//   },
//   {
//     id: 3,
//     title: 'PROHIBITION CREEK ACCESS ROAD',
//   },
// ];

const MackenzieValley = ({navigation}) => {
  const [list, setList] = useState([]);
  const [setting, setSetting] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(async () => {
    let settings = await AsyncStorage.getItem(`getSetting`);
    setSetting(JSON.parse(settings));
  }, []);

  useEffect(() => {
    setLoading(true);
    getMackenzieValley({}, response => {
      console.log('velly', response.data);
      setList(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomColor: '#E8E4E4',
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => RootNavigation.goBack()}
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
        <Text style={{fontSize: 18, fontFamily: fonts.frutigebold}}>
          Mackenzie Valley
        </Text>
        {/* <TouchableOpacity
        activeOpacity={1}
          style={{position: 'absolute', right: 15}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{alignSelf: 'center',width:35,height:35}}
            source={require('../appimages/girlimg.png')}
          />
        </TouchableOpacity> */}
      </View>

      {isLoading && (
        <View style={{}}>
          <VellyItems />
          <VellyItems />
          <VellyItems />
          <VellyItems />
        </View>
      )}

      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={{paddingHorizontal: 15}}>
            <HomeButtons
              text={item.name}
              onPress={() =>
                item.title != 'Category Testing' &&
                RootNavigation.navigate(Constants.GREAT_BEAR_SCREEN, {
                  item: item,
                })
              }
              style={{backgroundColor: '#BCC5DE'}}
            />
          </View>
        )}
      />

      <View style={{marginTop: 30, marginBottom: 20}}>
        <Image
          style={{
            alignSelf: 'center',
          }}
          source={require('../appimages/homebottom.png')}
        />
        <Text
          style={{
            color: '#707070',
            fontSize: 11,
            fontFamily: fonts.frutigebold,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          {`App Version ${
            Platform.OS == `android`
              ? setting?.data?.android_version
              : setting?.data?.ios_version
          }`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MackenzieValley;

export const VellyItems = () => {
  return (
    <View
      style={{
        height: 45,
        width: '90%',
        marginVertical: 10,
        marginHorizontal: 15,
      }}>
      <ShimmerCustomView />
    </View>
  );
};
