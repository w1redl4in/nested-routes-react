import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

export default function Steps() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${url}/`} component={Step1} />
      <Route path={`${url}/step2`} component={Step2} />
      <Route path={`${url}/step3`} component={Step3} />
      <Route path={`${url}/step4`} component={Step4} />
    </Switch>
  );
}
