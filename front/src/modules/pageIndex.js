import { put, takeLatest } from "redux-saga/effects";

//액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CAN_ENTER = "CAN_ENTER";
const CANT_ENTER = "CANT_ENTER";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

//액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });
export const canEnter = () => ({ type: CAN_ENTER });
export const cantEnter = () => ({ type: CANT_ENTER });

function* increaseSaga() {
   yield put(increase());
}

function* decreaseSaga() {
   yield put(decrease());
}

export function* counterSaga() {
   yield takeLatest(INCREASE_ASYNC, increaseSaga);
   yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

export default function pageIndex(state = initialState, action) {
   switch (action.type) {
      case INCREASE:
         if (state >= 2) {
            return state;
         }
         return state + 1;
      case DECREASE:
         if (state <= 0) {
            return state;
         }
         return state - 1;
      default:
         return state;
   }
}
