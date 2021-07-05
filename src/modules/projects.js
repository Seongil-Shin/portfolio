import { call, put, takeLatest } from "redux-saga/effects";
import { getProjectList } from "../lib/api/project";

//액션 타입
const GET_PROJECT = "GET_PROJECT";
const GET_PROJECT_ASYNC = "GET_PROJECT_ASYNC";

//액션 생성 함수
export const getProjectsAction = () => ({ type: GET_PROJECT });

function* getProjects() {
   try {
      const res = yield call(getProjectList);
      yield put({
         type: GET_PROJECT_ASYNC,
         payload: res.data.listProjects.items,
      });
   } catch (err) {
      console.log(err);
   }
}

export function* projectsSaga() {
   yield takeLatest(GET_PROJECT, getProjects);
}

const initialState = {};

export default function projects(state = initialState, action) {
   switch (action.type) {
      case GET_PROJECT_ASYNC:
         return [...action.payload];
      default:
         return state;
   }
}
