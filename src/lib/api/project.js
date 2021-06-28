import { API, Storage } from "aws-amplify";
import {
   createProject,
   deleteProject,
   updateProject,
} from "../../graphql/mutations";
import { listProjects } from "../../graphql/queries";
import randomString from "randomstring";

export async function uploadImg(file) {
   try {
      const key = randomString.generate();
      return await Storage.put(key, file, {
         level: "public",
         contentType: "image/*",
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
      github: data.github,
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
         github: data.github,
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

export const DeleteProject = async (data) => {
   try {
      await Storage.remove(data.image);
      const res = await API.graphql({
         query: deleteProject,
         variables: { input: { id: data.id } },
      });
      return res;
   } catch (err) {
      throw err;
   }
};
