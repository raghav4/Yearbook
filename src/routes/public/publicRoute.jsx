import React from 'react';
import cookie from 'react-cookies';
import { Route, Redirect } from 'react-router-dom';
import { PublicLayout } from '../../layouts';
import { PublicProvider } from '../../contexts';

const PublicRoute = ({ component, ...rest }) => {
  return (
    <PublicLayout>
      <Route
        exact
        render={(props) => {
          if (cookie.load('x-auth-token')) {
            return <Redirect to="/" />;
          }
          return (
            <PublicProvider value={{ ...props }}>{component}</PublicProvider>
          );
        }}
      />
    </PublicLayout>
  );
};

export default PublicRoute;
