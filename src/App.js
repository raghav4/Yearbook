/* eslint-disable react/jsx-filename-extension */
import './App.css';

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import AddUser from './components/admin/addUser';
import ManagePolls from './components/admin/managePolls';
import ManageQuestions from './components/admin/manageQuestions';
import AdminNavBar from './components/admin/navbar';
import Navbar from './components/common/navbar';
import PeopleCards from './components/peopleCards';
import ListPolls from './components/pollsList';
import Profile from './components/profile';
import UserInfo from './components/userInfo';

function App() {
  return (
    <>
      {/* <AdminNavBar />
      <Switch>
        <Route path="/questions" component={ManageQuestions} />
        <Route path="/polls/manage" component={ManagePolls} />
        <Route path="/users/add" component={AddUser} />
        <Route path="/users/remove" component={AddUser} />
        <Route path="/" component={UserInfo} exact />
      </Switch> */}
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
