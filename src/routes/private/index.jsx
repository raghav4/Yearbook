import React from 'react';
import PrivateRoute from './privateRoute';
import { ListPolls, Profile, PeopleCards, UserInfo } from '../../pages';

const privateRoutes = () => {
  const routes = [
    { path: '/write', component: <PeopleCards /> },
    { path: '/profile', component: <Profile /> },
    { path: '/polls', component: <ListPolls /> },
    { path: '/details', component: <UserInfo /> },
  ];
  return routes.map((route) => (
    <PrivateRoute exact path={route.path} key={route.path} component={route.component} />
  ));
};

export default privateRoutes;
