import React, {useState} from 'react';
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

const Notification = ({navigation}) => {
  const [show, setShow] = useState(true);
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 20,
          paddingHorizontal: 15,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF200',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}
          onPress={() => navigation.navigate('Home')}>
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
            fontFamily: 'Poppins-Medium',
            marginVertical: 10,
          }}>
          Notificactions
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 20,
            marginTop: 15,
          }}>
          <Image
            style={{
              alignSelf: 'center',
              alignSelf: 'center',
            }}
            source={require('../appimages/yellownotify.png')}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              lineHeight: 25,
              paddingRight: 15,
              alignSelf: 'center',
              marginHorizontal: 15,
            }}>
            Exciting New COVID-19 News in Health Category Just Posted!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 20,
            marginTop: 15,
          }}>
          <Image
            style={{
              alignSelf: 'center',
              alignSelf: 'center',
            }}
            source={require('../appimages/yellownotify.png')}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              lineHeight: 25,
              paddingRight: 15,
              alignSelf: 'center',
              marginHorizontal: 15,
            }}>
            Exciting New COVID-19 News in Health Category Just Posted!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 20,
            marginTop: 15,
          }}>
          <Image
            style={{
              alignSelf: 'center',
              alignSelf: 'center',
            }}
            source={require('../appimages/yellownotify.png')}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              lineHeight: 25,
              paddingRight: 15,
              alignSelf: 'center',
              marginHorizontal: 15,
            }}>
            Exciting New COVID-19 News in Health Category Just Posted!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 20,
            marginTop: 15,
          }}>
          <Image
            style={{
              alignSelf: 'center',
              alignSelf: 'center',
            }}
            source={require('../appimages/yellownotify.png')}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              lineHeight: 25,
              paddingRight: 15,
              alignSelf: 'center',
              marginHorizontal: 15,
            }}>
            Exciting New COVID-19 News in Health Category Just Posted!
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 20,
            marginTop: 15,
          }}>
          <Image
            style={{
              alignSelf: 'center',
              alignSelf: 'center',
            }}
            source={require('../appimages/yellownotify.png')}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              lineHeight: 25,
              paddingRight: 15,
              alignSelf: 'center',
              marginHorizontal: 15,
            }}>
            Exciting New COVID-19 News in Health Category Just Posted!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Notification;
