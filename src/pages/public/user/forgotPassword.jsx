import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';
import http from '../../../services/httpService';
import { apiUrl } from '../../../config.json';
import { RequestStatus } from '../../../components';

const ForgotPassword = () => {
  const [inputValue, setInputValue] = useState('');

  const handleReset = async () => {
    // Validate the User Input.
    try {
      // const { data } =
      await http.post(`${apiUrl}/api/user/reset`, {
        input: inputValue,
      });
    } catch (err) {
      RequestStatus('Oops!', err.response.data, 'error');
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="jumbotron col-md-3 mx-5 my-5" style={{ borderRadius: '2%' }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form className="needs-validation">
                  <p className="h4 text-center mb-4">Reset Password</p>
                  <p className="p-responsive text-center mx-3 text-gray">
                    Enter your Phone/Email
                  </p>
                  <small id="emailHelp" className="form-text text-muted">
                    We will never share your email with anyone else.
                  </small>
                  <MDBInput
                    type="tel"
                    label="Email or Phone Number"
                    outline
                    required
                    onChange={(e) => setInputValue(e.target.value)}
                  />

                  <div className="text-center mt-4">
                    <MDBBtn color="unique" onClick={handleReset}>
                      Continue
                    </MDBBtn>
                  </div>
                  <p className="text-center mt-3 mr-2">
                    Not a member?{'  '}
                    <Link to="/signup">Register</Link>
                    <br />
                    Remember Password?{'  '}
                    <Link to="/login">Login</Link>
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

export default ForgotPassword;
