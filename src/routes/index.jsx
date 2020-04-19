import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './404';

import publicRoutes from './public';
import privateRoutes from './private';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* #21. Since, public route doesn't have '/' any end point to '/' thus it is getting rendered in the exact*/}
        {privateRoutes()}
        {publicRoutes()}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
