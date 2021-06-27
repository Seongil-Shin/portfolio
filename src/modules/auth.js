//액션 타입
const SIGNIN = "SIGNIN";
const SIGNOUT = "SIGNOUT";

//액션 생성 함수
export const signin = () => ({ type: SIGNIN });
export const signout = () => ({ type: SIGNOUT });

const initialState = { signined: false };

export default function auth(state = initialState, action) {
   switch (action.type) {
      case SIGNIN:
         return { signined: true };
      case SIGNOUT:
         return { signined: false };
      default:
         return state;
   }
}
