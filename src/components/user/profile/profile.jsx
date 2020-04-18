import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import PersonalCard from './profileCard/card';
import Box from './questions/self';
import OthersWrite from './questions/others';

class Profile extends Component {
  state = {
    selfAnswers: [],
  };
  async componentDidMount() {
    const { data: questions } = await axios.get(
      'https://yb-server.herokuapp.com/api/answer/5e956c060fda390017da67b7',
    );
    const selfAnswers = _.map(questions, _.partialRight(_.pick, ['answer', 'questionId']));
    this.setState({ selfAnswers });
  }

  render() {
    return (
      <>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-sm-8 order-2 order-lg-1" style={{ backgroundColor: 'white' }}>
              <h3 className="h3-responsive text-center">Answers about yourself</h3>
              <div className="card-group">
                {this.state.selfAnswers.map((answer) => (
                  <Box answer={answer} />
                ))}
              </div>
              <h3 className="h3-responsive text-center">Answers others have written for you</h3>
              <OthersWrite />
            </div>
            <div className="col-sm-4 order-1 order-lg-2">
              <div className="row" style={{ backgroundColor: 'white' }}>
                <PersonalCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
