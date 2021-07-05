//액션 타입
const ISMOBILE = "IS_MOBILE";
const ISNORMOBILE = "IS_NOT_MOBILE";

//액션 생성 함수
export const isMobile = () => ({ type: ISMOBILE });
export const isNotMobile = () => ({ type: ISNORMOBILE });

const initialState = { isMobile: false };

export default function isMobileReducer(state = initialState, action) {
   switch (action.type) {
      case ISMOBILE:
         return { isMobile: true };
      case ISNORMOBILE:
         return { isMobile: false };
      default:
         return state;
   }
}
