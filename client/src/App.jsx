import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStore from "./utils/GlobalStore";
import "./App.css";

import Home from "./pages/Home";
import Parks from "./pages/Parks";
import Create from "./pages/Create";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <GlobalStore.GlobalProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/parks" component={Parks} />
          <Route exact path="/register" component={Register} />
        </Switch> 
      </GlobalStore.GlobalProvider>
    </Router>
  );
}

export default App;
