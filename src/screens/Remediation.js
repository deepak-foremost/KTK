import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import Toolbar from '../Component/Toolbar';
import fonts from '../utils/FontUtils';

const Remediation = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Toolbar text={'Remediation'} 
      onPress={()=> navigation.goBack()}/>

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

          {/* ImageView  */}
          <View style={{marginTop: 20}}>
            <Image
              style={{
                width: '100%',
                height: 120,
                alignSelf: 'center',
                backgroundColor: 'green',
              }}
              source={require('../appimages/newstwo.png')}
            />
          </View>

          <View style={{flex: 0.2}}>
            <Text
              style={{
                fontSize: 22,
                marginVertical: 20,
                fontFamily: fonts.frutigebold,
                
              }}
              numberOfLines={3}>
              At the 2019 Annual General Meeting the SSI passed a motion
              regarding Climate Change to…
            </Text>
          </View>

          {/* Bottom View  */}
          <View style={{flex: 0.6}}>
            <Text
              style={{
                textAlign: 'justify',
                lineHeight: 20,
                color: '#848484',
                fontFamily: fonts.frutigeregular,
              }}>
              1. Encourage the federal government to continue its planned
              remediation work of abandoned mine sites in the Decline District;
              {'\n\n'}
              2. Urges the federal government to continue its efforts to improve
              the economic conditions of indigenous people in the Sahtu Region;
              {'\n\n'}
              3. Recommends funding be provided to help Sahtu residents and
              business prepare for mine, oilfield and pipeline remediation work
              int he coming year; and{'\n\n'}4. Supports Decline District in its
              efforts to negotiate a direct issuance of remediation work
              associated with the Terra/Silver Bear project in the District to
              the benefit of all the Indigenous residents and businesses of
              the Sahtu Region.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Remediation;
