import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          paddingVertical: 8,
          backgroundColor: 'white',
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 25,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              alignSelf: 'center',
              fontFamily: 'Poppins-Medium',
            }}>
            Home
          </Text>
          <View
            style={{
              position: 'absolute',
              right: 0,
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <Image
              onStartShouldSetResponder={() =>
                navigation.navigate('Notification')
              }
              style={{alignSelf: 'center', marginRight: 20}}
              source={require('../appimages/notifydot.png')}
            />

            <Image
              onStartShouldSetResponder={() => navigation.navigate('Profile')}
              style={{alignSelf: 'center', marginRight:15}}
              source={require('../appimages/girlimg.png')}
            />
          </View>
        </View>

        <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>

        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 15,
            backgroundColor: 'white',
          }}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E2976D',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}
            onPress={() => navigation.navigate('BreakingNews', {name: 'jane'})}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              BREAKING NEWS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#9EA9C7',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              MCKENZIE VALLEY HIGHWAY
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#9BB75E',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              SCHOLARSHIPS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#E2976D',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}
            onPress={() => navigation.navigate('ClimateChange')}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              CLIMATE CHANGE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#9EA9C7',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              OILFIELD RECLAMATION CENTER
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#E8A23F',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}
            onPress={() => navigation.navigate('Calendar')}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              CALENDAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#F2CAAC',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}
            onPress={() => navigation.navigate('Directory')}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              DIRECTORY
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ContactUs')}
            style={{
              backgroundColor: '#D96231',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              CONTACT US
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#518FDE',
              height: 55,
              justifyContent: 'center',
              marginTop: 15,
            }}
            onPress={() => navigation.navigate('Faqs')}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
              }}>
              FAQS
            </Text>
          </TouchableOpacity>

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
                fontFamily: 'Poppins-Bold',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              App Version 1.2
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Home;
