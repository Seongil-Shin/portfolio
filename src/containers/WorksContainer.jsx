import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Works from "../components/Works";
import { getProjectList } from "../lib/api/project";

function WorksContainer() {
   const [list, setList] = useState([]);

   useEffect(() => {
      //읽어오기
      const getList = async () => {
         try {
            const res = await getProjectList();
            setList(res.data.listProjects.items);
         } catch (err) {
            console.log(err);
         }
      };
      getList();
   }, []);
   return <Works list={list} />;
}
export default WorksContainer;
