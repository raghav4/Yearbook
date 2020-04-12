/* eslint-disable react/jsx-filename-extension */
import './App.css';

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Navbar from './components/common/navbar';
import PeopleCards from './components/peopleCards';
import ListPolls from './components/polls';
import Profile from './components/profile';
import UserInfo from './components/userInfo';

function App() {
  return (
      <><Navbar /><Switch>
      <Route path = "/write" component =
       { PeopleCards } />
        <Route path="/profile " component={Profile} />
       < Route path = "/polls" component =
       { ListPolls } />
        <Route path="/" component={UserInfo} exact />
       < /Switch>
    </>);
}

export default App;
