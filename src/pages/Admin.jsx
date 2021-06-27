import React from "react";
import AdminContainer from "../containers/admin/AdminContainer";
import AdminSignOut from "../components/elements/AdminSignOut";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, signout } from "../modules/auth";
import AdminSignIn from "../components/elements/AdminSignIn";

function Admin() {
   const { signined } = useSelector((data) => data.auth);
   const dispatch = useDispatch();
   useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
         console.log(nextAuthState);
         if (nextAuthState === "signedin") {
            dispatch(signin());
         } else {
            dispatch(signout());
         }
      });
   }, [dispatch]);

   return (
      <div>
         {signined ? (
            <>
               <AdminSignOut />
               <AdminContainer user={signined} />{" "}
            </>
         ) : (
            <AdminSignIn />
         )}
      </div>
   );
}

export default Admin;
