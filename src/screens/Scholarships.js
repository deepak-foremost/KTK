import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Toolbar from '../Component/Toolbar';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import HomeButtons from '../Component/HomeButtons';
import {getScholarships} from '../networking/CallApi';
import RenderHTML from 'react-native-render-html';
import {ImageView, TextView} from './BreakingNews';
import ShimmerCustomView from '../Component/ShimmerCustomView';

// const list = [
//   {
//     id: 0,
//     title: 'Description ...Scholarships little',
//   },
//   {
//     id: 1,
//     title: 'Description ...Scholarships little',
//   },
//   {
//     id: 2,
//     title: 'Description ...Scholarships little',
//   },
//   {
//     id: 3,
//     title: 'Description ...Scholarships little',
//   },
//   {
//     id: 4,
//     title: 'Description ...Scholarships little',
//   },
//   {
//     id: 5,
//     title: 'Description ...Scholarships little',
//   },
//   {
//     id: 6,
//     title: 'Description ...Scholarships little',
//   },
// ];

const Scholarships = ({navigation}) => {
  const [list, setList] = useState([]);
  const [isLoading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getScholarships({}, response => {
      setList(response.data);
      setloading(false);
    });
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
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
          Scholarships
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
        <View style={{}}>
          <ScholarshipItem />
          <ScholarshipItem />
          <ScholarshipItem />
        </View>
      )}

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

          {/* ImageView  */}
          <View style={{marginTop: 20}}>
            <Image
              style={{
                width: '100%',
                height: 130,
                alignSelf: 'center',
                backgroundColor: 'green',
              }}
              source={{uri: list.image}}
            />
          </View>

          <View style={{flex: 0.2}}>
            <Text
              style={{
                fontSize: 22,
                marginVertical: 20,
                fontFamily: fonts.frutigebold,
              }}
              numberOfLines={3}>
              {list?.title}
            </Text>
          </View>

          {/* Bottom View  */}
          <View
            style={{flex: 0.6, justifyContent: 'flex-start', marginTop: -10}}>
            {/* <Text
              style={{
                fontFamily: fonts.frutigeregular,
                fontSize: 14,
                color: '#848484',
              }}>
              {list.description}
            </Text> */}
            <RenderHTML
              source={{html: list.description}}
              contentWidth={Dimensions.get('window').width}
              tagsStyles={{body: {color: '#848484'}}}
            />

            {/* <View style={{height:110}}>
            <FlatList
            showsVerticalScrollIndicator={false}
              data={list}
              renderItem={({item}) => (
                <Text
                  style={{
                    fontFamily: fonts.frutigeregular,
                    fontSize: 14,
                    color: '#848484',
                    marginTop: 10,
                  }}>
                  {item.title}
                </Text>
              )}
            />
            </View> */}
            <HomeButtons
              text={list?.link_name}
              onPress={() => Linking.openURL(`${list?.link}`)}
              style={{backgroundColor: '#9BB75E', marginTop: 30}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scholarships;

export const BigText = () => {
  return (
    <View
      style={{
        height: 250,
        width: '90%',
        marginHorizontal: 15,
        marginVertical: 10,
      }}>
      <ShimmerCustomView />
    </View>
  );
};

export const ScholarshipItem = () => {
  return (
    <View>
      <ImageView />
      <TextView />
      <BigText />
    </View>
  );
};
