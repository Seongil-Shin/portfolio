import React from "react";
import AdminContainer from "../containers/admin/AdminContainer";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Admin() {
   return (
      <div>
         {" "}
         <AdminContainer />
         <AmplifySignOut />
      </div>
   );
}

export default withAuthenticator(Admin);
