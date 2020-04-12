import React, { Component } from 'react';
import ListQuestions from './questions/listQuestion';

class ManagePolls extends Component {
  state = {
    questions: [
      {
        id: 1,
        questionData:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum, voluptatibus odio veritatis veniam tempora natus provident qui exercitationem, minima perspiciatis quibusdam deserunt impedit vero eos officiis aliquid eveniet dolorem!',
      },
      {
        id: 2,
        questionData:
          'Volutpat sed cras ornare arcu dui vivamus. Vel quam elementum pulvinar etiam non quam lacus. Non tellus orci ac auctor augue mauris.',
      },
      {
        id: 3,
        questionData:
          'Quis varius quam quisque id diam. Etiam dignissim diam quis enim lobortis. Nisi vitae suscipit tellus mauris a',
      },
    ],
  };
  handleAdd = (questionData) => {
    let updatedInputValidation = {
      apply: false,
      message: '',
    };
    if (questionData.trim() === '') {
      updatedInputValidation = {
        apply: true,
        message: 'Nothing to add',
      };
      return this.setState({ inputValidationAlert: updatedInputValidation });
    }
    const questions = [
      ...this.state.questions,
      { id: this.state.questions.length + 1, questionData },
    ];
    this.setState({ questions, inputValidationAlert: updatedInputValidation, inputValue: '' });
  };

  handleDelete = (questionId) => {
    const questions = this.state.questions.filter((q) => q.id !== questionId);
    this.setState({ questions });
  };
  render() {
    const { questions } = this.state;
    return (
      <>
        <ListQuestions
          buttonTitle="Add"
          pageHeading="Polls Questions"
          placeholder="Add a Poll Question"
          questions={questions}
          handleAdd={this.handleAdd}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default ManagePolls;
