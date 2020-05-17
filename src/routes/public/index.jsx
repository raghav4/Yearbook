import React from 'react';
import { UserLogin, SignUp, ForgotPassword, LandingPage, AdminLogin } from '../../pages';

import PublicRoute from './publicRoute';

const publicRoutes = () => {
  const routes = [
    { path: '/login', component: <UserLogin /> },
    { path: '/signup', component: <SignUp /> },
    { path: '/reset', component: <ForgotPassword /> },
    { path: '/admin', component: <AdminLogin /> },
    { path: '/', component: <LandingPage /> },
  ];
  return routes.map((route) => (
    <PublicRoute exact path={route.path} key={route.path} component={route.component} />
  ));
};

export default publicRoutes;
