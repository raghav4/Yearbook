import React from 'react'

// import LoginForm from '../../components/common/loginForm';
import { Login } from "../../pages";

import PublicRoute from "./publicRoute";

const publicRoutes = () => {
    const routes = [
        { path: '/login', component: <Login /> },
      ];
    return routes.map(route => <PublicRoute exact path={route.path} component={route.component} />);
}

export default publicRoutes;
