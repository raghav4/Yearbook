import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from '../components/common/loginForm';
import PeopleCards from '../components/user/writes/peopleCards';
import Profile from '../components/user/profile/profile';
import ListPolls from '../components/user/polls/list';
import UserInfo from '../components/user/details';
import NotFound from './404';
import PrivateRoute from './private';
import PublicRoute from './public';

const getPrivateRoutes = () => {
  const routes = [
    {
      path: '/',
      component: <h1>path component</h1>,
    },
    {
      path: '/write',
      component: <PeopleCards />,
    },
    {
      path: '/profile',
      component: <Profile />,
    },
    {
      path: '/polls',
      component: <ListPolls />,
    },
    {
      path: '/details',
      component: <UserInfo />,
    },
  ];
  return routes.map((route) => {
    return <PrivateRoute exact key={route.path} path={route.path} component={route.component} />;
  });
};
const getPublicRoutes = () => {
  const routes = [
    {
      path: '/login',
      component: <LoginForm />,
    },
  ];
  return routes.map((route) => {
    return <PublicRoute exact key={route.path} path={route.path} component={route.component} />;
  });
};
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public Routes */}
        {getPublicRoutes()}
        {/* Private Routes */}
        {getPrivateRoutes()}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
