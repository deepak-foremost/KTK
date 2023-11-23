import React, {useEffect, useState} from 'react';
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
import dropdown from '../appimages/dropup.png';
import dropUp from '../appimages/dropdown.png';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import {getFaqs} from '../networking/CallApi';
import {VellyItems} from './MackenzieValley';

// const list = [
//   {
//     id: 0,
//     title: 'What is Sahtú Article and how does it work ?',
//     show: false,
//     detail:
//       'Sahtú Article is a news app that provides you with the latest and  most relevant news articles from various sources. Our app uses advanced algorithms to curate and deliver personalized news content based on your interests and preferences ',
//   },
//   {
//     id: 1,
//     title: 'What is Shathu Article and how does it work ?',
//     show: false,
//     detail:
//       'Sahtú Article is a news app that provides you with the latest and  most relevant news articles from various sources. Our app uses advanced algorithms to curate and deliver personalized news content based on your interests and preferences ',
//   },
//   {
//     id: 2,
//     title: 'What is Shathu Article and how does it work ?',
//     show: false,
//     detail:
//       'Sahtú Article is a news app that provides you with the latest and  most relevant news articles from various sources. Our app uses advanced algorithms to curate and deliver personalized news content based on your interests and preferences ',
//   },
//   {
//     id: 3,
//     title: 'What is Shathu Article and how does it work ?',
//     show: false,
//     detail:
//       'Sahtú Article is a news app that provides you with the latest and  most relevant news articles from various sources. Our app uses advanced algorithms to curate and deliver personalized news content based on your interests and preferences ',
//   },
// ];

const Faqs = ({navigation}) => {
  const [itemid, setItemid] = useState(-1);
  const [show, setShow] = useState(true);
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  var imgSrc = itemid == -1 ? dropdown : dropUp;

  useEffect(() => {
    setLoading(true);
    getFaqs({}, response => {
      setList(response.data);
      setLoading(false);
    });
  }, []);

  showhidetextcomponentview = id => {
    this.setstate({
      replyboxshowid: id,
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          height: 55,
          paddingHorizontal: 15,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: '#FFF200',
            justifyContent: 'center',
            height: 35,
            width: 35,
            position: 'absolute',
            left: 15,
          }}
          onPress={() => RootNavigation.goBack()}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/backicon.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,

            textAlign: 'center',
            fontFamily: fonts.frutigebold,
            marginVertical: 10,
          }}>
          FAQs
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>
      {/* <ScrollView>
        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal:15,
            
            paddingVertical: 20,
            marginTop: 15,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500',textAlign:'center'}}>
            What is Shatu Article and how does it work?
          </Text>
          <Image
            style={{alignSelf: 'center',marginHorizontal:10}}
            source={require('../appimages/dropdown.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500',}}>
            What is Shatu Article and how does it work?
          </Text>
          <Image
            style={{alignSelf: 'center', width: 6, height: 10}}
            source={require('../appimages/dropup.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#F5F5F5',
            
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'black',
              lineHeight: 20,
            }}>
            Shatu Article is a news app that provides you with the latest and
            most relevant news articles from various sources. Our app uses
            advanced algorithms to curate and deliver personalized news content
            based on your interests and preferences.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            What is Shatu Article and how does it work?
          </Text>
          <Image
            style={{alignSelf: 'center',marginHorizontal:10}}
            source={require('../appimages/dropdown.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal:15,
            
            paddingVertical: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500',textAlign:'center'}}>
            What is Shatu Article and how does it work?
          </Text>
          <Image
            style={{alignSelf: 'center',marginHorizontal:10}}
            source={require('../appimages/dropdown.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal:15,
            
            paddingVertical: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500',textAlign:'center'}}>
            What is Shatu Article and how does it work?
          </Text>
          <Image
            style={{alignSelf: 'center',marginHorizontal:10}}
            source={require('../appimages/dropdown.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal:15,
            
            paddingVertical: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500',textAlign:'center'}}>
            What is Shatu Article and how does it work?
          </Text>
          <Image
            style={{alignSelf: 'center',marginHorizontal:10}}
            source={require('../appimages/dropdown.png')}
          />
        </View>
      </ScrollView> */}

      {isLoading && (
        <View style={{}}>
          <VellyItems />
          <VellyItems />
          <VellyItems />
          <VellyItems />
        </View>
      )}

      <FlatList
        style={{backgroundColor: 'white', paddingTop: 10}}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({item, index}) => (
          <View style={{backgroundColor: '#F5F5F5', marginTop: 10}}>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                paddingVertical: 15,
                flexDirection: 'row',
              }}
              onStartShouldSetResponder={() =>
                itemid == index ? setItemid(-1) : setItemid(index)
              }>
              <View style={{marginRight: 30, marginLeft: 15}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: fonts.frutigebold,
                  }}>
                  {item.question}
                </Text>
              </View>

              <Image
                style={{alignSelf: 'center', position: 'absolute', right: 15}}
                source={itemid == index ? dropdown : dropUp}
              />
            </View>
            {itemid == index ? (
              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  paddingHorizontal: 15,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: fonts.frutigebold,
                    color: 'black',
                    lineHeight: 20,
                  }}>
                  {item.answer}
                </Text>
              </View>
            ) : null}
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Faqs;
