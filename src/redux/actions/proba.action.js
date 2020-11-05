import {
  GET_PROBA_POINTS,
  GET_PROBA_POINTS_FAILURE,
  GET_PROBA_POINTS_SUCCESS
} from '../constants';
import { AsyncStorage } from 'react-native';


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
    return { 'Authorization': 'Bearer ' + token };
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
      const response = await fetch('http://192.168.0.107:8080/my-last-proba-points',
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