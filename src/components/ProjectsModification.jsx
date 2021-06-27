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
}) {
   return (
      <div>
         {onMod[0] ? (
            <ProjectMutation
               data={data}
               onChangeData={onChangeData}
               mutate={mutate}
            />
         ) : (
            <Works list={list} setOnMod={setOnMod} />
         )}
      </div>
   );
}
export default ProjectsModification;
