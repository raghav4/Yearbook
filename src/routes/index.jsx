import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './404';

import publicRoutes from "./public";
import privateRoutes from "./private";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes()}
        {privateRoutes()}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
