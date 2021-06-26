import React, { useState } from "react";
import TemporaryDrawer from "../../components/elements/TemporaryDrawer";
import LandingModContainer from "./LandingModContainer";
import ProfileModContainer from "./ProfileModContainer";
import ProjectsModContainer from "./ProjectsModContainer";

function AdminContainer() {
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
            <ProjectsModContainer />
         )}
      </div>
   );
}
export default AdminContainer;
