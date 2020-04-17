import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
    return <PrivateRoute exact path={route.path} component={route.component} />;
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
    return <PublicRoute exact path={route.path} component={route.component} />;
  });
};
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public Routes */}
        {/* <PublicRoute path="/login" component={LoginForm} /> */}
        {getPublicRoutes()}
        {/* Private Routes */}
        {getPrivateRoutes()}
        {/* <PrivateRoute path="/" component={<h1>changed</h1>} />
        <PrivateRoute path="/write" component={UserInfo} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/polls" component={ListPolls} />
        <PrivateRoute path="/details" component={UserInfo} /> */}
        <Route path="*" component={NotFound} />
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
