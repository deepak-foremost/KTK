import React, {useState} from 'react';
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
import dropdown from '../appimages/dropdown.png';
import dropUp from '../appimages/spinnerdown.png';

const list = [
  {
    id:0,
    title: 'What is Shathu Article and how does it work ?',
    show:false,
    detail:
      'Shatu Article is a news app that provides you with the latest and  most relevant news articles from various sources. Our app uses advanced algorithms to curate and deliver personalized news content based on your interests and preferences ',
  },
  {
    id:1,
    title: 'What is Shathu Article and how does it work ?',
    show:false,
    detail:
      'Shatu Article is a news app that provides you with the latest and  most relevant news articles from various sources. Our app uses advanced algorithms to curate and deliver personalized news content based on your interests and preferences ',
  },
  {
    id:2,
    title: 'What is Shathu Article and how does it work ?',
    show:false,
    detail:
      'Shatu Article is a news app that provides you with the latest and  most relevant news articles from various sources. Our app uses advanced algorithms to curate and deliver personalized news content based on your interests and preferences ',
  },
  {
    id:3,
    title: 'What is Shathu Article and how does it work ?',
    show:false,
    detail:
      'Shatu Article is a news app that provides you with the latest and  most relevant news articles from various sources. Our app uses advanced algorithms to curate and deliver personalized news content based on your interests and preferences ',
  },
];

const Faqs = ({navigation}) => {
  const [itemid,setItemid]=useState(-1);
  const [show, setShow] = useState(true);
  var imgSrc = itemid == -1 ? dropdown : dropUp;

  showhidetextcomponentview = (id) =>{
    this.setstate({
      replyboxshowid : id
    })
 }

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 20,
          paddingHorizontal: 15,
          backgroundColor:'white'
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF200',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../appimages/backicon.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            flex: 1,
            textAlign: 'center',
            fontFamily:'Poppins-Medium',
            marginVertical: 10,
          }}>
          FAQs
        </Text>
      </View>
      <View
        style={{height: 1, backgroundColor: '#E8E4E4', }}></View>
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

      <FlatList
      style={{backgroundColor:'white',paddingTop:10}}
        data={list}
        renderItem={({item,index}) => (
          <View style={{backgroundColor: '#F5F5F5', marginTop: 10}}>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                paddingVertical: 15,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
              onStartShouldSetResponder={() => itemid==item.id ? setItemid(-1) :  setItemid(item.id) }>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily:'Poppins-Medium',
                  marginHorizontal: 15,
                  flex: 1,
                }}>
                What is Shatu Article and how does it work ?
              </Text>
              <Image
                style={{alignSelf: 'center', marginRight: 30}}
                source={itemid == index ? dropUp : dropdown}
              />
            </View>
            { itemid==index  ? (
              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  paddingHorizontal: 15,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily:'Poppins-Regular',
                    color: 'black',
                    lineHeight: 20,
                  }}>
                  {item.detail}
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
