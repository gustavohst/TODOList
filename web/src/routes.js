import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import projectBoard from "./pages/ProjectBoard/ProjectBoard";

function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/board" exact component={projectBoard} />
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;