import { Route } from "react-router";
import Home from "./pages/Home";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Route exact path="/" component={Home} />
      </div>
   );
}

export default App;
