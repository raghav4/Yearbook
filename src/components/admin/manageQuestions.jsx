import React, { Component } from 'react';
import axios from 'axios';
import ListQuestions from './questions/listQuestion';

class ManageQuestions extends Component {
  state = {
    questions: [],
  };
  handleAdd = async (question) => {
    const questionObject = {
      question,
    };
    try {
      const { data: questions } = await axios.post(
        'http://localhost:3000/api/admin/questions',
        questionObject,
      );
      this.setState({ questions });
    } catch (err) {
      console.error(err.response.data);
    }
    // const questions = [questionObject, ...this.state.questions];
  };

  handleDelete = async (questionId) => {
    try {
      const { data: questions } = await axios.delete(
        `http://localhost:3000/api/admin/questions/${questionId}`,
      );
      //const questions = this.state.questions.filter((q) => q.id !== questionId);
      this.setState({ questions });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  async componentDidMount() {
    const { data: questions } = await axios.get('http://localhost:3000/api/admin/questions');
    // console.log(data);
    this.setState({ questions });
  }

  render() {
    const { questions } = this.state;
    return (
      <>
        <ListQuestions
          buttonTitle="Add Question"
          pageHeading="User Questions"
          placeholder="Add a question"
          questions={questions}
          handleAdd={this.handleAdd}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default ManageQuestions;
