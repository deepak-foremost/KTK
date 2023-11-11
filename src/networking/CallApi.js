import {Keyboard} from 'react-native';
import {Apis, Request_Type} from './Apis';

export const getDirectory = (params, onSuccess, onFailure) => {
  CallApi(
    `${Apis.GET_DIRECTORY}`,
    Request_Type.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getNews = (params, onSuccess, onFailure) => {
  CallApi(`${Apis.GET_NEWS}`, Request_Type.get, params, onSuccess, onFailure);
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

export const CallApi = async (url, method, params, onSuccess, onFailure) => {
  Keyboard.dismiss();

  var myHeaders = new Headers();

  //   var myHeaders = {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   };

  try {
    fetch(
      url,
      method == Request_Type.get
        ? {
            method: method,
            headers: myHeaders,
            params: params,
          }
        : {
            method: method,
            headers: myHeaders,
            body: params,
          },
    )
      .then(response => response.json())
      .then(json => {
        if (json?.code == 400) {
        } else {
          onSuccess(json);
        }
      })
      .catch(error => onFailure(error));
  } catch (error) {
    onFailure(error);
  }
};
