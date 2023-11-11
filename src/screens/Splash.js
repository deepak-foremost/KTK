import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import * as Progress from 'react-native-progress';
import * as RootNavigation from '../utils/RootNavigation';
import Constants from '../utils/Constants';

const Splash = props => {
  const [progress, setProgress] = useState(0);
  const [first, setFirst] = useState(false);

  useEffect(() => {
    fillProgress();
    verifyUser();
  }, []);

  const fillProgress = () => {
    let fillCount = 0;
    const totalFillCount = 3;
    const fillInterval = 1000; // 1 second

    const fillTimer = setInterval(() => {
      if (fillCount < totalFillCount) {
        setProgress(prevProgress => prevProgress + 1 / totalFillCount);
        if (progress >= 1) {
          fillCount++;
          if (fillCount === totalFillCount) {
            clearInterval(fillTimer); // Stop filling progress
          } else {
            setProgress(0); // Reset progress to 0 and continue filling
          }
        }
      }
    }, fillInterval);
  };

  // useEffect(() => {
  //   verifyUser();
  // });

  const verifyUser = async () => {
    const myToken = await AsyncStorage.getItem('first');
    console.log('my', myToken);

    if (myToken == null) {
      setTimeout(() => {
        RootNavigation.forcePush(props, Constants.INFORMATION_SCREEN);
      }, 3500);
    } else {
      setFirst(true);
      setTimeout(() => {
        RootNavigation.forcePush(props, Constants.HOME_SCREEN);
        // navigation.replace('Home');
      }, 3500);
    }
  };

  const Verify = async => {
    try {
      const status = AsyncStorage.getItem('first');
      if (status != null) {
        setFirst(true);
      } else {
        setFirst(false);
      }
    } catch (error) {
      // Error saving data
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Information', {name: 'jane'});
  //   }, 300);
  // }, []);

  // useEffect(() => {
  //   Verify()
  // });

  return (
    <SafeAreaView style={{backgroundColor: 'white', justifyContent: 'center', flex: 1}}>
      <StatusBar backgroundColor={'#fff'}
      barStyle={'dark-content'}/>
      <Image
        style={{height: 200, alignSelf: 'center'}}
        source={require('../appimages/finalone.png')}
      />
      <Progress.Bar
        style={{alignSelf: 'center', marginTop: 10, height: 5}}
        unfilledColor="black"
        color="#FFF200"
        borderColor="black"
        progress={progress}
        width={200}
        animated={true}
        indeterminateAnimationDuration={2000}
      />
    </SafeAreaView>
  );
};
export default Splash;
