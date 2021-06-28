import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { getProfileData } from "../lib/api/profile";

function ProfileContainer() {
   const [data, setData] = useState({});
   useEffect(() => {
      const getProfile = async () => {
         const res = await getProfileData();
         setData(res);
      };
      getProfile();
   }, []);

   return <Profile data={data} />;
}
export default ProfileContainer;
