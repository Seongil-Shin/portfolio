import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Profile from "../components/Profile";

function ProfileContainer() {
   const [data, setData] = useState({});
   const profile = useSelector(({ profile }) => profile);
   useEffect(() => {
      setData(profile);
   }, [profile]);

   return <Profile data={data} />;
}
export default ProfileContainer;
