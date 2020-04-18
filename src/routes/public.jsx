import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component, ...rest }) => {
  return (
    <Route
      render={() => {
        if (localStorage.getItem('token')) {
          console.log('ok');
          return <Redirect to="/" />;
        }
        return component;
        // return <h1>Hello World</h1>;
      }}
    />
  );
};

export default PublicRoute;
