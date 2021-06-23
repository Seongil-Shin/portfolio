import { combineReducers } from "redux";
import pageIndex, { counterSaga } from "./pageIndex";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ pageIndex });

export function* rootSaga() {
   yield all([counterSaga()]);
}

export default rootReducer;
