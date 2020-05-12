import React from 'react';
import cookie from 'react-cookies';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../../layouts';
import { PrivateProvider } from '../../contexts';

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <PrivateLayout>
      <Route
        exact
        render={(props) => {
          if (!cookie.load('x-auth-token')) {
            return <Redirect to="/login" />;
          }
          // return component;
          return <PrivateProvider value={{ ...props }}>{component}</PrivateProvider>;
        }}
      />
    </PrivateLayout>
  );
};

export default PrivateRoute;
