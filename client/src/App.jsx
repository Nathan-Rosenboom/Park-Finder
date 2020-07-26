import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStore from "./utils/GlobalStore";

import Home from "./pages/Home";
//import Register from "./pages/Register";
import Parks from "./pages/CreatePark";

function App() {
  return (
    <Router>
      <GlobalStore.GlobalProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/register" component={Register} />*/}
        <Route exact path="/parks" component={Parks} />
        </Switch>
      </GlobalStore.GlobalProvider>
    </Router>
  );
}


export default App;
