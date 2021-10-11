import React from "react";
import axios from "axios";
import { Login, Register } from "./components/login/index";
import Home from "./components/Home/Home.jsx"
import Futurelog from "./components/Home/futurelog.jsx"
import History from "./components/Home/history.jsx"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
<Router>
<div className="App">

          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/futurelog" component={Futurelog} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
    </Router>

      );
}

export default App;
