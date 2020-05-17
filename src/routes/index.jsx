import React, { useState } from 'react';
import cookie from 'react-cookies';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './404';
import publicRoutes from './public';
import privateRoutes from './private';
import { LandingPage, HomePage } from '../pages';
import { PrivateLayout, PublicLayout } from '../layouts';

const Routes = () => {
  const getComponenet = () => {
    if (cookie.load('x-auth-token')) {
      return (
        <PrivateLayout>
          <HomePage />
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
        {privateRoutes()}
        {publicRoutes()}
        <Route exact path="/" component={getComponenet} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
