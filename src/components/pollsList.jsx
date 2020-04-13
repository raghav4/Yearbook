import React, { Component } from 'react';
import PollCard from './pollCard';
import axios from 'axios';

class ListPolls extends Component {
  state = {
    persons: [],
  };
  async componentDidMount() {
    let { data: persons } = await axios.get('http://localhost:3000/api/user');
    persons = persons.map((person) => person.name);
    this.setState({ persons });
    console.log(persons);
  }

  render() {
    const { persons } = this.state;
    return (
      <>
        <div className="card-group">
          <PollCard
            persons={persons}
            questionTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          />
        </div>
      </>
    );
  }
}

export default ListPolls;
