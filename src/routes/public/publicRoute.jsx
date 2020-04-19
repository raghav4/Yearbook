import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PublicLayout } from '../../layouts';

const PublicRoute = ({ component, ...rest }) => {
  return (
    <PublicLayout>
      <Route
        render={() => {
          if (localStorage.getItem('token')) {
            return <Redirect to="/" />;
          }
          return component;
        }}
      />
    </PublicLayout>
  );
};

export default PublicRoute;
