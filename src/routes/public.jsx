import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = () => {
  return (
    <Route
      render={() => {
        if (localStorage.getItem('token')) {
          console.log('ok');
          return <Redirect to="/" />;
        }
        return <h1>Hello from public</h1>;
        // return <h1>Hello World</h1>;
      }}
    />
  );
};

export default PublicRoute;
