import React from 'react';
import './App.css';
import Navbar from './components/common/navbar';
import Box from './components/contentBox';
import Profile from './components/profile';
import UserInfo from './components/userInfo';
import Admin from './components/common/admin/admin';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Admin /> */}
      {/* <Profile /> */}
      <UserInfo />
    </div>
  );
}

export default App;
