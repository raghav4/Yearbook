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
  ModerateMessages
} from '../../pages';

const privateRoutes = () => {
  const routes = [
    { path: '/write', component: <PeopleCards /> },
    {
      path: '/profile',
      component: <Profile />,
    },
    // {
    //   path: '/polls',
    //   component: <ListPolls />,
    //   systemAdminComponent: <ManagePolls />,
    // },
    {
      path: '/moderation',
      component: <ModerateMessages />,
    },
    {
      path: '/details',
      component: <UserInfo />,
    },
    {
      path: '/answers',
      component: <SelfAnswers />,
    },
    {
      path: '/questions',
      systemAdminComponent: <ManageQuestions />,
    },
    { path: '/update-password', component: <ResetPassword /> },
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
