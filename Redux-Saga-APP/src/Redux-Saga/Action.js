import {
  FETCH_IP_DATA_REQUEST,
  FETCH_IP_DATA_SUCCESS,
  FETCH_IP_DATA_FAILURE,
} from "./types";

export const fetchDataIPRequest = () => {
  return {
    type: FETCH_IP_DATA_REQUEST,
  };
};

export const fetchDataIPSuccess = (dataIP) => {
  return {
    type: FETCH_IP_DATA_SUCCESS,
    payload: dataIP,
  };
};

export const fetchDataIPFailure = (error) => {
  return {
    type: FETCH_IP_DATA_FAILURE,
    payload: error,
  };
};
