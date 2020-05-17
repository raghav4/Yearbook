import React from 'react';
import jwtDecode from 'jwt-decode';
import cookie from 'react-cookies';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../../layouts';
import { PrivateProvider } from '../../contexts';

const PrivateRoute = ({ component, ...rest }) => {
  let isAdmin = false;
  try {
    const decoded = jwtDecode(cookie.load('x-auth-token'));
    if ('isAdmin' in decoded && decoded.isAdmin) {
      isAdmin = true;
    }
  } catch (ex) {}
  return (
    <PrivateLayout>
      <Route
        exact
        render={(props) => {
          if (!cookie.load('x-auth-token')) {
            return <Redirect to="/login" />;
          }
          // return component;
          return <PrivateProvider value={{ ...props, isAdmin }}>{component}</PrivateProvider>;
        }}
      />
    </PrivateLayout>
  );
};

export default PrivateRoute;
