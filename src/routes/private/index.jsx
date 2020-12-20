import React from 'react';
import PrivateRoute from './privateRoute';
import {
  ListPolls,
  Profile,
  PeopleCards,
  UserInfo,
  SelfAnswers,
  LogOut,
  GrantUserAccess,
  ManageQuestions,
  ManagePolls,
  EmailNotifications,
  ResetPassword,
} from '../../pages';

const privateRoutes = () => {
  const routes = [
    { path: '/write', component: <PeopleCards /> },
    {
      path: '/profile',
      component: <Profile />,
    },
    {
      path: '/polls',
      component: <ListPolls />,
      systemAdminComponent: <ManagePolls />,
    },
    {
      path: '/details',
      component: <UserInfo />,
    },
    {
      path: '/answers',
      component: <SelfAnswers />,
      systemAdminComponent: <ManageQuestions />,
    },
    { path: '/reset', component: <ResetPassword /> },
    { path: '/add-user', systemAdminComponent: <GrantUserAccess /> },
    { path: '/email', systemAdminComponent: <EmailNotifications /> },
    { path: '/logout', component: <LogOut /> },
  ];

  const systemAdminRoutes = ['/add-user', '/profile', '/details'];

  return routes.map((route) => (
    <PrivateRoute
      exact
      path={route.path}
      key={route.path}
      component={route.component}
      systemAdminRoutes={systemAdminRoutes}
      systemAdminComponent={route.systemAdminComponent}
    />
  ));
};

export default privateRoutes;
