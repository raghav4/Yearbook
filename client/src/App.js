/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Navbar from './components/common/navbar';
import Box from './components/contentBox';
import Profile from './components/profile';
import UserInfo from './components/userInfo';
import Admin from './components/admin/admin';
import PollsList from './components/listPolls';
import CreateUser from './components/admin/user';
import LeaderBoard from './components/leaderboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LeaderBoard /> */}
      <CreateUser />
      {/* <Admin /> */}
      {/* <PollsList /> */}
      {/* <Profile /> */}
      {/* <UserInfo /> */}
    </div>
  );
}

export default App;
