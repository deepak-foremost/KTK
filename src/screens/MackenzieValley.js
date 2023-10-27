import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import fonts from '../utils/FontUtils';
import HomeButtons from '../Component/HomeButtons';

const list = [
  {
    id: 0,
    title: 'MACKENZIE VALLEY HIGHWAY',
  },
  {
    id: 1,
    title: 'GREAT BEAR RIVER BRIDGE',
  },
  {
    id: 2,
    title: 'OSCAR CREEK BRIDGE',
  },
  {
    id: 3,
    title: 'PROHIBITION CREEK ACCESS ROAD',
  },
];

const MackenzieValley = ({navigation}) => {
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
          onPress={() => navigation.navigate('Home', {name: 'jane'})}
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
        <TouchableOpacity
        activeOpacity={1}
          style={{position: 'absolute', right: 15}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{alignSelf: 'center',width:35,height:35}}
            source={require('../appimages/girlimg.png')}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index}) => (
          <View style={{paddingHorizontal: 15}}>
            <HomeButtons
              text={item.title}
               onPress={() => index==1 && navigation.navigate('GreatBear')}
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
          App Version 1.2
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MackenzieValley;
