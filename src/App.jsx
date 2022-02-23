/** @jsxImportSource @emotion/react */
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import "./App.css";
import Project from "./pages/Project";
import Admin from "./pages/Admin";
import SnackBar from "./components/elements/SnackBar";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "./modules/profile";
import { getProjectsAction } from "./modules/projects";
import { isMobile, isNotMobile } from "./modules/isMobile";

Amplify.configure(awsconfig);

function App() {
   const dispatch = useDispatch();
   const mobile = useSelector(
      ({ isMobileReducer }) => isMobileReducer.isMobile
   );
   useEffect(() => {
      if (window.innerWidth < 768) {
         dispatch(isMobile());
      }
   }, [dispatch]);

   useEffect(() => {
      dispatch(getProfileAction());
      dispatch(getProjectsAction());
   }, [dispatch]);

   useEffect(() => {
      const handleResize = (e) => {
         if (mobile && e.target.innerWidth >= 768) {
            dispatch(isNotMobile());
         } else if (!mobile && e.target.innerWidth < 768) {
            dispatch(isMobile());
         }
      };
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [mobile, dispatch]);

   return (
      <div className="App">
         <div className="App-body">
            <div className="App-container">
               <Switch>
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/project" component={Project} />
                  <Route path="/" component={Home} />
               </Switch>
               <SnackBar />
            </div>
         </div>
      </div>
   );
}

export default App;
