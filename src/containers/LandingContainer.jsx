import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Landing from "../components/Landing";
import { getLandingStrings } from "../lib/api/landing";

function LandingContainer() {
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

   return <Landing strings={strings} />;
}
export default LandingContainer;
