import { combineReducers } from "redux";
import dataIPReducer from "./redux-saga/Reducer";

const rootReducer = combineReducers({
  data: dataIPReducer,
});

export default rootReducer;
