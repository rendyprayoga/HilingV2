import axios from "axios";

export const fetchIPRequest = () => ({
  type: "FETCH_IP_REQUEST",
});

export const fetchIPSuccess = (data) => ({
  type: "FETCH_IP_SUCCESS",
  payload: data,
});

export const fetchIPFailure = (error) => ({
  type: "FETCH_IP_FAILURE",
  payload: error,
});

export const fetchIP = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchIPRequest());
      const response = await axios.get("http://ip-api.com/json/");
      dispatch(fetchIPSuccess(response.data));
    } catch (error) {
      dispatch(fetchIPFailure(error.message));
    }
  };
};
