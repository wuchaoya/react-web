import WebHost from '../common/WebHost';

export default class HttpUitl {
  static Post (path, parameter, callbackSuccess, callbackError) {
    fetch(WebHost + path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parameter)
    }).then((response) => {
      return response.json();
    }).then((responseJson) => {
      callbackSuccess(responseJson);
    }).catch((error) => {
      callbackError(error);
    });
  }
  static Get (path, parameter, callbackSuccess, callbackError) {
    fetch(path + parameter).then((response) => {
      return response.json();
    }).then((responseJson) => {
      callbackSuccess(responseJson);
    }).catch((error) => {
      callbackError(error);
    });
  }
};
