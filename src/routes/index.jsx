import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cookie from 'react-cookies';
import NotFound from './404';
import publicRoutes from './public';
import privateRoutes from './private';
import Profile from '../pages/private/profile';
import { LandingPage } from '../pages';
import { PrivateLayout, PublicLayout } from '../layouts';

const Routes = () => {
  const getComponenet = () => {
    if (cookie.load('x-auth-token')) {
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
        {publicRoutes()}
        {privateRoutes()}
        <Route exact path="/" component={getComponenet} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
