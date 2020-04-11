import React, { Component } from 'react';
import PollCard from './pollCard';

class ListPolls extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card-group">
          <PollCard />
        </div>
      </>
    );
  }
}

export default ListPolls;
