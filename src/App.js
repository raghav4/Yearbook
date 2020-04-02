/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Box from './components/contentBox';
import Profile from './components/profile';
import UserInfo from './components/userInfo';
import Admin from './components/admin/admin';
import PollsList from './components/listPolls';
import CreateUser from './components/admin/user';
import PeopleCards from './components/peopleCards';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/write" component={PeopleCards} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={UserInfo} exact />
        </Switch>
      </main>
    </>
  );
}

export default App;
