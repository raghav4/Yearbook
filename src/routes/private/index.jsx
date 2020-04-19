import React from 'react';

import PeopleCards from '../../components/user/writes/peopleCards';
import Profile from '../../components/user/profile/profile';
import ListPolls from '../../components/user/polls/list';
import UserInfo from '../../components/user/details';

import PrivateRoute from './privateRoute';

const privateRoutes = () => {
  const routes = [
    // TODO #22: Fix '/' route
    { path: '/write', component: <PeopleCards /> },
    { path: '/profile', component: <Profile /> },
    { path: '/polls', component: <ListPolls /> },
    { path: '/details', component: <UserInfo /> },
    { path: '/', component: <Profile /> },
  ];
  return routes.map((route) => (
    <PrivateRoute exact path={route.path} key={route.path} component={route.component} />
  ));
};

export default privateRoutes;
