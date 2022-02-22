import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./constants";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={ROUTES.root}>
        <h1>Welcome!</h1>
      </Route>
      <Route exact path={ROUTES.phones}>
        <h2>PhoneListCotainer</h2>
      </Route>
      <Route exact path={ROUTES.phone}>
      <h2>Phone Detail Component</h2>
      </Route>
    </Switch>
  );
}

export default AppRouter;