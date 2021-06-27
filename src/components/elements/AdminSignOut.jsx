/** @jsxImportSource @emotion/react */
import { AmplifySignOut } from "@aws-amplify/ui-react";
import React from "react";
import { css } from "@emotion/react";

const signoutContainer = `
    position:absolute;
    right:0px;
    button.button {
        min-width:100px !important;
        width:100px !important;
        height:60px;
    }
`;

function AdminSignOut() {
   return (
      <div
         css={css`
            ${signoutContainer}
         `}>
         <AmplifySignOut />
      </div>
   );
}
export default AdminSignOut;
