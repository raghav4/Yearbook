import React from 'react';
import propTypes from 'prop-types';

const Emoji = ({ label, symbol }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

Emoji.defaultProps = {
  label: '',
  symbol: '',
};

Emoji.propTypes = {
  label: propTypes.string,
  symbol: propTypes.string,
};

export default Emoji;
