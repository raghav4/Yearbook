import React from 'react';
import cookie from 'react-cookies';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './404';
import publicRoutes from './public';
import privateRoutes from './private';
import { LandingPage, HomePage } from '../pages';
import { PrivateLayout, PublicLayout } from '../layouts';
import WrapperContext from './private/wrapper';

const Routes = () => {
  const getComponenet = (props) => {
    if (cookie.load('x-auth-token')) {
      return (
        <WrapperContext value={{ ...props }}>
          <PrivateLayout>
            <HomePage />
          </PrivateLayout>
        </WrapperContext>
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
        <Route
          exact
          path="/"
          render={(props) => {
            return getComponenet(props);
          }}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
