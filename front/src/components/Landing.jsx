/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typewriter from "typewriter-effect";

const container = `
text-align:center;
margin-top:30vh;
`;

function Landing() {
   const [startSecond, setStartSecond] = useState(false);

   return (
      <div
         css={css`
            ${container}
         `}>
         <Typewriter
            onInit={(typewriter) => {
               typewriter
                  .typeString("<h1>스스로 성장하는 개발자가 되자.</h1>")
                  .callFunction(() => {
                     setStartSecond(true);
                  })
                  .stop()
                  .start();
            }}
            options={{ cursor: "" }}
         />
         {startSecond && (
            <Typewriter
               onInit={(typewriter) => {
                  if (startSecond) {
                     typewriter
                        .pauseFor(500)
                        .typeString(
                           "<h1>안녕하세요. 프론트엔드 개발자 신성일입니다.</h1>"
                        )
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
