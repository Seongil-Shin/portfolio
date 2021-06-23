/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";

const ShortBrief = `
    width:50%;
    height:100vh;
`;
const HeaderStyle = `
    position :absolute;
    top : 15vh;
`;
function Profile() {
   return (
      <div>
         {" "}
         <div
            css={css`
               ${ShortBrief}
            `}>
            <h3
               css={css`
                  ${HeaderStyle}
               `}>
               스스로 성취감을 느끼는 개발자 신성일입니다.
            </h3>
         </div>
      </div>
   );
}
export default Profile;
