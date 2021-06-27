/** @jsxImportSource @emotion/react */
import React from "react";
import { AmplifySignIn } from "@aws-amplify/ui-react";
import { css } from "@emotion/react";

const container = `
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const flex = `
    flex-basis:18vh;
`;

function AdminSignIn() {
   return (
      <div
         css={css`
            ${container}
         `}>
         <div
            css={css`
               ${flex}
            `}
         />
         <div
            css={css`
               ${flex}
            `}>
            <AmplifySignIn slot="sign-in" usernameAlias="username" hideSignUp />
         </div>
      </div>
   );
}
export default AdminSignIn;
