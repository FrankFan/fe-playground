import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routesConfig from './routesConfig';

const routes = routesConfig.map(({ exact, path, component }, index) => {
  return <Route key={index} exact={exact} path={path} component={component} />;
});

const AppRouter = () => <Switch>{routes}</Switch>;

export default AppRouter();
