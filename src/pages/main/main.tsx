import * as React from "react";
import { Header } from "../../components/header/header";
import { Route, Switch } from "react-router-dom";

import AuthRoute from "../../utils";

import { Clients } from "../clients/clients";
import { Dashboard } from "../dashboard/dashboard";

export class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <AuthRoute
            redirectTo="/login"
            path="/dashboard"
            component={Dashboard}
          />
          <AuthRoute redirectTo="/login" path="/client" component={Clients} />
        </Switch>
      </React.Fragment>
    );
  }
}
