import { call, put, takeLatest } from "redux-saga/effects";
import { getProfileData } from "../lib/api/profile";
//액션 타입
const GET_PROFILE = "GET_PROFILE";
const GET_PROFILE_ASYNC = "GET_PROFILE_ASYNC";

//액션 생성 함수
export const getProfileAction = () => ({ type: GET_PROFILE });

function* getProfile() {
   try {
      const res = yield call(getProfileData);
      yield put({ type: GET_PROFILE_ASYNC, payload: res });
   } catch (err) {
      console.log(err);
   }
}

export function* profileSaga() {
   yield takeLatest(GET_PROFILE, getProfile);
}

const initialState = {};

export default function profile(state = initialState, action) {
   switch (action.type) {
      case GET_PROFILE_ASYNC:
         return { ...action.payload };
      default:
         return state;
   }
}
