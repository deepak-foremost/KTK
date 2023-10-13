import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {FullWindowOverlay} from 'react-native-screens';

const Information = ({navigation}) => {
  const [token, setToken] = useState('');
  const [count, setCount] = useState(0);
  const list = [
    {
      id: 0,
      src: require('../appimages/information.png'),
    },
    {
      id: 1,
      src: require('../appimages/information.png'),
    },
    {
      id: 2,
      src: require('../appimages/information.png'),
    },
  ];

  const onViewCallBack = React.useCallback(viewableItems => {
    console.log(viewableItems.viewableItems[0].index);
    setCount(viewableItems.viewableItems[0].index);
    // Use viewable items in state or as intended
  }, []); // any dependencies that require the function to be "redeclared"

  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      {/* topVie */}

      <View style={{flex: 1,backgroundColor:'white'}}>
        <FlatList
          contentContainerStyle={{backgroundColor: '#F2F2F2'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onViewableItemsChanged={onViewCallBack}
          viewabilityConfig={viewConfigRef.current}
          data={list}
          renderItem={({item, index}) => (
            <View
              Style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').width,
                backgroundColor: 'red',
                flex: 1,
                justifyContent: 'center',
                
              }}>
              <Image
                style={{
                  alignSelf: 'center',
                  width: Dimensions.get('window').width,
                  borderColor: '#F2F2F2',
                  borderWidth: 5,
                 
                }}
                source={item.src}
              />
            </View>
          )}
        />
         <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 5,
          marginTop: 10,
          backgroundColor:'white'
        }}>
        <View style={count == 0 ? styles.swipe : styles.simple}></View>
        <View style={count == 1 ? styles.swipe : styles.simple}></View>
        <View style={count == 2 ? styles.swipe : styles.simple}></View>
      </View>
      </View>

      {/* <ScrollView contentContainerStyle={{backgroundColor: '#F2F2F2', flex: 1, justifyContent: 'center',width:'100%'}} horizontal={true}>
          <Image
          style={{height: '96%', alignSelf: 'center', width: '96%'}}
          source={require('../appimages/information.png')}
        />
        <Image
          style={{height: '96%', alignSelf: 'center', width: '100%'}}
          source={require('../appimages/information.png')}
        />
          </ScrollView> */}

     
      {/* <Image
        style={{alignSelf: 'center', marginTop: 10}}
        source={require('../appimages/border.png')}
      /> */}

      {/* BottomView */}

      <View
        style={{flex: 1, justifyContent: 'space-around', paddingVertical: 10,backgroundColor:'white'}}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Poppins-SemiBold',
            alignSelf: 'center',
            lineHeight: 40,
          }}>
          Safeguarding Our{'\n  '}Sahtu for Future{'\n      '}Generations.
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
            lineHeight: 25,
            alignSelf: 'center',
            color: 'black',
          }}>
          {'  '}
          Stay Connected with Sahtu Secretariat Inc:{'\n  '}
          Your Go-To Community Hub for the Latest {'\n'}
          Updates, Insights, andEngaging Connections!
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFF200',
            height: 58,
            marginLeft: 20,
            marginRight: 20,

            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.navigate('LogIn');
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  swipe: {
    backgroundColor: '#FFF200',
    height: 5,
    width: 47,
    borderRadius: 30,
    alignSelf: 'center',
    marginHorizontal: 3,
  },
  simple: {
    backgroundColor: '#131313',
    height: 5,
    width: 21,
    borderRadius: 30,
    alignSelf: 'center',
    marginHorizontal: 3,
  },
});
export default Information;
