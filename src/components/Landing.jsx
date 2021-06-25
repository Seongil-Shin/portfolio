/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typewriter from "typewriter-effect";
import { getLandingStrings } from "../lib/api/landing";
import { useEffect } from "react";
const container = `
text-align:center;
margin-top:30vh;
`;

function Landing() {
   const [startSecond, setStartSecond] = useState(false);
   const [strings, setStrings] = useState(["", ""]);
   useEffect(() => {
      const getData = async () => {
         await getLandingStrings()
            .then((res) => {
               setStrings(res.data.listLandings.items[0].lines);
            })
            .catch((err) => {
               console.log(err);
            });
      };
      getData();
   }, []);
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
                        .pauseFor(100)
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
