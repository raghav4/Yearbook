import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="jumbotron col-md-3 mx-5 my-5" style={{ borderRadius: '5%' }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form className="needs-validation">
                  <p className="h4 text-center mb-4">Reset Password</p>
                  <p className="p-responsive text-center mx-3 text-gray">Enter your Phone/Email</p>
                  <small id="emailHelp" className="form-text text-muted">
                    We will never share your email with anyone else.
                  </small>
                  <MDBInput type="tel" label="Phone Number/Email" outline required />

                  <div className="text-center mt-4">
                    <MDBBtn color="unique" type="button">
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
