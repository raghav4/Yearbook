import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import ListQuestions from './listQuestions';
import FlipMove from 'react-flip-move';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { Alert } from '@material-ui/lab';

class Admin extends Component {
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
    inputValue: '',
    inputValidationAlert: {
      apply: false,
      message: '',
    },
  };

  handleAdd = questionData => {
    questionData = questionData.trim();
    let inputValidationAlert;
    if (!questionData) {
      inputValidationAlert = {
        apply: true,
        message: 'Nothing to add',
      };
      this.setState({ inputValidationAlert });
      return;
    }
    if (this.state.inputValidationAlert.apply) {
      inputValidationAlert = {
        apply: false,
        message: '',
      };
    }
    const questions = [
      ...this.state.questions,
      { id: this.state.questions.length + 1, questionData },
    ];
    this.setState({ questions, inputValidationAlert });
  };

  handleDelete = questionId => {
    const questions = this.state.questions.filter(q => q.id !== questionId);
    this.setState({ questions });
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleKeyPress = e => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      this.handleAdd(e.target.value);
      return;
    }
  };
  render() {
    return (
      <div className="mb-4">
        <h3 className="h3-responsive text-center mt-4 mb-3">User Questions</h3>

        <div className=" d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card ml-2 mr-2 mb-3">
              <div className="card-body">
                <div className="md-form">
                  <input
                    placeholder="Add a question"
                    type="text"
                    id="form1"
                    className="form-control"
                    onChange={this.handleChange}
                    // onKeyPress={this.handleKeyPress.bind(this)}
                  />
                  {this.state.inputValidationAlert.apply && (
                    <Alert
                      severity="error"
                      style={{ fontFamily: 'Sofia Pro Medium' }}
                    >
                      {this.state.inputValidationAlert.message}
                    </Alert>
                  )}
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="float-left">
                  <MDBBtn
                    className="float-right"
                    gradient="green"
                    onClick={() => this.handleAdd(this.state.inputValue)}
                  >
                    Add Question
                  </MDBBtn>
                </div>
              </div>
              {/* <label for="form1">Example label</label> */}
            </div>
          </div>
        </div>
        <FlipMove>
          {this.state.questions.map(question => (
            <ListQuestions
              key={question.id}
              onDelete={this.handleDelete}
              question={question}
            />
          ))}
        </FlipMove>
      </div>
    );
  }
}

export default Admin;
