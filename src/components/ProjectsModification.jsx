import React from "react";
import ProjectMutation from "./ProjectMutation";
import Works from "./Works";

function ProjectsModification({
   onMod,
   setOnMod,
   list,
   data,
   onChangeData,
   mutate,
   onGoBack,
   user,
   onAddImage,
   onDeleteImage,
   onChangeImage,
}) {
   return (
      <div>
         {onMod[0] ? (
            <ProjectMutation
               data={data}
               onChangeData={onChangeData}
               mutate={mutate}
               onGoBack={onGoBack}
               onAddImage={onAddImage}
               onDeleteImage={onDeleteImage}
               onChangeImage={onChangeImage}
            />
         ) : (
            <Works list={list} setOnMod={setOnMod} isAdmin={user} />
         )}
      </div>
   );
}
export default ProjectsModification;
