import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import { Layout } from "../components/Layout";
import { PhoneListContainer } from "../components/PhoneListContainer";
import { Home } from "../Pages/Home";
import { PhoneDetails } from "../Pages/PhoneDetails";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={ROUTES.root}>
        <Layout>
          <Home/>
        </Layout>
      </Route>
      <Route exact path={ROUTES.phones}>
      <Layout>
        <PhoneListContainer/>
        </Layout>
      </Route>
      <Route exact path={ROUTES.phone}>
      <Layout>
        <PhoneDetails/>
        </Layout>
      </Route>
    </Switch>
  );
}

export default AppRouter;
