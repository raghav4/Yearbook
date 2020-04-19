import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../../layouts';

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <PrivateLayout>
      <Route
        exact
        render={() => {
          if (!localStorage.getItem('token')) {
            return <Redirect to="/login" />;
          }
          console.log(component);
          return component;
        }}
      />
    </PrivateLayout>
  );
};

export default PrivateRoute;
