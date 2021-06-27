import { combineReducers } from "redux";
import pageIndex, { counterSaga } from "./pageIndex";
import { all } from "redux-saga/effects";
import snackBar from "./snackBar";
import auth from "./auth";

const rootReducer = combineReducers({ pageIndex, snackBar, auth });

export function* rootSaga() {
   yield all([counterSaga()]);
}

export default rootReducer;
