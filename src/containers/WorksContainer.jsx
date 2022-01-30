import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Works from "../components/Works";

function WorksContainer() {
   const [list, setList] = useState([]);
   const projects = useSelector(({ projects }) => projects);

   useEffect(() => {
      setList(projects);
   }, [projects]);

   return <Works list={list} />;
}
export default WorksContainer;
