import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as RootNavigation from '../utils/RootNavigation';
import fonts from '../utils/FontUtils';
import HomeButtons from '../Component/HomeButtons';
import {getSathuHeritage} from '../networking/CallApi';
import RenderHTML from 'react-native-render-html';
import {ImageView, TextView} from './BreakingNews';
import {BigText} from './Scholarships';

const SahtuHeritage = () => {
  const [list, setList] = useState([]);
  const [isLoading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getSathuHeritage({}, response => {
      setList(response.data);
      setloading(false);
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
          Sahtú Heritage
        </Text>
        {/* <TouchableOpacity
          activeOpacity={1}
          style={{position: 'absolute', right: 15}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{alignSelf: 'center', width: 35, height: 35}}
            source={require('../appimages/girlimg.png')}
          />
        </TouchableOpacity> */}
      </View>

      {isLoading && (
        <View>
          <SahtuItem />
        </View>
      )}

      <ScrollView
        contentContainerStyle={{paddingBottom: 30}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 15}}>
          <Image
            style={{width: '100%', height: 120}}
            source={{uri: list.image}}
          />
        </View>
        <Text
          style={{
            fontSize: 22,

            fontFamily: fonts.frutigebold,
            marginLeft: 15,
          }}>
          {list.title}
        </Text>
        <RenderHTML
          source={{html: list.description}}
          contentWidth={Dimensions.get('window').width}
          tagsStyles={{
            body: {marginHorizontal: 15, color: '#848484', lineHeight: 20},
          }}
        />
        {/* <Text
        style={{
          fontSize: 12,
          fontFamily: fonts.frutigebold,
          color: '#848484',
          marginHorizontal: 15,
          lineHeight: 18,
        }}>
       {list.description}
      </Text> */}
        <HomeButtons
          text={list?.link_name}
          onPress={() => Linking.openURL(`${list.link}`)}
          style={{backgroundColor: '#9BB75E', marginHorizontal: 15}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SahtuHeritage;

export const SahtuItem = () => {
  return (
    <View>
      <ImageView />
      <TextView />
      <BigText />
    </View>
  );
};
