/* eslint-disable react/jsx-filename-extension */
import './App.css';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PeopleCards from './components/user/writes/peopleCards';
import Profile from './components/user/profile/profile';
import ManageQuestions from './components/admin/manageQuestions';
import UserInfo from './components/user/details';
import Navbar from './components/user/navbar';

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
        <Route path="/profile" component={Profile} />
        <Route path="/polls" component={ManageQuestions} />
        <Route path="/" component={UserInfo} exact />
      </Switch>
    </>
  );
}

export default App;
