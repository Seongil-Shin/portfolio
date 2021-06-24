//액션 타입
const OPEN = "OPEN";
const CLOSE = "CLOSE";

//액션 생성 함수
export const open = (message) => {
   return { type: OPEN, value: message };
};
export const close = () => ({ type: CLOSE });

const initialState = { open: false, message: "" };

export default function snackBar(state = initialState, action) {
   switch (action.type) {
      case OPEN:
         return { open: true, message: action.value };
      case CLOSE:
         return { message: "", open: false };
      default:
         return state;
   }
}
