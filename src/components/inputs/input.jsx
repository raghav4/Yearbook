import React from 'react';
import { MDBInput } from 'mdbreact';
// import { Alert } from '@material-ui/lab';
import propTypes from 'prop-types';

const Input = ({ name, label, value, handleChange, error, feedback, icon, type, isDisabled }) => {
  return (
    <>
      <MDBInput
        value={value}
        onChange={handleChange}
        type={type}
        id={name}
        name={name}
        label={label}
        disabled={isDisabled}
        className={error ? 'form-control is-invalid' : ''}
        icon={icon}
        outline
        required
      >
        {/* {error && (
          <Alert severity="error" style={{ fontFamily: 'Sofia Pro Medium' }}>
            {feedback}
          </Alert>
        )} */}
        <div className="invalid-feedback ml-3 pl-3">{feedback}</div>
      </MDBInput>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  icon: '',
  feedback: '',
  error: false,
  isDisabled: false,
};

Input.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  feedback: propTypes.string,
  icon: propTypes.string,
  type: propTypes.string,
  error: propTypes.bool,
  isDisabled: propTypes.bool,
};

export default Input;
