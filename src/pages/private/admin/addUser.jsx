import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Swal from 'sweetalert2';
import Joi from 'joi-browser';
import http from '../../../services/httpService';
import { apiUrl } from '../../../config.json';
import { EmailAccess } from '../../../utils/schemas';
import { Input } from '../../../components';

const GrantUserAccess = () => {
  const [password, setPassword] = useState('');

  const generateRandomPassword = (passwordLength = 10) => {
    const buf = new Uint8Array(passwordLength);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf));
  };

  const handleChange = (e) => {
    setPassword(e.target.value)
  };

  return (<>
    <div className="d-flex justify-content-center mb-5">
        <div className="jumbotron col-md-5 mx-5 my-5" style={{ borderRadius: '3%' }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form
                  className="needs-validation"
                  // onSubmit={submitHandler}
                  noValidate
                >
                  <p className="h4 text-center mb-4">Register User</p>
                  <Input
                    name="name"
                    label="Full Name"
                    // value={credentials.name}
                    // error={validationErrors.name}
                    // feedback={validationErrors.name}
                    // handleChange={handleChange}
                  />
                  <Input
                    name="rollno"
                    label="Roll No. (User ID)"
                    // value={credentials.name}
                    // error={validationErrors.name}
                    // feedback={validationErrors.name}
                    // handleChange={handleChange}
                  />
                  <div className="my-4">
                    <select
                      className="browser-default custom-select"
                      // onChange={(e) =>
                      //   setCredentials({
                      //     ...credentials,
                      //     department: e.target.value,
                      //   })
                      // }
                    >
                      <option>Choose Department</option>
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
                      // onChange={(e) =>
                      //   setCredentials({
                      //     ...credentials,
                      //     section: e.target.value,
                      //   })
                      // }
                    >
                      <option>Choose Section</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
                  <div className="text-center">
                  <Input
                    name="password"
                    label="Password"
                    value={password}
                    // type="password"
                    // value={credentials.password}
                    // error={validationErrors.password}
                    // feedback={validationErrors.password}
                    handleChange={handleChange}
                  />
                  <MDBBtn color="secondary" size="sm" onClick={() => setPassword(generateRandomPassword())}>Generate Random Password</MDBBtn>
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn rounded color="unique" type="submit">
                      Register
                      {/* {Loading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        'Register'
                      )} */}
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default GrantUserAccess;
