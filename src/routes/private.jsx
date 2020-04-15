import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import PrivateLayout from '../layouts/private';

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <PrivateLayout>
      <Route
        render={() => {
          if (!localStorage.getItem('token')) {
            console.log('ok');
            return <Redirect to="/login" />;
          }
          return component;
        }}
      />
    </PrivateLayout>
  );
};

export default PrivateRoute;
