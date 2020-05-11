import React from 'react';
import propTypes from 'prop-types';
import SplitText from 'react-pose-text';

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 20,
  },
};

const OthersWrite = ({ person, message }) => {
  return (
    <>
      <div className="card mx-5 my-3">
        <div className="card-body text-dark">
          <h6
            className="card-title text-left h6-responsive mb-2"
            style={{ textDecoration: 'underline' }}
          >
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              {person}
            </SplitText>
          </h6>
          <p className="card-text">{message}</p>
        </div>
      </div>
    </>
  );
};

OthersWrite.propTypes = {
  person: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
};

export default OthersWrite;
