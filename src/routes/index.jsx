import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Steps from "../pages/steps";
import Home from "../pages/home";
import Page404 from "../pages/page404";
import Settings from "../pages/settings";
import Ajuda from "../pages/help";
import TermosDeUso from "../pages/terms of use";
import MyAccountRoutes from "../pages/myaccount";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/steps" component={Steps} />
        <Route path="/home" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/myaccount" component={MyAccountRoutes} />
        <Route path="/help" component={Ajuda} />
        <Route path="/useterms" component={TermosDeUso} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
