import React, { useState } from 'react';
import propTypes from 'prop-types';
import SplitText from 'react-pose-text';
import axios from 'axios';
import cookies from 'react-cookies';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import { NotifyAlert } from '../../../components';

const AnswerBox = ({ question, questionId, userAnswers }) => {
  const [currentAnswer, setCurrentAnswer] = useState('');
  // useEffect(() => {
  //   const isAnswered = _.filter(userAnswers, (answer) => answer.questionId._id === questionId);
  //   if (isAnswered.length > 0) {
  //     setCurrentAnswer(isAnswered[0].answer);
  //   }
  // }, []);

  const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 20,
    },
  };

  const handleAnswer = () => {
    const postAnswer = async () => {
      try {
        const { data } = await axios.put(
          'http://localhost:5000/api/user/answers',
          { answer: currentAnswer, questionId },
          {
            headers: { 'x-auth-token': cookies.load('x-auth-token') },
          },
        );
        console.log(data);
      } catch (ex) {
        console.log(ex.response);
      }
    };
    postAnswer();
  };

  return (
    <>
      <div className="mx-4 my-4">
        <MDBContainer>
          <MDBCard>
            <MDBCardHeader color="unique-color-dark lighten-1" className="text-center">
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
                  value={currentAnswer}
                  rows="3"
                />
              </div>
              <div className="text-center mt-1">
                <Tooltip title="Delete Answer">
                  <IconButton aria-label="delete" onClick={() => NotifyAlert(currentAnswer)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add Answer">
                  <IconButton aria-label="add" onClick={handleAnswer}>
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
  userAnswers: propTypes.instanceOf(Array).isRequired,
};

export default AnswerBox;
