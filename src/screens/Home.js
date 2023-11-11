import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeButtons from '../Component/HomeButtons';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import Constants from '../utils/Constants';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            height: 55,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              alignSelf: 'center',
              fontFamily: fonts.frutigebold,
            }}>
            Home
          </Text>
          <View
            style={{
              position: 'absolute',
              right: 0,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={{justifyContent: 'center'}}
              onPress={() =>
                RootNavigation.navigate(Constants.NOTIFICATION_SCREEN)
              }>
              <Image
                style={{alignSelf: 'center', marginRight: 20}}
                source={require('../appimages/notifydot.png')}
              />
            </TouchableOpacity>

            {/* <TouchableOpacity
              activeOpacity={1}
              style={{justifyContent: 'center'}}
              onPress={() => RootNavigation.navigate(Constants.PROFILE_SCREEN)}>
              <Image
                style={{
                  alignSelf: 'center',
                  marginRight: 20,
                  width: 35,
                  height: 35,
                }}
                source={require('../appimages/girlimg.png')}
              />
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>

        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 15,
            backgroundColor: 'white',
          }}
          showsVerticalScrollIndicator={false}>
          <HomeButtons
            text={'BREAKING NEWS'}
            onPress={() => RootNavigation.navigate(Constants.NEWS_SCREEN)}
            style={{backgroundColor: '#E2976D'}}
          />

          <HomeButtons
            text={'MACKENZIE VALLEY'}
            onPress={() =>
              RootNavigation.navigate(Constants.MACKENZIE_VELLY_SCREEN)
            }
            style={{backgroundColor: '#9EA9C7'}}
          />

          <HomeButtons
            text={'SCHOLARSHIPS'}
            onPress={() =>
              RootNavigation.navigate(Constants.SCHOLARSHIPS_SCREEN)
            }
            style={{backgroundColor: '#9BB75E'}}
          />

          <HomeButtons
            text={'CLIMATE CHANGE'}
            onPress={() =>
              RootNavigation.navigate(Constants.CLIMATE_CHANGE_SCREEN, {
                name: 'jane',
              })
            }
            style={{backgroundColor: '#E2976D'}}
          />

          <HomeButtons
            text={'RECLAMATION CENTER'}
            onPress={() =>
              RootNavigation.navigate(Constants.REMEIDATION_SCREEN)
            }
            style={{backgroundColor: '#9EA9C7'}}
          />

          {/* <HomeButtons
            text={'REMEDIATION'}
            onPress={() =>
              RootNavigation.navigate(Constants.REMEIDATION_SCREEN)
            }
            style={{backgroundColor: '#CEC983'}}
          /> */}

          <HomeButtons
            text={'SAHTÚ HERITAGE'}
            onPress={() =>
              RootNavigation.navigate(Constants.SAHTU_HERITAGE, {name: 'jane'})
            }
            style={{backgroundColor: '#5EB7AE'}}
          />

          <HomeButtons
            text={'CALENDAR'}
            onPress={() => RootNavigation.navigate(Constants.CALENDAR_SCREEN)}
            style={{backgroundColor: '#E8A23F'}}
          />

          <HomeButtons
            text={'DIRECTORY'}
            onPress={() => RootNavigation.navigate(Constants.DIRECTORY_SCREEN)}
            style={{backgroundColor: '#F2CAAC'}}
          />

          <HomeButtons
            text={'CONTACT US'}
            onPress={() => RootNavigation.navigate(Constants.CONTACT_US_SCREEN)}
            style={{backgroundColor: '#D96231'}}
          />

          <HomeButtons
            text={'FAQS'}
            onPress={() => RootNavigation.navigate(Constants.FAQS_SCREEN)}
            style={{backgroundColor: '#518FDE'}}
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Home;
