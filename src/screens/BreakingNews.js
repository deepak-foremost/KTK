import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

const newsList = [
  {
    id: 0,
    heading:
      'November 29-30 & December 01 2021 in Deline NT virtually via Zoom PDF Documents available To download please select below:',
    src: require('../appimages/newsone.png'),
    time: '25 Aug, 8:00 Pm',
  },
  {
    id: 1,
    heading:
      'November 29-30 & December 01 2021 in Deline NT virtually via Zoom PDF Documents available To download please select below::',
    src: require('../appimages/newstwo.png'),
    time: '25 Aug, 8:00 Pm',
  },
  {
    id: 2,
    heading:
      'November 29-30 & December 01 2021 in Deline NT virtually via Zoom PDF Documents available To download please select below:',
    src: require('../appimages/newsthree.png'),
    time: '25 Aug, 8:00 Pm',
  },
];

const BreakingNews = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 20,
          justifyContent:'space-between',
          backgroundColor:'white'
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home', {name: 'jane'})}
          style={{
            backgroundColor: '#FFF200',
            height:40,
            width:40,
            justifyContent:'center',

            marginLeft: 15,
          }}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/backicon.png')}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 18,
            
            alignSelf: 'center',
            fontFamily:'Poppins-Medium'}}>Breaking News</Text>
        <View style={{flexDirection:'row',paddingRight:15}}> 

        <Image
          style={{alignSelf: 'center', marginRight: 20}}
          source={require('../appimages/finalnotification.png')}
        />

        <Image
          style={{alignSelf: 'center',}}
          source={require('../appimages/girlimg.png')}
        />
        </View>
      </View>

      <FlatList
        style={{backgroundColor:'white'}}
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
                fontFamily:'Poppins-SemiBold',
                color: 'black',
                marginTop: 10,
              }}>
              {item.heading}
            </Text>
            <Image
              onStartShouldSetResponder={() =>
                navigation.navigate('BreakingDetail')
              }
              style={{height: 176, marginVertical: 10, flex: 1, width: '100%',}}
              source={item.src}
            />
            <View style={{flexDirection: 'row', marginBottom: 10,}}>
             <Image style={{alignSelf:'center'}} source={require('../appimages/clock.png')}/>

              <Text style={{color: '#848484', fontSize: 12, marginLeft: 10,fontFamily:'Poppins-Regular'}}>
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
