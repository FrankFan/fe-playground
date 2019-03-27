import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NoMatch from '../../common/components/NoMatch';
import ColorChanger from './components/ColorChanger/';
import BasicKnowledge from './components/BasicKnowledge/';

const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={BasicKnowledge} />
      <Route path="/color" exact component={ColorChanger} />
      <Route path="/bk" exact component={BasicKnowledge} />
      <Route component={NoMatch}/>
    </Switch>
  </HashRouter>
);

export default AppRouter;