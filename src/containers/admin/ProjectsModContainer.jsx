import React, { useState } from "react";
import { useEffect } from "react";
import ProjectsModification from "../../components/ProjectsModification";
import {
   createProjectFunc,
   DeleteProject,
   getProjectList,
   updateProjectFunc,
} from "../../lib/api/project";

function ProjectsModContainer() {
   const [onMod, setOnMod] = useState(["", ""]);
   const [data, setData] = useState({});
   const [list, setList] = useState([]);
   const [refrash, setRefresh] = useState(0);

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
   }, [refrash]);

   useEffect(() => {
      const callDeleteApi = async (id) => {
         try {
            console.log(id);
            const res = await DeleteProject(id);
            return res;
         } catch (err) {
            console.log(err);
         }
      };
      if (onMod[0] === "delete") {
         callDeleteApi(onMod[1]);
         afterMutate();
      } else if (onMod[0] === "update") {
         setData({ ...onMod[1] });
         console.log("das");
      }
   }, [onMod, data]);

   const onChangeData = (e, type) => {
      if (type === "image") {
         if (e === null) {
            setData((prev) => ({
               ...prev,
               image: null,
               imageKey:
                  typeof prev.image === "string" ? prev.image : prev.imageKey,
            }));
         } else {
            setData((prev) => ({
               ...prev,
               image: e.target.files[0],
               imageKey:
                  typeof prev.image === "string" ? prev.image : prev.imageKey,
            }));
         }
      } else {
         setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }
   };
   const afterMutate = () => {
      setRefresh((prev) => prev + 1);
      setData({});
      setOnMod(["", ""]);
   };

   const mutate = async () => {
      if (onMod[0] === "add") {
         try {
            await createProjectFunc(data);
            afterMutate();
         } catch (err) {
            console.log(err);
         }
      } else if (onMod[0] === "update") {
         try {
            await updateProjectFunc(data);
            afterMutate();
         } catch (err) {
            console.log(err);
         }
      }
   };

   return (
      <ProjectsModification
         list={list}
         setOnMod={setOnMod}
         onMod={onMod}
         onChangeData={onChangeData}
         data={data}
         mutate={mutate}
      />
   );
}
export default ProjectsModContainer;
