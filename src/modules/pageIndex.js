//액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CAN_ENTER = "CAN_ENTER";
const CANT_ENTER = "CANT_ENTER";

//액션 생성 함수
export const increase = (doAnimation = true) => ({
   type: INCREASE,
   payload: doAnimation,
});
export const decrease = (doAnimation = true) => ({
   type: DECREASE,
   payload: doAnimation,
});
export const canEnter = () => ({ type: CAN_ENTER });
export const cantEnter = () => ({ type: CANT_ENTER });

const initialState = {
   index: 0,
   doAnimation: false,
};

export default function pageIndex(state = initialState, action) {
   switch (action.type) {
      case INCREASE:
         if (state.index >= 3) {
            return state;
         }
         return { index: state.index + 1, doAnimation: action.payload };
      case DECREASE:
         if (state.index <= 0) {
            return state;
         }
         return { index: state.index - 1, doAnimation: action.payload };
      default:
         return state;
   }
}
