/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Box from './components/contentBox';
import Profile from './components/profile';
import UserInfo from './components/userInfo';
import Admin from './components/admin/admin';
import CreateUser from './components/admin/user';
import PeopleCards from './components/peopleCards';
import LoginForm from './components/common/loginForm';
import ListPolls from './components/polls';
import Auth from './components/auth';

function App() {
  return (
    <>
      {/* <Auth /> */}
      <Navbar />
      <Switch>
        <Route path="/write" component={PeopleCards} />
        <Route path="/profile" component={Profile} />
        <Route path="/polls" component={ListPolls} />
        <Route path="/" component={UserInfo} exact />
      </Switch>
    </>
  );
}

export default App;
