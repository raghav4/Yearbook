import React from 'react';
import propTypes from 'prop-types';

const NoResults = ({ fontSize }) => {
  const classes = `${fontSize}-responsive text-center`;
  return (
    <>
      <h1 className={classes}>No Results Found</h1>
    </>
  );
};

NoResults.defaultProps = {
  fontSize: 'h1',
};

NoResults.propTypes = {
  fontSize: propTypes.string,
};
export default NoResults;
