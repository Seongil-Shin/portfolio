import React from "react";
import Profile from "../components/Profile";

const profile = {
   image: "https://t1.daumcdn.net/cfile/tistory/240814485574155029",
};

function ProfileContainer() {
   return <Profile data={profile} />;
}
export default ProfileContainer;
