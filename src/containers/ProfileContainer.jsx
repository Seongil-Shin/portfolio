import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Profile from "../components/Profile";
import MobileProfile from "../components/MobileProfile";

function ProfileContainer() {
   const [data, setData] = useState({});
   const isMobile = useSelector(
      ({ isMobileReducer }) => isMobileReducer.isMobile
   );
   const profile = useSelector(({ profile }) => profile);

   useEffect(() => {
      setData(profile);
   }, [profile]);

   return (
      <>{isMobile ? <MobileProfile data={data} /> : <Profile data={data} />}</>
   );
}
export default ProfileContainer;
