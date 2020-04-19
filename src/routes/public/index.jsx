import React from 'react';
import { Login, SignUp, ForgotPassword } from '../../pages';

import PublicRoute from './publicRoute';

const publicRoutes = () => {
  const routes = [
    { path: '/login', component: <Login /> },
    { path: '/signup', component: <SignUp /> },
    { path: '/reset', component: <ForgotPassword /> },
  ];
  return routes.map((route) => (
    <PublicRoute exact path={route.path} key={route.path} component={route.component} />
  ));
};

export default publicRoutes;
