import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';

const list = [
  {
    date: '19Aug',
    heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    date: '20Aug',
    heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    date: '21Aug',
    heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
  {
    date: '22June',
    heading: 'Exciting New COVID-19 News in Health Category Just Posted!',
  },
];

const Calendar = ({navigation}) => {
  return (
    <SafeAreaView style={{paddingTop: 15, backgroundColor: 'black',flex:1}}>
     
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 15,
          paddingVertical: 20,
          backgroundColor:'white'
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF200',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }} onPress={()=> navigation.navigate('Home')}>
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
            fontFamily:'Poppins-Medium',
            marginVertical: 10,
          }}>
          Calendar
        </Text>
      </View>
      <View style={{backgroundColor:'#E8E4E4',height:1,}}></View>
      <FlatList
      style={{backgroundColor:'white',paddingTop:10}}
        
        data={list}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F5F5F5',
              marginVertical: 5,
              paddingRight:10
            }}>
            <View
              style={{
                backgroundColor: '#E8A23F',
                justifyContent: 'center',
                alignSelf:'center',
                width:51,
                height:51,
                marginLeft:15
                
              }}>
              <Text style={{fontFamily:'Poppins-Medium', fontSize: 19,alignSelf:'center'}}>
                {item.date.slice(0, 2)}
              </Text>
              <Text style={{fontFamily:'Poppins-Medium',alignSelf:'center',fontSize:13,marginTop:-4}}>{item.date.slice(2)}</Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontFamily:'Poppins-Medium',
                textAlignVertical: 'center',
                paddingVertical: 20,
                width:'80%',
                marginLeft:15
                
                
              }}>
              {item.heading}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Calendar;
