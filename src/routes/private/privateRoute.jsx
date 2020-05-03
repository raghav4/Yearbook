import React from 'react';
import cookie from 'react-cookies';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../../layouts';

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <PrivateLayout>
      <Route
        exact
        render={() => {
          if (!cookie.load('x-auth-token')) {
            return <Redirect to="/login" />;
          }
          return component;
        }}
      />
    </PrivateLayout>
  );
};

export default PrivateRoute;
