import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';

const Splash = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fillProgress();
    verifyUser();
   
  },[] );
    
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
    const myToken = await AsyncStorage.getItem('token');
    console.log('my', myToken);

    if (myToken == null) {
      setTimeout(() => {
        navigation.replace('Information');
      }, 3500);
    } else {
      setTimeout(() => {
        navigation.replace('Home');
      }, 3500);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Information', {name: 'jane'});
  //   }, 300);
  // }, []);

 

  return (
    <View style={{backgroundColor: 'white', justifyContent: 'center', flex: 1}}>
      <Image
        style={{height: 200, alignSelf: 'center'}}
        source={require('../appimages/newsplash.png')}
      />
      <Progress.Bar
      style={{alignSelf:'center',marginTop:10,height:5}}
       unfilledColor='black'
       color='#FFF200'
       borderColor='black'
        progress={progress}
        width={200}
        animated={true}
        indeterminateAnimationDuration={2000}
      />
    </View>
  );
};
export default Splash;
