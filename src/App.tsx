import React, { Component } from "react";

import { Login } from "./pages/login/login";
import { MainPage } from "./pages/main/main";
import AuthRoute from "./utils";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthRoute redirectTo="/login" path="/" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
