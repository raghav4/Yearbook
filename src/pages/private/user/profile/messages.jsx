import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Emoji } from '../../../../components';

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

    let classes = 'card mx-5 my-3 border-';
    classes += borderColors[index % borderColors.length];
    return classes;
  };

  return (
    <>
      <div className={getClass()}>
        <div className="card-body text-dark">
          <h6
            className="card-title text-center h6-responsive mb-2"
            // style={{ textDecoration: 'underline' }}
          >
            {person}
          </h6>
          {/* <p className="p-responsive">Friendship Rating 🌟</p>
          <Box component="fieldset" mb={1} borderColor="transparent">
            <Rating
              name="customized-empty"
              defaultValue={3.5}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" readOnly />}
            />
            <Rating name="read-only" value={2.4} readOnly />
          </Box> */}
          <p className="h7-responsive">{message}</p>

          <p>
            <Emoji label="🌟" symbol="🌟" />
            <small>You are a friend to Shridhar with a rating of 3.5/5</small>
          </p>
          {/* <p className="purple-text">
            {' '}
            P.S -
          </p> */}
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
