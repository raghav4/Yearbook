import React, { useState } from 'react';
import propTypes from 'prop-types';
import SplitText from 'react-pose-text';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import { apiUrl, endPoints } from '../../../../config.json';
import { TimerAlert } from '../../../../components';
import http from '../../../../services/httpService';

const AnswerBox = ({ question, questionId, answer, answerId }) => {
  const [CurrentAnswer, setCurrentAnswer] = useState(answer);

  const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 10,
    },
  };

  const handleUpdate = async () => {
    try {
      await http.put(`${apiUrl}/${endPoints.slamBook.upsertAnswer}`, {
        answer: CurrentAnswer,
        questionId,
      });
      TimerAlert('', 'Successfully updated answer', 'success');
    } catch (ex) {}
  };

  const handleDelete = async () => {
    try {
      await http.delete(
        `${apiUrl}/${endPoints.slamBook.deleteQuestionById}/${answerId}`,
      );
      TimerAlert('', 'Successfully Deleted answer', 'success');
      setCurrentAnswer('');
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        // TODO #31: Check the status code
        TimerAlert('Error', 'The answer has already been deleted', 'error');
      }
    }
  };
  return (
    <>
      <div className="mx-4 my-4">
        <MDBContainer>
          <MDBCard>
            <MDBCardHeader
              color="unique-color-dark lighten-1"
              className="text-center"
            >
              <div className="text-center">
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                  {question}
                </SplitText>
              </div>
            </MDBCardHeader>
            <MDBCardBody>
              {/* Rendering the Text Area */}
              <div className="md-form">
                <textarea
                  placeholder="Write your answer here"
                  className="md-textarea form-control"
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  value={CurrentAnswer}
                  rows="3"
                />
              </div>
              <div className="text-center mt-1">
                <Tooltip title="Delete Answer">
                  <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add Answer">
                  <IconButton aria-label="add" onClick={handleUpdate}>
                    <AddCircleIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </>
  );
};

AnswerBox.defaultProps = {
  question: 'Question title to appear here',
};
AnswerBox.propTypes = {
  question: propTypes.string,
  questionId: propTypes.string.isRequired,
  answer: propTypes.string.isRequired,
};

export default AnswerBox;
