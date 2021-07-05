import { combineReducers } from "redux";
import pageIndex from "./pageIndex";
import { all } from "redux-saga/effects";
import snackBar from "./snackBar";
import auth from "./auth";
import profile, { profileSaga } from "./profile";
import projects, { projectsSaga } from "./projects";
import isMobileReducer from "./isMobile";

const rootReducer = combineReducers({
   pageIndex,
   snackBar,
   auth,
   profile,
   projects,
   isMobileReducer,
});

export function* rootSaga() {
   yield all([profileSaga(), projectsSaga()]);
}

export default rootReducer;
