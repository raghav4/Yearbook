import React, { Component } from 'react';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import PollCard from './card';
import Swal from 'sweetalert2';

class ListPolls extends Component {
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
  HandleClick(message) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: `Voted for ${message}`,
    });
  }
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
              HandleClick={this.HandleClick}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ListPolls;
