import * as React from "react";
import { Header } from "../../components/header/header";
import { Route, Switch } from "react-router-dom";

import AuthRoute from "../../utils";

import { ClientPage } from "../clients/clients";
import { DashboardPage } from "../dashboard/dashboard";

export class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <AuthRoute
            redirectTo="/login"
            path="/client"
            component={ClientPage}
          />
          <AuthRoute
            redirectTo="/login"
            path="/dashboard"
            component={DashboardPage}
          />
        </Switch>
      </React.Fragment>
    );
  }
}
