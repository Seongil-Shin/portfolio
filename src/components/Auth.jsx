import { Authenticator, SignIn, Greetings } from "aws-amplify-react";

const ComstomAuthenticator = () => {
   const AlwaysOn = (props) => {
      return (
         <div>
            <div>
               I am always here to show current auth state: {props.authState}
            </div>
            <button onClick={() => props.onStateChange("signUp")}>
               Show Sign Up
            </button>
         </div>
      );
   };

   const handleAuthStateChange = (state) => {
      if (state === "signedIn") {
         /* Do something when the user has signed-in */
      }
   };

   return (
      <Authenticator hideDefault={true} onStateChange={handleAuthStateChange}>
         <SignIn />
         <Greetings />
         <AlwaysOn />
      </Authenticator>
   );
};
export default ComstomAuthenticator;
