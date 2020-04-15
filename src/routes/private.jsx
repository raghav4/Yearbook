import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import UserLogIn from './userLogin';
import AdminLogIn from './adminLogin';

const PrivateRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/admin" component={AdminLogIn} />
        <Route path="/user" component={UserLogIn} />
      </Switch>
    </>
  );
};

export default PrivateRoutes;
