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
}) {
   console.log(user);
   return (
      <div>
         {onMod[0] ? (
            <ProjectMutation
               data={data}
               onChangeData={onChangeData}
               mutate={mutate}
               onGoBack={onGoBack}
            />
         ) : (
            <Works list={list} setOnMod={setOnMod} isAdmin={user} />
         )}
      </div>
   );
}
export default ProjectsModification;
