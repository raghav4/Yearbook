import React from 'react';
import propTypes from 'prop-types';

const Message = ({ person, message, index }) => {
  const getClass = () => {
    const borderColors = [
      'primary',
      'success',
      'danger',
      'secondary',
      'warning',
      'info',
      'dark',
    ];

    let classes = 'animated fadeIn slow card mx-5 my-3 border-';
    classes += borderColors[index % borderColors.length];
    return classes;
  };

  return (
    <>
      <div className={getClass()}>
        <div className="card-body text-dark">
          <p className="p-responsive" style={{ fontFamily: 'Product Sans' }}>
            {message}
          </p>
          <p
            className="text-right my-2"
            style={{ fontWeight: 500, fontStyle: 'italic', color: '#535c68' }}
          >
            -{person}
          </p>
        </div>
      </div>
    </>
  );
};

Message.propTypes = {
  person: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
};

export default Message;
