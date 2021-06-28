import React, { useState } from "react";
import TemporaryDrawer from "../../components/elements/TemporaryDrawer";
import LandingModContainer from "./LandingModContainer";
import ProfileModContainer from "./ProfileModContainer";
import ProjectsModContainer from "./ProjectsModContainer";

function AdminContainer({ user }) {
   const [page, setPage] = useState("Landing");

   return (
      <div>
         <TemporaryDrawer setPage={setPage} />
         {page !== "Projects" ? (
            page !== "Profile" ? (
               <LandingModContainer />
            ) : (
               <ProfileModContainer />
            )
         ) : (
            <ProjectsModContainer user={user} />
         )}
      </div>
   );
}
export default AdminContainer;
