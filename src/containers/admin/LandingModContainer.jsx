import React, { useEffect, useState } from "react";
import LandingModification from "../../components/LandingModification";
import { getLandingStrings, updateLandingStrings } from "../../lib/api/landing";

function LandingModContainer() {
   const [strings, setStrings] = useState(["", ""]);
   const [id, setId] = useState();
   const [success, setSuccess] = useState(false);

   useEffect(() => {
      const getData = async () => {
         await getLandingStrings()
            .then((res) => {
               setStrings(res.data.listLandings.items[0].lines);
               setId(res.data.listLandings.items[0].id);
            })
            .catch((err) => {
               console.log(err);
            });
      };
      getData();
   }, []);
   const modify = () => {
      updateLandingStrings({ id: id, lines: strings }).then(() => {
         setSuccess(true);
      });
   };

   const onChange = (string, index) => {
      if (index === 0) {
         setStrings((prev) => [string, prev[1]]);
      } else {
         setStrings((prev) => [prev[0], string]);
      }
      setSuccess(false);
   };

   return (
      <LandingModification
         strings={strings}
         onChange={onChange}
         success={success}
         modify={modify}
      />
   );
}
export default LandingModContainer;
