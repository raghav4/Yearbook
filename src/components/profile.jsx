import React, { Component } from 'react';
import PersonalCard from './personalCard';
import Box from './contentBox';
class Profile extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-sm-8 order-2 order-lg-1" style={{ backgroundColor: 'white' }}>
              <h3 className="h3-responsive text-center">Answers about yourself</h3>
              <Box />
              <Box />
              <Box />
              <h3 className="h3-responsive text-center">Answers others have written for you</h3>
              <Box />
              <Box />
              <Box />
            </div>
            <div className="col-sm-4 order-1 order-lg-2">
              <div className="row" style={{ backgroundColor: 'white' }}>
                <PersonalCard />
              </div>
              {/* <div className="row" style={{ backgroundColor: 'white' }}>
                <PersonalCard />
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
