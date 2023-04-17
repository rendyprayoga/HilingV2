import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ipReducer from "./Reducer";

const middleware = [thunk];

const store = createStore(ipReducer, applyMiddleware(...middleware));

export default store;
