import React, { useState } from "react";
import { useEffect } from "react";
import ProjectsModification from "../../components/ProjectsModification";
import {
   createProjectFunc,
   DeleteProject,
   getProjectList,
   updateProjectFunc,
} from "../../lib/api/project";

function ProjectsModContainer({ user }) {
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
      const callDeleteApi = async (data) => {
         try {
            const res = await DeleteProject(data);
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
      }
   }, [onMod]);

   const onChangeData = (e) => {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const onAddImage = (e) => {
      setData((prev) => ({
         ...prev,
         images: prev.images
            ? prev.images.concat([e.target.files[0]])
            : [e.target.files[0]],
      }));
   };

   const onDeleteImage = (index) => {
      if (typeof data.images[index] === "object") {
         setData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
         }));
      } else {
         setData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
            imageKeys: prev.imageKeys
               ? prev.imageKeys.concat(
                    prev.images.filter((_, i) => i === index)
                 )
               : prev.images.filter((_, i) => i === index),
         }));
      }
   };

   const onChangeImage = (e, index) => {
      if (typeof data.images[index] === "string") {
         setData((prev) => ({
            ...prev,
            imageKeys: prev.imageKeys
               ? prev.imageKeys.concat(
                    prev.images.filter((_, i) => i === index)
                 )
               : prev.images.filter((_, i) => i === index),
         }));
      }
      setData((prev) => ({
         ...prev,
         images: prev.images.map((image, i) =>
            i === index ? e.target.files[0] : image
         ),
      }));
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
         onGoBack={afterMutate}
         onAddImage={onAddImage}
         onDeleteImage={onDeleteImage}
         onChangeImage={onChangeImage}
         user={user}
      />
   );
}
export default ProjectsModContainer;
