import { put, takeLatest, call } from "Redux-Saga/effects";
import {
  FETCH_IP_DATA_REQUEST,
  FETCH_IP_DATA_SUCCESS,
  FETCH_IP_DATA_FAILURE,
} from "./types";
import { fetchDataIP } from "../Api";

function* fetchDataIPSaga() {
  try {
    yield put({ type: FETCH_IP_DATA_REQUEST });
    const response = yield call(fetchDataIP); // Calling API fetch Data IP
    yield put({ type: FETCH_IP_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_IP_DATA_FAILURE, payload: error.message });
  }
}

export function* watchFetchIpData() {
  yield takeLatest(FETCH_IP_DATA_REQUEST, fetchDataIPSaga);
}
