import {
  GET_PROBA_POINTS,
  GET_PROBA_POINTS_FAILURE,
  GET_PROBA_POINTS_SUCCESS
} from '../constants';
import { AsyncStorage } from 'react-native';

import { 
  URL_API_GET_LAST_OPEN_PROBA_POINT_LIST,
  URL_API_MARK_PROBA_POINT
} from '../constants/environment';


export const getProbaPoints = () => ({
  type: GET_PROBA_POINTS,
})

export const getProbaPointsFailure = () => ({
  type: GET_PROBA_POINTS_FAILURE,
})

export const getProbaPointsSuccess = (points) => ({
  type: GET_PROBA_POINTS_SUCCESS,
  payload: points,
})

const getHeader = async () => {
  let token = '';
  try {
    token = await AsyncStorage.getItem("id_token") || 'none';
    return { 'Authorization': 'Bearer ' + token,
    Accept: 'application/json',
    'Content-Type': 'application/json', };
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
}

export function fetchProbaPoints() {
  return async (dispatch) => {
    const header = await getHeader();
    dispatch(getProbaPoints())

    try {
      const response = await fetch(URL_API_GET_LAST_OPEN_PROBA_POINT_LIST,
        {
          method: 'GET',
          headers: header
        }
      )
      const data = await response.json()

      dispatch(getProbaPointsSuccess(data))
    } catch (error) {
      dispatch(getProbaPointsFailure())
    }
  }
}

export function confirmProbaPoint(probaId, pointId) {
  return async (dispatch) => {
    const header = await getHeader();
    dispatch(getProbaPoints())
    try {
      const date = new Date();
      const response = await fetch(URL_API_MARK_PROBA_POINT,
        {
          method: 'POST',
          headers: header,
          body: JSON.stringify({
            'probaId': probaId,
            'pointId': pointId,
            'confirmDate': toYYYYMMDD(date)
          }),
        }
      )
      const data = await response.json();

      dispatch(getProbaPointsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  }
}

const toYYYYMMDD = (d) => {
  var yyyy = d.getFullYear().toString();
  var mm = (d.getMonth() + 101).toString().slice(-2);
  var dd = (d.getDate() + 100).toString().slice(-2);
  return `${yyyy}-${mm}-${dd}`;
}
