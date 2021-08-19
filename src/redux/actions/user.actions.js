import { LOGIN_SUCCESS, LOGOUT } from "../../constants";
import { URL_API_LOGIN, URL_API_SIGN_UP } from "../../constants/environment";

import { AsyncStorage } from "react-native";

export const userLogin = ({ name }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    name,
  },
});

export const userLogout = () => ({
  type: LOGOUT,
  payload: {}
});

export const signUpPending = () => ({
  type: SIGN_UP_PENDING
});

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE
});

export const signUpSuccess = (name) => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    name
  }
});

var STORAGE_KEY = "id_token";

export const login = (credentials) => async (dispatch) => {
  const response = await fetch(URL_API_LOGIN, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: credentials.password,
      username: credentials.name,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (validateLoginResponse(json)) {
        onValueChange(STORAGE_KEY, json.token),
          dispatch(userLogin({ ...json, name: json.user }));
      } else {
        console.log("Login Failed", "Username or Password is incorrect");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signUp = (credentials) => async (dispatch) => {
  const response = await fetch(URL_API_SIGN_UP, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      confirmPassword: credentials.confirmPassword,
      password: credentials.password,
      email: credentials.email
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (validateLoginResponse(json)) {
        onValueChange(STORAGE_KEY, json.token),
          dispatch(userLogin({ ...json, name: json.user }));
      } else {
        console.log("Login Failed", "Username or Password is incorrect");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

function validateLoginResponse(json) {
  return json != null;
}

async function onValueChange(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log("AsyncStorage error: " + error.message);
  }
}

export const logout = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.log("AsyncStorage error: " + error.message);
  }
  dispatch(userLogout());
};
