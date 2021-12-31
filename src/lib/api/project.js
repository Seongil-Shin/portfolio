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
   let imageKeys = [];
   for (let i = 0; i < data.images?.length; i++) {
      const res = await uploadImg(data.images[i]);
      imageKeys.push(res.key);
   }
   const obj = {
      title: data.title,
      detail: data.detail,
      summary: data.summary,
      images: imageKeys,
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
         images: data.images,
         github: data.github,
      };

      if (data.imageKeys && Array.isArray(data.imageKeys)) {
         for (let i = 0; i < data.imageKeys?.length; i++) {
            Storage.remove(data.imageKeys);
         }
      }
      for (let i = 0; i < obj.images?.length; i++) {
         if (typeof obj.images[i] === "object") {
            const res = await uploadImg(obj.images[i]);
            obj.images[i] = res.key;
         }
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
      for (let i = 0; i < data.images?.length; i++) {
         Storage.remove(data.images[i]);
      }
      const res = await API.graphql({
         query: deleteProject,
         variables: { input: { id: data.id } },
      });
      return res;
   } catch (err) {
      throw err;
   }
};
