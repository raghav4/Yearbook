import React from 'react'

import LoginForm from '../../components/common/loginForm';

import PublicRoute from "./publicRoute";

const publicRoutes = () => {
    const routes = [
        { path: '/login', component: <LoginForm /> },
      ];
    return routes.map(route => <PublicRoute exact path={route.path} component={route.component} />);
}

export default publicRoutes;
