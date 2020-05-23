import React from 'react';
import jwtDecode from 'jwt-decode';
import cookie from 'react-cookies';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../../layouts';
import WrapperContext from './wrapper';
import NotFound from '../404';

const PrivateRoute = ({ component = <NotFound />, ...rest }) => {
  const { systemAdminComponent = null } = rest;

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
          if (isAdmin) {
            return (
              <WrapperContext value={{ ...props, isAdmin }}>
                {systemAdminComponent}
              </WrapperContext>
            );
          }
          return (
            <WrapperContext value={{ ...props, isAdmin }}>
              {component}
            </WrapperContext>
          );
        }}
      />
    </PrivateLayout>
  );
};

PrivateRoute.propTypes = {
  component: propTypes.elementType.isRequired,
};

export default PrivateRoute;

// http://p.ip.fi/C3Dq
