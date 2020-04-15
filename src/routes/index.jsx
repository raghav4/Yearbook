import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from '../components/common/loginForm';
import PeopleCards from '../components/user/writes/peopleCards';
import Profile from '../components/user/profile/profile';
import ListPolls from '../components/user/polls/list';
import UserInfo from '../components/user/details';
import NotFound from './404';
import Navbar from '../components/user/navbar';
import Footer from '../components/common/footer';

const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* Public Routes */}
        <Route path="/login" component={LoginForm} />
        {/* Private Routes */}
        <Route path="/write" component={PeopleCards} />
        <Route path="/profile" component={Profile} />
        <Route path="/polls" component={ListPolls} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={UserInfo} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};

export default Routes;
