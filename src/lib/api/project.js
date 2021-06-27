import { API, Storage } from "aws-amplify";
import {
   createProject,
   deleteProject,
   updateProject,
} from "../../graphql/mutations";
import { listProjects } from "../../graphql/queries";
import randomString from "randomstring";

async function uploadImg(file) {
   try {
      const key = randomString.generate();
      return await Storage.put(key, file, {
         contentType: "image/*", // contentType is optional
      });
   } catch (error) {
      console.log("Error uploading file: ", error);
   }
}

export const createProjectFunc = async (data) => {
   const res = await uploadImg(data.image);
   const obj = {
      title: data.title,
      detail: data.detail,
      summary: data.summary,
      image: res.key,
   };
   try {
      await API.graphql({
         query: createProject,
         variables: { input: obj },
      });
      return true;
   } catch (err) {
      throw err;
   }
};

export const getProjectList = async () => {
   try {
      const lists = await API.graphql({ query: listProjects });
      return lists;
   } catch (err) {
      throw err;
   }
};

export const updateProjectFunc = async (data) => {
   try {
      let obj = {
         id: data.id,
         title: data.title,
         detail: data.detail,
         summary: data.summary,
         image: data.image,
      };
      if (typeof data.image === "object") {
         await Storage.remove(data.imageKey);
         const res = await uploadImg(data.image);
         obj = {
            ...obj,
            image: res.key,
         };
      }
      const res = await API.graphql({
         query: updateProject,
         variables: { input: obj },
      });
      return res;
   } catch (err) {
      throw err;
   }
};

export const DeleteProject = async (id) => {
   try {
      const res = await API.graphql({
         query: deleteProject,
         variables: { input: { id: id } },
      });
      return res;
   } catch (err) {
      throw err;
   }
};
