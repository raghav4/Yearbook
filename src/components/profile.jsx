import React, { Component } from 'react';
import PersonalCard from './personalCard';
import Box from './contentBox';
class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <PersonalCard />
        <br />
        <Box />
      </>
    );
  }
}

export default Profile;
