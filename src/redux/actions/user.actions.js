import {
  LOGIN_SUCCESS,
  LOGOUT
} from '../constants';
import { AsyncStorage } from 'react-native';

export const userLogin = ({ name }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    name,
  },
})

export const userLogout = () => ({
  type: LOGOUT,
  payload: {},
})

var STORAGE_KEY = 'id_token';

export const login = (credentials) => async dispatch => {

  const response = await fetch("http://192.168.0.107:8080/login", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "password": credentials.password,
      "username": credentials.name
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (validateLoginResponse(json)) {
        onValueChange(STORAGE_KEY, json.token),
        dispatch(userLogin({ ...json, name: json.user }));
      } else {
        console.log('Login Failed', 'Username or Password is incorrect');
      }
    })
    .catch((err) => {
      console.log(err);
    });

};

function validateLoginResponse(json) {
  return json != null;
};

async function onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  };

  export const logout = () => async dispatch => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
    dispatch(userLogout());
  };
