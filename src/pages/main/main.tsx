import * as React from "react";
import { Header } from "../../components/header/header";
import { Route, Switch } from "react-router-dom";

import { ClientPage } from "../clients/clients";
import { DashboardPage } from "../dashboard/dashboard";

export class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/client" component={ClientPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </React.Fragment>
    );
  }
}
