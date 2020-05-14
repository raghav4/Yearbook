import React from 'react';
import PrivateRoute from './privateRoute';
import {
  ListPolls,
  Profile,
  PeopleCards,
  UserInfo,
  SelfAnswers,
  HomePage,
  LogOut,
} from '../../pages';

const privateRoutes = () => {
  const routes = [
    { path: '/write', component: <PeopleCards /> },
    { path: '/profile', component: <Profile /> },
    { path: '/polls', component: <ListPolls /> },
    { path: '/details', component: <UserInfo /> },
    { path: '/answers', component: <SelfAnswers /> },
    { path: '/logout', component: <LogOut /> },
    { path: '/', component: <HomePage /> }, // changed
  ];
  return routes.map((route) => (
    <PrivateRoute exact path={route.path} key={route.path} component={route.component} />
  ));
};

export default privateRoutes;
