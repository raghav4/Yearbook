import React from 'react';
import propTypes from 'prop-types';

const OthersWrite = ({ person, message }) => {
  return (
    <>
      <div className="card mx-5 my-3">
        <div className="card-body text-dark">
          <h6
            className="card-title text-left h6-responsive mb-2"
            style={{ textDecoration: 'underline' }}
          >
            {person}
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
