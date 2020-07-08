import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Dashboard from "./dashboard";
import MeusCartoes from "./meuscartoes";
import Extrato from "./extrato";

export default function HomeRoutes() {
  const { url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${url}/`} component={Dashboard} />
        <Route path={`${url}/cards`} component={MeusCartoes} />
        <Route path={`${url}/extract`} component={Extrato} />
      </Switch>
    </div>
  );
}
