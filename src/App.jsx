import { Route } from "react-router";
import Home from "./pages/Home";
import "./App.css";
import Project from "./pages/Project";
import SnackBar from "./components/elements/SnackBar";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
   return (
      <div className="App">
         <div className="App-body">
            <div className="App-container">
               <Route exact path="/" component={Home} />
               <Route exact path="/project" component={Project} />
               <SnackBar />
            </div>
         </div>
      </div>
   );
}

export default App;
