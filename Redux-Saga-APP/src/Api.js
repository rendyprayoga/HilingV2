import {
  fetchDataIPRequest,
  fetchDataIPSuccess,
  fetchDataIPFailure,
} from "./redux-saga/Action";
import axios from "axios";

export const fetchDataIP = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataIPRequest());
      const response = await axios.get("http://ip-api.com/json/");
      dispatch(fetchDataIPSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataIPFailure(error.message));
    }
  };
};
