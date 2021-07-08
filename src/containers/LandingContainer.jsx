import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Landing from "../components/Landing";
import { getLandingStrings } from "../lib/api/landing";

function LandingContainer() {
   const [strings, setStrings] = useState([]);

   useEffect(() => {
      const getData = async () => {
         await getLandingStrings()
            .then((res) => {
               //글자 크기는 32px, 띄어쓰기는 4px. 단어가 잘라질거 같으면 띄어쓰기 추가
               res.data.listLandings.items[0].lines.forEach((item) => {
                  let line = item.split(" ");
                  let winWidth = window.innerWidth;
                  let idx = 0;
                  for (let i of line) {
                     winWidth -= 32 * i.length + 4;
                     if (winWidth < 0) {
                        line[idx] = "<br />" + line[idx];
                        winWidth = window.innerWidth - (32 * i.length + 4);
                     }
                     idx++;
                  }
                  setStrings((prev) => [...prev, line.join(" ")]);
               });
            })
            .catch((err) => {
               console.log(err);
            });
      };
      getData();
   }, []);

   return <Landing strings={strings} />;
}
export default LandingContainer;
