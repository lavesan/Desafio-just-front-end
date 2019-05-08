import * as React from "react";
import { Redirect, Route } from "react-router-dom";

type Props = {
  redirectTo: string;
  path: string;
};

/**
 * HOC Auth Router
 * @param {func} component
 * @param {bool} authenticated
 * @param {strig} redirectTo
 */

const AuthRoute = ({ component, redirectTo, ...rest }) => {
  const Component = component;
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("auth") ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

AuthRoute.displayName = "HOC Auth Router";

export default AuthRoute;
