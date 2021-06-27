import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import "./App.css";
import Project from "./pages/Project";
import Admin from "./pages/Admin";
import SnackBar from "./components/elements/SnackBar";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
   return (
      <div className="App">
         <div className="App-body">
            <div className="App-container">
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/admin" component={Admin} />
                  <Route path="/project" component={Project} />
               </Switch>
               <SnackBar />
            </div>
         </div>
      </div>
   );
}

export default App;
