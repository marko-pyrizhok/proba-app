import {
  LOGIN_SUCCESS,
  LOGOUT
} from '../constants';

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

export const login = (credentials) => async dispatch => {

  const response = await fetch("http://192.168.0.8:8080/login", {
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
}

