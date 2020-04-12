/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import FlipMove from 'react-flip-move';
import { Alert } from '@material-ui/lab';
import QuestionContent from './questionContent';

class ListQuestions extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    questions: [],
    inputValue: '',
    inputValidationAlert: {
      apply: false,
      message: '',
    },
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) return this.handleAdd(e.target.value);
  };

  render() {
    const { inputValue, inputValidationAlert } = this.state;
    const { pageHeading, placeholder, buttonTitle, questions, handleAdd, onDelete } = this.props;
    return (
      <div className="mb-4">
        <h3 className="h3-responsive text-center mt-4 mb-3">{pageHeading}</h3>
        <div className=" d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card ml-2 mr-2 mb-3">
              <div className="card-body">
                <div className="md-form">
                  <input
                    placeholder={placeholder}
                    type="text"
                    id="form1"
                    className="form-control"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                  {inputValidationAlert.apply && (
                    <Alert severity="error" style={{ fontFamily: 'Sofia Pro Medium' }}>
                      {inputValidationAlert.message}
                    </Alert>
                  )}
                </div>
                <div className="float-left">
                  <MDBBtn
                    className="float-right"
                    color="default"
                    onClick={() => handleAdd(inputValue)}
                  >
                    {buttonTitle}
                  </MDBBtn>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FlipMove enterAnimation="elevator" leaveAnimation="accordionVertical">
          {questions.map((question) => (
            <QuestionContent key={question.id} onDelete={onDelete} question={question} />
          ))}
        </FlipMove>
      </div>
    );
  }
}

export default ListQuestions;
