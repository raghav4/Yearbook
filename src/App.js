/* eslint-disable react/jsx-filename-extension */
import './App.css';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './components/common/navbar';
import PeopleCards from './components/peopleCards';
import ListPolls from './components/pollsList';
import Profile from './components/profile';
import UserInfo from './components/userInfo';
import ManagePolls from './components/admin/managePolls';
import Alert from './components/common/alert';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/write" component={PeopleCards} />
        <Route path="/profile " component={Profile} />
        <Route path="/polls" component={ManagePolls} />
        <Route path="/" component={UserInfo} exact />
      </Switch>
    </>
  );
}

export default App;
