import React from "react";
import { useLocation } from "react-router";
import ProjectContainer from "../containers/ProjectContainer";

function Project() {
   const location = useLocation();
   return <ProjectContainer data={location.state} />;
}
export default Project;
