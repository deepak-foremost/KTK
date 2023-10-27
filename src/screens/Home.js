import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import HomeButtons from '../Component/HomeButtons';
import fonts from '../utils/FontUtils';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
              onPress={() => navigation.navigate('Notification')}>
              <Image
                style={{alignSelf: 'center', marginRight: 20}}
                source={require('../appimages/notifydot.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={1}
              style={{justifyContent: 'center'}}
              onPress={() => navigation.navigate('Profile')}>
              <Image
                style={{alignSelf: 'center', marginRight: 20,width:35,height:35}}
                source={require('../appimages/girlimg.png')}
              />
            </TouchableOpacity>
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
            onPress={() => navigation.navigate('BreakingNews', {name: 'jane'})}
            style={{backgroundColor: '#E2976D'}}
          />

          <HomeButtons
            text={'MACKENZIE VALLEY'}
            onPress={()=> navigation.navigate('Valley', {name: 'jane'})}
            style={{backgroundColor: '#9EA9C7'}}
          />

          <HomeButtons
            text={'SCHOLARSHIPS'}
            // onPress={()=> navigation.navigate('BreakingNews', {name: 'jane'})}
            style={{backgroundColor: '#9BB75E'}}
          />

          <HomeButtons
            text={'CLIMATE CHANGE'}
            // onPress={() => navigation.navigate('BreakingNews', {name: 'jane'})}
            style={{backgroundColor: '#E2976D'}}
          />

          <HomeButtons
            text={'RECLAMATION CENTER'}
            // onPress={() => navigation.navigate()}
            style={{backgroundColor: '#9EA9C7'}}
          />

          <HomeButtons
            text={'REMEDIATION'}
            onPress={() => navigation.navigate('Remidation')}
            style={{backgroundColor: '#CEC983'}}
          />

          <HomeButtons
            text={'SAHTU HERITAGE'}
            // onPress={() => navigation.navigate('BreakingNews', {name: 'jane'})}
            style={{backgroundColor: '#5EB7AE'}}
          />

          <HomeButtons
            text={'CALENDAR'}
            onPress={() => navigation.navigate('Calendar')}
            style={{backgroundColor: '#E8A23F'}}
          />

          <HomeButtons
            text={'DIRECTORY'}
            onPress={() => navigation.navigate('Directory')}
            style={{backgroundColor: '#F2CAAC'}}
          />

          <HomeButtons
            text={'CONTACT US'}
            onPress={() => navigation.navigate('ContactUs')}
            style={{backgroundColor: '#D96231'}}
          />

          <HomeButtons
            text={'FAQS'}
            onPress={() => navigation.navigate('Faqs')}
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
