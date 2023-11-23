import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Toolbar from '../Component/Toolbar';
import fonts from '../utils/FontUtils';
import {getGreatBear} from '../networking/CallApi';
import RenderHTML from 'react-native-render-html';
import {VellyItems} from './MackenzieValley';
import {ImageView, TextView, TimeView} from './BreakingNews';

const GreatBear = ({navigation, route}) => {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const item = route.params.item;

  useEffect(() => {
    setLoading(true);
    getGreatBear({category_id: item.id}, response => {
      console.log('great', response.data);
      setList(response.data);
      setLoading(false);
    });
  }, []);

  const source = {
    html: list?.description?.replace(`/n`, ``),
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Toolbar text={item.name} onPress={() => navigation.goBack()} />

      {isLoading && (
        <View style={{}}>
          <GreatList />
          <GreatList />
          <GreatList />
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
          <View style={{flex: 0.2}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 15,
              }}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../appimages/clock.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#848484',
                  marginLeft: 10,
                  fontFamily: fonts.frutigeregular,
                  alignSelf: 'center',
                }}>
                {list?.date}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontFamily: fonts.frutigebold,
              }}
              numberOfLines={2}>
              {list?.title}
            </Text>
          </View>

          {/* ImageView  */}
          <View style={{flex: 0.5}}>
            <Image
              style={{
                width: '100%',
                height: 210,
                alignSelf: 'center',
              }}
              source={{uri: list?.image}}
            />
          </View>

          {/* Bottom View  */}
          <View style={{flex: 0.6}}>
            {/* <Text
              style={{
                textAlign: 'justify',
                lineHeight: 20,
                marginTop: 20,
                color: '#848484',
                fontFamily: fonts.frutigeregular,
                fontSize:14
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit,{'\n'}sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Cursus vitae congue
              mauris rhoncus aenean vel. Lacus vel facilisis volutpat est velit
              egestas dui id ornare.{'\n'}Aenean vel elit scelerisque mauris.
              Ullamcorper a lacus vestibulum sed arcu non odio euismod.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.{' '}
            </Text> */}
            <RenderHTML
              contentWidth={Dimensions.get('window').width}
              source={source}
              tagsStyles={{body: {color: '#848484'}}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GreatBear;

export const GreatList = () => {
  return (
    <View>
      <TimeView />
      <TextView />
      <ImageView />
      <TimeView />
    </View>
  );
};
