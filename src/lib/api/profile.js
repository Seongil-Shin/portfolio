import { API, Storage } from "aws-amplify";
import {
   createProfileAboutme,
   createStack,
   deleteProfileAboutme,
   deleteStack,
   updateProfile,
   updateStack,
} from "../../graphql/mutations";
import {
   listProfileAboutmes,
   listProfiles,
   listStacks,
} from "../../graphql/queries";
import { uploadImg } from "./project";

const compare = (a, b) => {
   return a.createdAt < b.createdAt ? -1 : 1;
};

export const getProfileData = async () => {
   const profile = await API.graphql({ query: listProfiles });
   const aboutme = await API.graphql({ query: listProfileAboutmes });
   const stacks = await API.graphql({ query: listStacks });
   let obj = {
      profileId: profile.data.listProfiles.items[0].id,
      image: profile.data.listProfiles.items[0].image,
      name: profile.data.listProfiles.items[0].name,
      aboutme: aboutme.data.listProfileAboutmes.items.sort(compare),
      stack: {
         front: [],
         back: [],
         etc: [],
      },
   };
   stacks.data.listStacks.items.forEach((item) => {
      if (item.type === "front") {
         obj.stack.front.push(item);
      } else if (item.type === "back") {
         obj.stack.back.push(item);
      } else {
         obj.stack.etc.push(item);
      }
   });
   return obj;
};

export const updateProfileFunc = async (data) => {
   let obj = {
      ...data,
   };
   if (typeof data.image === "object") {
      await Storage.remove(data.prevImageKey);
      const res = await uploadImg(data.image);
      obj = {
         ...obj,
         image: res.key,
      };
   }
   try {
      await API.graphql({
         query: updateProfile,
         variables: { input: obj },
      });
      return true;
   } catch (err) {
      throw err;
   }
};

export const deleteAboutmeFunc = async (data) => {
   try {
      await API.graphql({
         query: deleteProfileAboutme,
         variables: { input: { id: data } },
      });
      return true;
   } catch (err) {
      throw err;
   }
};

export const createAboutme = async (data) => {
   try {
      await API.graphql({
         query: createProfileAboutme,
         variables: { input: { line: data } },
      });
      return true;
   } catch (err) {
      throw err;
   }
};

export const createStackFunc = async (data) => {
   const res = await uploadImg(data.image);
   let obj = {
      ...data,
      image: res.key,
   };
   try {
      await API.graphql({
         query: createStack,
         variables: { input: obj },
      });
      return true;
   } catch (err) {
      throw err;
   }
};

export const updateStackFunc = async (data) => {
   let obj = {
      ...data,
   };
   if (typeof data.image === "object") {
      await Storage.remove(data.prevImageKey);
      const res = await uploadImg(data.image);
      obj = {
         ...obj,
         image: res.key,
      };
   }
   try {
      await API.graphql({
         query: updateStack,
         variables: { input: obj },
      });
      return true;
   } catch (err) {
      throw err;
   }
};

export const deleteStackFunc = async (data) => {
   try {
      await Storage.remove(data.image);
      const res = await API.graphql({
         query: deleteStack,
         variables: { input: { id: data.id } },
      });
      return res;
   } catch (err) {
      throw err;
   }
};
