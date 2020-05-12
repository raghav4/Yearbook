import React, { Component } from 'react';
import axios from 'axios';
import ListQuestions from './questions/listQuestion';

class ManageQuestions extends Component {
  state = {
    questions: [],
    inputValue: '',
    inputValidationAlert: {
      apply: false,
      message: '',
    },
  };

  async componentDidMount() {
    const { data: questions } = await axios.get(
      'https://yb-server.herokuapp.com/api/admin/questions',
    );
    this.setState({ questions });
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) return this.handleAdd(e.target.value);
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
        'https://yb-server.herokuapp.com/api/admin/questions',
        questionObject,
      );
      this.setState({ questions });
    } catch (err) {
      console.error(err.response.data);
      updatedInputValidation = {
        apply: true,
        message: err.response.data,
      };
      return this.setState({ inputValidationAlert: updatedInputValidation });
    }
    this.setState({ inputValidationAlert: updatedInputValidation, inputValue: '' });
  };

  handleDelete = async (questionId) => {
    try {
      const { data: questions } = await axios.delete(
        `https://yb-server.herokuapp.com/api/admin/questions/${questionId}`,
      );
      //const questions = this.state.questions.filter((q) => q.id !== questionId);
      this.setState({ questions });
    } catch (err) {}
  };

  render() {
    const { questions, inputValue, inputValidationAlert } = this.state;
    return (
      <>
        <ListQuestions
          buttonTitle="Add Question"
          pageHeading="User Questions"
          placeholder="Add a question"
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

export default ManageQuestions;
