import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import NoMatch from '../../common/components/NoMatch';
import HomePage from './components/index';

const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route component={NoMatch} />
    </Switch>
  </HashRouter>
);

export default AppRouter;
