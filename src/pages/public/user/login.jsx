import React, { useContext, useState } from 'react';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { PublicContext } from '../../../contexts';
import { Input, Emoji, TimerAlert } from '../../../components';
import { LoginSchema } from '../../../utils/schemas';
import Auth from '../../../services';

const UserLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [validationErrors, setValidationErrors] = useState({ email: '', password: '' });
  const [Loading, setLoading] = useState(false);
  const { history } = useContext(PublicContext);

  const validateForm = () => {
    const { error } = Joi.validate(credentials, LoginSchema(), { abortEarly: false });
    if (!error) return null;
    const errors = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const validateInputFields = ({ name, value }) => {
    const obj = { [name]: value };
    const fieldSchema = {
      [name]: LoginSchema()[name],
    };
    const { error } = Joi.validate(obj, fieldSchema);

    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...validationErrors };

    const errorMessage = validateInputFields(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    setCredentials({
      ...credentials,
      [input.name]: input.value,
    });

    setValidationErrors({
      ...validationErrors,
      [input.name]: errors[input.name],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    e.target.className += ' was-validated';
    const errors = validateForm();
    setValidationErrors(errors || {});
    if (errors) return;
    try {
      setLoading(true);
      const { email, password } = credentials;
      await Auth.Login(email, password);
      history.push('/');
      TimerAlert('', 'Welcome to the Yearbook', 'success');
    } catch (ex) {
      if (ex.response && (ex.response.status === 400 || ex.response.status === 401)) {
        TimerAlert(' ', ex.response.data, 'error');
      }
      setLoading(false);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="jumbotron col-md-3 mx-5 my-5" style={{ borderRadius: '5%' }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form className="needs-validation" onSubmit={submitHandler} noValidate>
                  <p className="h4 text-center mb-4">
                    Sign In <Emoji symbol="🔐" />
                  </p>
                  <Input
                    name="email"
                    label="Email"
                    value={credentials.email}
                    handleChange={handleChange}
                    error={validationErrors.email}
                    feedback={validationErrors.email}
                  />

                  <Input
                    name="password"
                    label="Password"
                    value={credentials.password}
                    handleChange={handleChange}
                    type="password"
                    error={validationErrors.password}
                    feedback={validationErrors.password}
                  />

                  <div className="text-center mt-4">
                    <MDBBtn color="unique" type="submit" disabled={validateForm()}>
                      {Loading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        'Continue'
                      )}
                    </MDBBtn>
                  </div>
                  <p className="text-center mt-3 mr-2">
                    Not a member?{'  '}
                    <Link to="/signup">Register</Link>
                    <br />
                    Forgot Password?{'  '}
                    <Link to="/reset">Reset Password</Link>
                  </p>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
