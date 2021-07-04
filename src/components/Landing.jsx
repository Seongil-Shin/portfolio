/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typewriter from "typewriter-effect";
import mediaquery from "../lib/styles/mediaquery";

const container = `
   text-align:center;
   margin-top:30vh;
   margin-right:0px;

   ${mediaquery.under1280}
`;

function Landing({ strings }) {
   const [startSecond, setStartSecond] = useState(false);

   return (
      <div
         css={css`
            ${container}
         `}>
         {strings[0] && (
            <Typewriter
               onInit={(typewriter) => {
                  typewriter
                     .typeString(`<h1>${strings[0]}</h1>`)
                     .callFunction(() => {
                        setStartSecond(true);
                     })
                     .stop()
                     .start();
               }}
               options={{ cursor: "" }}
            />
         )}
         {startSecond && (
            <Typewriter
               onInit={(typewriter) => {
                  if (startSecond) {
                     typewriter
                        .pauseFor(50)
                        .typeString(`<h1>${strings[1]}</h1>`)
                        .stop()
                        .start();
                  }
               }}
               options={{ cursor: "" }}
            />
         )}
      </div>
   );
}
export default Landing;
