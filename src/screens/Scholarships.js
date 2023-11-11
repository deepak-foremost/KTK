import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Toolbar from '../Component/Toolbar';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import HomeButtons from '../Component/HomeButtons';

const list = [
  {
    id: 0,
    title: 'Description ...Scholarships little',
  },
  {
    id: 1,
    title: 'Description ...Scholarships little',
  },
  {
    id: 2,
    title: 'Description ...Scholarships little',
  },
  {
    id: 3,
    title: 'Description ...Scholarships little',
  },
  {
    id: 4,
    title: 'Description ...Scholarships little',
  },
  {
    id: 5,
    title: 'Description ...Scholarships little',
  },
  {
    id: 6,
    title: 'Description ...Scholarships little',
  },
];

const Scholarships = ({navigation}) => {
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
        <TouchableOpacity
          activeOpacity={1}
          style={{position: 'absolute', right: 15}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{alignSelf: 'center', width: 35, height: 35}}
            source={require('../appimages/girlimg.png')}
          />
        </TouchableOpacity>
      </View>

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
                height: 120,
                alignSelf: 'center',
                backgroundColor: 'green',
              }}
              source={require('../appimages/newstwo.png')}
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
              Scholarships Title Scholarships Title Scholarships Title
            </Text>
          </View>

          {/* Bottom View  */}
          <View style={{flex: 0.6, paddingVertical: 15}}>
            <Text
              style={{
                fontFamily: fonts.frutigeregular,
                fontSize: 14,
                color: '#848484',
              }}>
              Scholarships little description ...Scholarships little{' '}
            </Text>

           <View style={{height:110}}>
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
            </View>
            <HomeButtons
              text={'SCHOLARSHIP LINK'}
            //   onPress={() =>
            //     RootNavigation.navigate(Constants.MACKENZIE_VELLY_SCREEN)
            //   }
              style={{backgroundColor: '#9BB75E',marginTop:30}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scholarships;
