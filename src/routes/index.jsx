import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './404';

import publicRoutes from './public';
import privateRoutes from './private';
import Profile from '../pages/private/profile';
import { LandingPage } from '../pages';
import { PrivateLayout, PublicLayout } from '../layouts';

const Routes = () => {
  const getComponenet = () => {
    if (localStorage.token) {
      return (
        <PrivateLayout>
          <Profile />
        </PrivateLayout>
      );
    }
    return (
      <PublicLayout>
        <LandingPage />
      </PublicLayout>
    );
  };
  return (
    <BrowserRouter>
      <Switch>
        {/* #21. Since, public route doesn't have '/' any end point to '/' thus it is getting rendered in the exact*/}
        {publicRoutes()}
        {privateRoutes()}
        <Route exact path="/" component={getComponenet} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
