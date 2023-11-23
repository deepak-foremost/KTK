import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Toolbar from '../Component/Toolbar';
import fonts from '../utils/FontUtils';
import {getReclamationCenter} from '../networking/CallApi';
import RenderHTML from 'react-native-render-html';
import {ImageView, TextView} from './BreakingNews';
import {BigText} from './Scholarships';

const Remediation = ({navigation}) => {
  const [list, setList] = useState();
  const [isLoading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getReclamationCenter({}, response => {
      setList(response.data);
      setloading(false);
    });
  }, []);

  const source = {
    html: list?.description,
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Toolbar
        text={'Reclamation Centre'}
        onPress={() => navigation.goBack()}
      />

      {isLoading && (
        <View>
          <ReclamationView />
          <ReclamationView />
          <ReclamationView />
        </View>
      )}

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
              source={{uri: list?.image}}
            />
          </View>

          <View style={{flex: 0.2}}>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontFamily: fonts.frutigebold,
              }}
              numberOfLines={3}>
              {list?.title}
            </Text>
          </View>

          {/* Bottom View  */}
          <View style={{flex: 0.6}}>
            {/* <Text
              style={{
                textAlign: 'justify',
                lineHeight: 20,
                color: '#848484',
                fontFamily: fonts.frutigeregular,
              }}>
              {list?.date}
            </Text> */}
            <RenderHTML
              contentWidth={Dimensions.get('window').width}
              source={source}
              tagsStyles={{
                body: {marginHorizontal: 15, color: '#848484', lineHeight: 20},
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Remediation;

export const ReclamationView = () => {
  return (
    <View>
      <ImageView />
      <TextView />
      <BigText />
    </View>
  );
};
