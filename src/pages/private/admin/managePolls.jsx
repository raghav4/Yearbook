import React, { Component } from 'react';
import axios from 'axios';
import ListQuestions from './questions/listQuestion';

class ManagePolls extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    questions: [],
    inputValue: '',
    inputValidationAlert: {
      apply: false,
      message: '',
    },
  };

  async componentDidMount() {
    const { data: questions } = await axios.get('https://yb-server.herokuapp.com/api/admin/polls');
    // console.log(data);
    this.setState({ questions });
  }

  handleChange = (e) => {
    const newLocal = e.currentTarget;
    this.setState({ inputValue: newLocal.value });
  };

  handleKeyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) return this.handleAdd(e.currentTarget.value);
  };

  handleAdd = async (question) => {
    let updatedInputValidation = {
      apply: false,
      message: '',
    };
    if (question.trim() === '') {
      updatedInputValidation = {
        apply: true,
        message: 'Nothing to add',
      };
      return this.setState({ inputValidationAlert: updatedInputValidation });
    }
    const questionObject = {
      question,
    };
    try {
      const { data: questions } = await axios.post(
        'https://yb-server.herokuapp.com/api/admin/polls',
        questionObject,
      );
      this.setState({ questions });
    } catch (err) {
      console.error(err.response.data);
      updatedInputValidation = {
        apply: true,
        message: err.response.data,
      };
      return this.setState({ inputValidationAlert: updatedInputValidation, inputValue: '' });
    }
    this.setState({ inputValidationAlert: updatedInputValidation, inputValue: '' });
  };

  handleDelete = async (questionId) => {
    try {
      const { data: questions } = await axios.delete(
        `https://yb-server.herokuapp.com/api/admin/polls/${questionId}`,
      );
      //const questions = this.state.questions.filter((q) => q.id !== questionId);
      this.setState({ questions });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  render() {
    const { questions, inputValue, inputValidationAlert } = this.state;
    return (
      <>
        <ListQuestions
          buttonTitle="Add"
          pageHeading="Polls Questions"
          placeholder="Add a Poll Question"
          questions={questions}
          inputValue={inputValue}
          inputValidationAlert={inputValidationAlert}
          handleAdd={this.handleAdd}
          onDelete={this.handleDelete}
          handleKeyPress={this.handleKeyPress}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

export default ManagePolls;
