import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DadosPessoais from "./dadospessoais";
import Empresa from "./suaempresa";
import Seguranca from "./segurança";
import AlterarConta from "./alterarconta";

export default function MyAccountRoutes() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${url}/`} component={DadosPessoais} />
      <Route path={`${url}/company`} component={Empresa} />
      <Route path={`${url}/security`} component={Seguranca} />
      <Route path={`${url}/changeaccount`} component={AlterarConta} />
    </Switch>
  );
}
