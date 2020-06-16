import React, { useState } from 'react';
import Joi from 'joi-browser';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { TimerAlert, Input, Emoji } from '../../../components';
import { SignUpSchema } from '../../../utils/schemas';
import http from '../../../services/httpService';
import { apiUrl } from '../../../config.json';

const SignUp = () => {
  const [phoneVerified, setphoneVerified] = useState(false);
  const [phoneNumber, setphoneNumber] = useState('');
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    phoneNo: '',
    password: '',
    department: '',
    section: '',
  });
  const [confirmPassword, setconfirmPassword] = useState('');
  const [department, setdepartment] = useState([
    'CSE',
    'IT',
    'EEE',
    'ECE',
    'MAE',
  ]);
  const [section, setsection] = useState(['A', 'B', 'C']);
  const [Loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    password: '',
    phoneNo: '',
    department: '',
    section: '',
  });
  const renderSignUp = () => {
    return (
      <div className="d-flex justify-content-center mb-5">
        <div
          className="jumbotron col-md-5 mx-5 my-5"
          style={{ borderRadius: '3%' }}
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form
                  className="needs-validation"
                  onSubmit={submitHandler}
                  noValidate
                >
                  <p className="h4 text-center mb-4">Sign up</p>
                  <Input
                    name="name"
                    label="Full Name"
                    value={credentials.name}
                    error={validationErrors.name}
                    feedback={validationErrors.name}
                    handleChange={handleChange}
                  />
                  <Input
                    name="email"
                    label="Email"
                    value={credentials.email}
                    error={validationErrors.email}
                    feedback={validationErrors.email}
                    handleChange={handleChange}
                  />
                  <div className="my-4">
                    <select
                      className="browser-default custom-select"
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          department: e.target.value,
                        })
                      }
                    >
                      <option>Choose your Department</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="MAE">MAE</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="browser-default custom-select"
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          section: e.target.value,
                        })
                      }
                    >
                      <option>Choose your Section</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
                  <Input
                    name="password"
                    label="Password"
                    type="password"
                    value={credentials.password}
                    error={validationErrors.password}
                    feedback={validationErrors.password}
                    handleChange={handleChange}
                  />
                  <Input
                    name="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    handleChange={(e) => setconfirmPassword(e.target.value)}
                  />

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="unique"
                      type="submit"
                      disabled={validateForm()}
                    >
                      {Loading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        'Register'
                      )}
                    </MDBBtn>
                  </div>
                  <p className="text-center mt-3 mr-2">
                    Already a member?{'  '}
                    <Link to="/login">Sign In</Link>
                  </p>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  };

  const renderPhoneVerify = () => {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div
          className="jumbotron col-md-3 mx-5 my-5"
          style={{ borderRadius: '2%' }}
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form
                  className="needs-validation"
                  onSubmit={verifyPhone}
                  noValidate
                >
                  <p className="h4 text-center mb-4">
                    Verify your phone <Emoji label="phone" symbol="📱" />
                  </p>
                  <MDBInput label="Phone Number" />
                  <button
                    type="button"
                    className="btn btn-info btn-md btn-block"
                    onClick={() => setphoneVerified(true)}
                  >
                    Verify Phone
                  </button>
                  {/* <MDBBtn color="deep-purple" type="submit">
                      {Loading ? (
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        'Continue'
                      )}
                    </MDBBtn> */}

                  {/* <div className="text-center mt-4">

                  </div> */}
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  };
  // TODO #23: Get Department and section from the backend

  const handleVerification = async ({ name, email, password, phoneNo }) => {
    Swal.mixin({
      input: 'text',
      inputValidator: (value) => {
        if (!value) {
          return 'Please Enter the OTP!';
        }
      },
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      showCloseButton: true,
      onClose: () => {},
      // progressSteps: ['1'],
    })
      .queue([
        {
          title: 'Email Verification',
          html: `Enter the OTP sent to your Email`,
        },
      ])
      .then(async (result) => {
        if (result.value) {
          const user = {
            otp: result.value[0],
            name,
            email,
            phoneNo,
            password,
            department: credentials.department,
            section: credentials.section,
          };
          try {
            await http.post(`${apiUrl}/api/user/signup/verify`, user);
            Swal.fire({
              icon: 'success',
              title: 'Registeration Successfull',
              text: 'You can login now',
              html:
                '<p>Go to the <a href="/login">Login</a> Page to continue</p>',
            });
          } catch (ex) {
            TimerAlert('Error', 'Something Failed', 'error');
          }
        }
      });
  };

  const validateForm = () => {
    const { error } = Joi.validate(credentials, SignUpSchema(), {
      abortEarly: false,
    });
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
      [name]: SignUpSchema()[name],
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

  const verifyPhone = async () => {};

  const submitHandler = async (e) => {
    e.preventDefault();
    e.target.className += ' was-validated';

    if (credentials.password !== { confirmPassword }.confirmPassword) {
      TimerAlert('Try Again', `Password doesn't matches`, 'error');
      return;
    }
    const errors = validateForm();
    setValidationErrors(errors || {});
    if (errors) return;

    const userObject = {
      name: credentials.name,
      email: credentials.email,
      phoneNo: credentials.phoneNo,
      password: credentials.password,
      department: credentials.department,
      section: credentials.section,
    };
    try {
      setLoading(true);
      await http.post(`${apiUrl}/api/user/signup`, userObject);
      handleVerification(userObject);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        TimerAlert('Error', ex.response.data, 'error');
      }
      setLoading(false);
    }
  };

  return <>{phoneVerified ? renderSignUp() : renderPhoneVerify()}</>;
};

export default SignUp;
