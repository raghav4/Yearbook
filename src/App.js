/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Profile from './components/profile';
import UserInfo from './components/userInfo';
import PeopleCards from './components/peopleCards';
import ListPolls from './components/polls';

function App() {
  return (
    <>
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
