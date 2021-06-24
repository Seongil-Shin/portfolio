import { combineReducers } from "redux";
import pageIndex, { counterSaga } from "./pageIndex";
import { all } from "redux-saga/effects";
import snackBar from "./snackBar";

const rootReducer = combineReducers({ pageIndex, snackBar });

export function* rootSaga() {
   yield all([counterSaga()]);
}

export default rootReducer;
