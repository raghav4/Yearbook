import React from 'react';
import propTypes from 'prop-types';

const NoResults = ({ fontSize, message }) => {
  const classes = `${fontSize}-responsive text-center`;
  return (
    <>
      <h1 className={classes}>{message}</h1>
    </>
  );
};

NoResults.defaultProps = {
  fontSize: 'h1',
  message: 'No Results Found',
};

NoResults.propTypes = {
  fontSize: propTypes.string,
  message: propTypes.string,
};
export default NoResults;
