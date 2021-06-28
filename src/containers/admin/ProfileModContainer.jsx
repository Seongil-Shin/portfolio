import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../components/elements/Loading";
import ProfileMutation from "../../components/ProfileMutation";
import {
   createAboutme,
   createStackFunc,
   deleteAboutmeFunc,
   deleteStackFunc,
   getProfileData,
   updateProfileFunc,
} from "../../lib/api/profile";

function ProfileModContainer() {
   const [refresh, setRefresh] = useState(0);
   const [data, setData] = useState({});
   const [update, setUpdate] = useState({
      name: "",
      image: "",
      deletedAboutme: [],
      newAboutme: [],
      stack: [],
      deletedStack: [],
      newStack: { title: "", type: "", image: null },
   });
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const getProfile = async () => {
         const res = await getProfileData();
         setData(res);
      };
      getProfile();
   }, [refresh]);

   const updatePhoto = (e, type) => {
      if (e === null) {
         return;
      }
      if (type === "profile") {
         setUpdate((prev) => ({ ...prev, image: e.target.files[0] }));
      } else if (type === "stack") {
         setUpdate((prev) => ({
            ...prev,
            newStack: {
               ...prev.newStack,
               image: e.target.files[0],
            },
         }));
      }
   };
   const changeText = (e, type) => {
      if (type === "name") {
         setUpdate((prev) => ({ ...prev, name: e.target.value }));
      } else if (type === "newAboutme") {
         setUpdate((prev) => ({
            ...prev,
            newAboutme: [...prev.newAboutme.slice(0, -1), e.target.value],
         }));
      } else if (type === "stack") {
         setUpdate((prev) => ({
            ...prev,
            newStack: { ...prev.newStack, title: e.target.value },
         }));
      }
   };
   const deleteAboutme = (id, type) => {
      if (type === "new") {
         setUpdate((prev) => ({
            ...prev,
            newAboutme: [
               ...prev.newAboutme.slice(0, id),
               ...prev.newAboutme.slice(id + 1),
            ],
         }));
      } else {
         setUpdate((prev) => ({
            ...prev,
            deletedAboutme: [...prev.deletedAboutme, id],
         }));
      }
   };
   const addAboutme = () => {
      setUpdate((prev) => ({
         ...prev,
         newAboutme: [...prev.newAboutme, ""],
      }));
   };
   const addStack = () => {
      const type = update.newStack.type;
      if (type && update.newStack.title && update.newStack.image) {
         setUpdate((prev) => ({
            ...prev,
            stack: [...prev.stack, prev.newStack],
            newStack: { title: "", type: "", image: null },
         }));
      } else {
         console.log("dasd");
      }
   };
   const changeStackType = (e) => {
      setUpdate((prev) => ({
         ...prev,
         newStack: { ...prev.newStack, type: e.target.value },
      }));
   };
   const deleteStack = (stack) => {
      if (stack.id) {
         setUpdate((prev) => ({
            ...prev,
            deletedStack: [...prev.deletedStack, stack],
         }));
      } else {
         setUpdate((prev) => ({
            ...prev,
            stack: prev.stack.filter((s) => s.image !== stack.image),
         }));
      }
   };
   const init = () => {
      setUpdate({
         name: "",
         image: "",
         deletedAboutme: [],
         newAboutme: [""],
         stack: [],
         deletedStack: [],
         newStack: { title: "", type: "", image: null },
      });
   };
   const updateApply = async () => {
      setLoading(true);
      try {
         if (update.name || update.image) {
            let obj = {
               id: data.profileId,
               name: update.name ? update.name : data.name,
               image: update.image ? update.image : data.image,
            };
            await updateProfileFunc(obj);
         }
         if (update.deletedAboutme.length !== 0) {
            await Promise.all(
               update.deletedAboutme.map(async (item) => {
                  await deleteAboutmeFunc(item);
               })
            );
         }
         if (update.newAboutme.length !== 0) {
            await Promise.all(
               update.newAboutme.map(async (item) => {
                  if (item) {
                     await createAboutme(item);
                  }
               })
            );
         }
         if (update.stack.length !== 0) {
            await Promise.all(
               update.stack.map(async (item) => {
                  await createStackFunc(item);
               })
            );
         }
         if (update.deletedStack.length !== 0) {
            await Promise.all(
               update.deletedStack.map(async (item) => {
                  await deleteStackFunc(item);
               })
            );
         }
      } catch (err) {
         console.log(err);
      }
      setLoading(false);
      setRefresh((prev) => prev + 1);
      init();
   };
   return (
      <>
         <ProfileMutation
            data={data}
            update={update}
            photoUpdate={updatePhoto}
            init={init}
            changeText={changeText}
            deleteAboutme={deleteAboutme}
            addAboutme={addAboutme}
            addStack={addStack}
            changeStackType={changeStackType}
            deleteStack={deleteStack}
            updateApply={updateApply}
         />
         <Loading loading={loading} />
      </>
   );
}
export default ProfileModContainer;
