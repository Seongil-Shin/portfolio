//액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CAN_ENTER = "CAN_ENTER";
const CANT_ENTER = "CANT_ENTER";

//액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const canEnter = () => ({ type: CAN_ENTER });
export const cantEnter = () => ({ type: CANT_ENTER });

const initialState = 0;

export default function pageIndex(state = initialState, action) {
   switch (action.type) {
      case INCREASE:
         if (state >= 3) {
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
