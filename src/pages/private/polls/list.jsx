import React, { Component } from 'react';
import axios from 'axios';
// import Swal from 'sweetalert2';
import LinearProgress from '@material-ui/core/LinearProgress';
import PollCard from './card';
import { CustomAlert } from '../../../components';

class ListPolls extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    ProgressBar: true,
    questions: [],
    persons: [],
  };

  async componentDidMount() {
    const { data: questions } = await axios.get('https://yb-server.herokuapp.com/api/admin/polls');
    const { data: persons } = await axios.get('https://yb-server.herokuapp.com/api/user');
    this.setState({ questions, persons, ProgressBar: !this.state.ProgressBar });
  }

  // handleClick = (message) => {
  //   CustomAlert(message);
  // };

  render() {
    const { ProgressBar, questions, persons } = this.state;
    return (
      <>
        {ProgressBar && <LinearProgress variant="indeterminate" color="primary" />}
        <h2 className="h2-responsive text-center mt-5">Vote for the Polls</h2>
        <div className="mx-4 mb-5 row row-cols-1 row-cols-md-4">
          {questions.map((question) => (
            <PollCard
              key={question._id}
              questionTitle={question.question}
              question={question}
              persons={persons}
              handleClick={(message) => CustomAlert(message)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ListPolls;
