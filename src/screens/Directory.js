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
  StyleSheet,
  Dimensions,
} from 'react-native';
import dropdown from '../appimages/spinup.png';
import dropUp from '../appimages/spindown.png';
import fonts from '../utils/FontUtils';
import * as RootNavigation from '../utils/RootNavigation';
import {CallApi, getDirectory} from '../networking/CallApi';
import {Apis, Request_Type} from '../networking/Apis';
import RenderHTML from 'react-native-render-html';
import {VellyItems} from './MackenzieValley';

const list = [
  {
    id: 0,
    article: 'NEWS ARTICLE',
    data: [
      'P.O.BOX 155',
      'Délı̨nę,NT X0E 0G0',
      'CANADA',
      'Tel: (867) 589-4719',
      'Fax: (867) 589-4908',
    ],
  },
  {
    id: 1,
    article: 'Health & Wellness',
    //var [check,setDown]=useState(false),
    data: [
      'P.O.BOX 155',
      'Délı̨nę,NT X0E 0G0',
      'CANADA',
      'Tel: (867) 589-4719',
      'Fax: (867) 589-4908',
    ],
  },
  {
    id: 2,
    article: 'Travel & Adventure',
    data: [
      'P.O.BOX 155',
      'Délı̨nę,NT X0E 0G0',
      'CANADA',
      'Tel: (867) 589-4719',
      'Fax: (867) 589-4908',
    ],
  },
];

const items = [
  {
    id: 0,
    article: 'News Article',
    data: [{}],
  },
];

// const data = [
//   {
//     id: 0,
//     box: 'P.O.BOX 155',
//     Deline: 'Deline,NT X0E 0G0',
//     country: 'CANADA',
//     Tel: 'Tel: (867) 589-4719',
//     Fax: 'Fax: (867) 589-4908',
//   },
//   {
//     id: 1,
//     box: 'P.O.BOX 155',
//     Deline: 'Deline,NT X0E 0G0',
//     country: 'CANADA',
//     Tel: 'Tel: (867) 589-4719',
//     Fax: 'Fax: (867) 589-4908',
//   },
//   {
//     id: 2,
//     box: 'P.O.BOX 155',
//     Deline: 'Deline,NT X0E 0G0',
//     country: 'CANADA',
//     Tel: 'Tel: (867) 589-4719',
//     Fax: 'Fax: (867) 589-4908',
//   },
// ];

