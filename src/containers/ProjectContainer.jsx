import React from "react";
import { useSelector } from "react-redux";
import Project from "../components/Project";
import MobileProject from "../components/MobileProject";

function ProjectContainer({ data }) {
   const isMobile = useSelector(
      ({ isMobileReducer }) => isMobileReducer.isMobile
   );
   return (
      <>{isMobile ? <MobileProject data={data} /> : <Project data={data} />}</>
   );
}
export default ProjectContainer;
