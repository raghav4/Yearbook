import React from 'react';
import { MDBBtn } from 'mdbreact';
import FlipMove from 'react-flip-move';
import { Alert } from '@material-ui/lab';
import QuestionContent from './questionContent';

const ListQuestions = ({
  inputValue,
  pageHeading,
  placeholder,
  buttonTitle,
  questions,
  handleAdd,
  handleChange,
  onDelete,
  handleKeyPress,
  inputValidationAlert,
}) => {
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
                  value={inputValue}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
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
                  gradient="green"
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
          <QuestionContent key={question._id} onDelete={onDelete} question={question} />
        ))}
      </FlipMove>
    </div>
  );
};

export default ListQuestions;
