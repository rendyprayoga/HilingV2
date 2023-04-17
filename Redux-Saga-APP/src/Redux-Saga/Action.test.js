import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import saga from "redux-saga";
import {
  fetchDataIPRequest,
  fetchDataIPSuccess,
  fetchDataIPFailure,
} from "./Action";
import { fetchDataIP } from "../Api";

const mockStore = configureMockStore([saga]);

describe("actions", () => {
  let mockAxios;
  beforeEach(() => {
    // membuat mock adapter sebelum dilakukan pengujain untuk axios
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    // mengatur menjadi state awal axios ketika salah satu pengujian selesai
    mockAxios.restore();
  });
  it("Requesting user IP", () => {
    const expectedAction = { type: "FETCH_IP_DATA_REQUEST" };
    expect(fetchDataIPRequest()).toEqual(expectedAction);
  });

  it("Requesting IP Successfull", () => {
    const IpData = { ip: "127.0.0.1" };
    const expectedAction = {
      type: "FETCH_IP_DATA_SUCCESS",
      payload: IpData,
    };
    expect(fetchDataIPSuccess(IpData)).toEqual(expectedAction);
  });

  it("Requesting IP Failure", () => {
    const error = "Error fetching IP";
    const expectedAction = {
      type: "FETCH_IP_DATA_FAILURE",
      payload: error,
    };
    expect(fetchDataIPFailure(error)).toEqual(expectedAction);
  });

  it("Sending Fetch IP (Request IP Success)", async () => {
    const ipData = { ip: "127.0.0.1" };
    const mock = mockAxios.onGet("http://ip-api.com/json/").reply(200, ipData);
    const store = mockStore();
    await store.dispatch(fetchDataIP());
    expect(store.getActions());
    mock.restore();
  });

  it("Sending Fetch IP (Request IP Failure)", async () => {
    const error = "Request failed, code 404";
    const response = { status: "fail", message: error };
    mockAxios.onGet("http://ip-api.com/json/1.1.1.1").replyOnce(404, response);
    const store = mockStore();
    await store.dispatch(fetchDataIP());
    expect(store.getActions());
  });
});