const Directory = ({navigation}) => {
  const [show, setShow] = useState(true);
  const [itemid, setItemid] = useState(-1);
  const [directories, setDirectory] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const onLodeMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    LoadData();
  }, []);

  const LoadData = () => {
    const params = {
      page: page,
    };
    getDirectory(
      params,
      response => {
        setTotalPage(response?.last_page);
        if (!response.status) {
        } else {
          var list = directories == null ? [] : [...directories];
          if (page == 1) {
            setDirectory(response?.data);
            console.log('not', response?.data);
          } else {
            setDirectory([...list, ...response?.data]);
          }
          setLoading(false);
        }
      },
      response => {
        console.log('fasils', response?.data);
      },
    );
  };

  var ViewColor = itemid == -1 ? '#FFEBDC' : '#F2CAAC';

  // useEffect(() => {
  //   getDirectory(
  //     {},
  //     onSuccess => {
  //       console.log('onSuccess---->', onSuccess);
  //       setDirectory(onSuccess?.data);
  //     },
  //     onFailure => {
  //       console.log('onFailure---->', onFailure);
  //     },
  //   );
  // }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 15,
          height: 55,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
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
          Directory
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: '#E8E4E4'}}></View>
      {/* <ScrollView>
        <View
          style={{
            backgroundColor: '#F2CAAC',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 15,
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginTop: 15,
          }}
          onStartShouldSetResponder={() => setShow(!show)}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>News Article</Text>
          <Image
            // onStartShouldSetResponder={()=> setShow(!show)}

            style={{alignSelf: 'center'}}
            source={imgSource}
          />
        </View>
        <View style={{backgroundColor: 'white', height: 1}}></View>
        {show ? (
          <View
            style={{
              backgroundColor: '#F2CAAC',
              marginHorizontal: 15,
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}
            onStartShouldSetResponder={() => setShow(!show)}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: 'black',
                lineHeight: 20,
              }}>
              P.O. Box 155{'\n'}Deline, NT X0E 0G0{'\n'}CANADA{'\n'}Tel: (867)
              589-4719{'\n'}Fax: (867) 589-4908
            </Text>
          </View>
        ) : null}

        <View
          style={{
            backgroundColor: '#FFEBDC',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 15,
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginTop: 15,
          }}
          onStartShouldSetResponder={() => setShow(!show)}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>
            Health & Wellness
          </Text>
          <Image style={{alignSelf: 'center'}} source={imgSource} />
        </View>
        <View style={{backgroundColor: 'white', height: 1}}></View>
        {show ? (
          <View
            style={{
              backgroundColor: '#F2CAAC',
              marginHorizontal: 15,
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: 'black',
                lineHeight: 20,
              }}>
              P.O. Box 155{'\n'}Deline, NT X0E 0G0{'\n'}CANADA{'\n'}Tel: (867)
              589-4719{'\n'}Fax: (867) 589-4908
            </Text>
          </View>
        ) : null}

        <View
          style={{
            backgroundColor: '#FFEBDC',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 15,
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginTop: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>
            Travel & Adventure
          </Text>
          <Image
            style={{alignSelf: 'center', width: 6, height: 10}}
            source={imgSource}
          />
        </View>

        <View style={{backgroundColor: 'white', height: 1}}></View>
        {show ? (
          <View
            style={{
              backgroundColor: '#F2CAAC',
              marginHorizontal: 15,
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: 'black',
                lineHeight: 20,
              }}>
              P.O. Box 155{'\n'}Deline, NT X0E 0G0{'\n'}CANADA{'\n'}Tel: (867)
              589-4719{'\n'}Fax: (867) 589-4908
            </Text>
          </View>
        ) : null}
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
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}
        data={directories}
        onEndReachedThreshold={0.6}
        onEndReached={() => {
          onLodeMore();
        }}
        renderItem={({item, index}) => (
          <View style={{}}>
            <View
              style={{
                backgroundColor: itemid == index ? '#F2CAAC' : '#FFEBDC',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 15,
                paddingHorizontal: 10,
                paddingVertical: 20,
                marginTop: 15,
              }}
              onStartShouldSetResponder={() =>
                itemid == index ? setItemid(-1) : setItemid(index)
              }>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: fonts.frutigebold,
                  color: 'black',
                }}>
                {item.title}
              </Text>

              <Image
                style={{alignSelf: 'center'}}
                source={itemid == index ? dropdown : dropUp}
              />
            </View>
            <View style={{height: 1}}></View>
            {itemid == index ? (
              <View
                style={{
                  backgroundColor: itemid == index ? '#F2CAAC' : '#FFEBDC',
                  marginHorizontal: 15,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                {/* <Text
                  style={{
                    fontSize: 12,
                    fontFamily: fonts.frutigebold,
                    color: 'black',
                    lineHeight: 20,
                  }}> */}
                {/* {item.data.at(0) +
                    '\n' +
                    item.data.at(1) +
                    '\n' +
                    item.data.at(2) +
                    '\n' +
                    item.data.at(3) +
                    '\n' +
                    item.data.at(4) +
                    '\n'} */}

                {/* {item.description}
                </Text> */}
                <RenderHTML
                  contentWidth={Dimensions.get('window').width}
                  tagsStyles={{body: {color: 'black', lineHeight: 20}}}
                  source={{html: item.description}}
                />
              </View>
            ) : null}
          </View>
        )}
      />

      {/* <SectionList
        sections={list}
        renderItem={({item,index}) =>
          itemid === index ? (
            <View
              style={{
                paddingTop: index == 0 ? 15 : 0 ,
                backgroundColor: ViewColor,
                marginHorizontal: 15,
                paddingHorizontal: 10,
              }}>
              <Text style={{fontSize: 14}}>{item}</Text>
            </View>
          ) : null
        }
        renderSectionHeader={({section: {article,index}}) => (
          <View>
          <View
            style={{
              backgroundColor:ViewColor,
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 15,
              paddingHorizontal: 10,
              paddingVertical: 20,
              marginTop: 15,
            }}
            onStartShouldSetResponder={() => console.warn(index)}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>{article}</Text>
            <Image style={{alignSelf: 'center'}} source={imgSource} />
          </View>
          <View style={{backgroundColor: 'white', height: 1.5}}></View>
          </View>
        )}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fade: {},
});
export default Directory;
