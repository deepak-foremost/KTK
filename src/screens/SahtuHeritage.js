import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import * as RootNavigation from '../utils/RootNavigation';
import fonts from '../utils/FontUtils';
import HomeButtons from '../Component/HomeButtons';

const SahtuHeritage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomColor: '#E8E4E4',
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => RootNavigation.goBack()}
          style={{
            backgroundColor: '#FFF200',
            height: 35,
            width: 35,
            justifyContent: 'center',
            position: 'absolute',
            left: 15,
          }}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/backicon.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontFamily: fonts.frutigebold}}>
          Sahtú Heritage
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          style={{position: 'absolute', right: 15}}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{alignSelf: 'center', width: 35, height: 35}}
            source={require('../appimages/girlimg.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 15}}>
        <Image
          style={{width: '100%', height: 120}}
          source={require('../appimages/newstwo.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 22,
          marginBottom: 15,
          fontFamily: fonts.frutigebold,
          marginLeft: 15,
        }}>
        Sahtú Heritage
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: fonts.frutigebold,
          color: '#848484',
          marginHorizontal: 15,
          lineHeight: 18,
        }}>
        In response to a resolution at the 2021 AGM, SSI is working to establish
        the George Cleary Sahtu Heritage Centre in Deline. Who: The late George
        Cleary, (July 2, 1955-Sept. 3, 2020) was a respected Sahtu educator and
        leader who was instrumental in the negotiation of the Sahtu land claim
        and the realization of self-government for the community of Deline.
        What: The Board of Directors of the Sahtu Secretariat, Inc (SSI) is
        working to establish a memorial centre in George's name. The Centre, to
        be located in George's home community of Deline, will house the
        historical records of both the Sahtu Dene and Metis Comprehensive Land
        Claim Agreement and the Deline self-government negotiations. Why: Access
        to these records, both virtually and physically, will allow scholars and
        historians to study the land claim and self-government negotiations and
        will provide students and members of the public with an opportunity to
        better understand their history. When: The Centre will be located in the
        new Deline Got'ine Government building which we expect will be ready in
        2025 or 2026. We will begin digitizing all the land claim documents this
        winter. We are also having a portrait of George painted to hang in the
        entrance to the Centre.
      </Text>
      <HomeButtons
        text={'NORTH  DENE ILA FILES FOR PILOT'}
        // onPress={() =>
        //   RootNavigation.navigate(Constants.SAHTU_HERITAGE, {name: 'jane'})
        // }
        style={{backgroundColor: '#9BB75E', marginHorizontal: 15}}
      />
    </SafeAreaView>
  );
};

export default SahtuHeritage;
