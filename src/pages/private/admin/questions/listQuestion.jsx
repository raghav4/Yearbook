import React from 'react';
import { MDBBtn } from 'mdbreact';
import propTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import { Alert } from '@material-ui/lab';
import Question from './questionContent';

const ListQuestions = ({
  inputValue,
  pageHeading,
  placeholder,
  buttonColor,
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
                  onChange={(e) => handleChange(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                {inputValidationAlert.apply && (
                  <Alert severity="error">
                    {inputValidationAlert.message}
                  </Alert>
                )}
              </div>
              <div className="float-left">
                <MDBBtn color={buttonColor} onClick={() => handleAdd()}>
                  {buttonTitle}
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FlipMove
        staggerDelayBy={50}
        appearAnimation="accordionVertical"
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
      >
        {questions.map((item) => (
          // #TODO: #34 Prop Drilling with OnDelete
          <div key={item._id}>
            <Question
              key={item._id}
              onDelete={onDelete}
              question={item.question}
              id={item._id}
            />
          </div>
        ))}
      </FlipMove>
    </div>
  );
};

ListQuestions.defaultProps = {
  buttonColor: 'default',
};

ListQuestions.propTypes = {
  buttonColor: propTypes.string,
  onDelete: propTypes.func.isRequired,
  handleAdd: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  handleKeyPress: propTypes.func.isRequired,
  inputValue: propTypes.string.isRequired,
  pageHeading: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  buttonTitle: propTypes.string.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
  inputValidationAlert: propTypes.objectOf(
    propTypes.oneOfType([propTypes.string, propTypes.bool]),
  ).isRequired,
};

export default ListQuestions;
