/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Typewriter from "typewriter-effect";
import mediaquery from "../lib/styles/mediaquery";

const container = `
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%, -50%);
   text-align:center;
   margin-right:0px;

   ${mediaquery.under1280}
`;

function Landing({ strings }) {
   return (
      <div
         css={css`
            ${container}
         `}>
         {strings[0] && strings[1] && (
            <Typewriter
               onInit={(typewriter) => {
                  typewriter
                     .typeString(`<h1>${strings[0]}</h1>`)
                     .pauseFor(40)
                     .typeString(`<br/>`)
                     .typeString(`<h1>${strings[1]}</h1>`)
                     .stop()
                     .start();
               }}
               options={{ cursor: "", delay: 60 }}
            />
         )}
      </div>
   );
}
export default Landing;
