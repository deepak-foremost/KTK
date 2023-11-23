import {Keyboard, Platform} from 'react-native';
import {Apis, Request_Type} from './Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
export const getMenu = (params, onSuccess, onFailure) => {
  CallApi(`${Apis.GET_MENU}`, Request_Type.get, params, onSuccess, onFailure);
};

export const getDirectory = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_DIRECTORY}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getSetting = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_SETTINGS}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};



export const getMackenzieValley = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_MACKENZIE_VALLEY}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getNews = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_NEWS}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getNotification = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.NOTIFICATION}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getScholarships = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_SCHLOARSHIPS}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getClimateChange = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_CLMATE_CHANGE}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getReclamationCenter = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_RECLAMATION_CENTER}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getCalendar = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_CALENDAR}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getFaqs = (params, onSuccess, onFailure) => {
  CallApi(`${Apis.GET_FAQS}`, Request_Type.get, params, onSuccess, onFailure);
};

export const getGreatBear = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_GREAT_BEAR}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getNewsDetails = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_NEWS_DETAIL}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getSathuHeritage = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_SAHTU_HERITAGE}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const postHelp = (params, onSuccess, onFailure) => {
  CallApi(`${Apis.POST_HELP}`, Request_Type.post, params, onSuccess, onFailure);
};

export const sendFirebaseToken = async() => {
  let fcmToken = await AsyncStorage.getItem('fcm_token');
  CallApi(
    `${Apis.STORE_FIREBASE_ID}`, 
    Request_Type.post, 
    {device_type: Platform.OS,firebase_id: fcmToken},
    async onSuccess=>{
        await AsyncStorage.setItem(`isUnreadNotification`, `${onSuccess?.notification_unread_count}`)
    }
    );

    CallApi(
      `${Apis.GET_SETTINGS}`, 
      Request_Type.get, 
      {device_type: Platform.OS,firebase_id: fcmToken},
      async onSuccess=>{
        if(onSuccess?.status){
          await AsyncStorage.setItem(`getSetting`, JSON.stringify(onSuccess))}
      }
      );
}

export const CallApi = async (url, method, params, onSuccess, onFailure) => {
  Keyboard.dismiss();
  let fcmToken = await AsyncStorage.getItem('fcm_token');
  var myHeaders = new Headers();

  myHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  params = {
    ...params,
    device_type: Platform.OS,
    firebase_id: fcmToken,
    model_name: DeviceInfo?.getModel(),
    device_id: await DeviceInfo?.getUniqueId()
  }

  url = method == Request_Type.get ? getMethodUrl(url, params) : url
  console.log(`CHECK_URL`, url);
  if(method == Request_Type.post) {
    console.log(`CHECK_URL`, JSON.stringify(params));
  }

  try {
    fetch(
      url ,
      method == Request_Type.get
        ? {
            method: method,
            headers: myHeaders,
            params: params,
          }
        : {
            method: method,
            headers: myHeaders,
            body: JSON.stringify(params),
          },
    )
      .then(response => response.json())
      .then(json => {
        if (json?.code == 400) {
        } else {
          console.log(`RESPONSE`, JSON.stringify(json))
          onSuccess(json);
        }
      })
      .catch(error => onFailure(error));
  } catch (error) {
    onFailure(error);
  }
};


export const getMethodUrl = (url, body) => {
  if (body == null || body == NaN || body == "" || body == undefined) {
      return url;
  } else {
      var getUrl = "";

      let arrayOfBody = Object.entries(body).map(
          ([key, value]) => `${key}=${value}`
      );
      var bodyUrl = "";
      for (i in arrayOfBody) {
          if (bodyUrl == "") {
              bodyUrl = arrayOfBody[i];
          } else {
              bodyUrl = bodyUrl + "&" + arrayOfBody[i];
          }
      }
      getUrl = url + "?" + bodyUrl;

      return getUrl;
  }
}
