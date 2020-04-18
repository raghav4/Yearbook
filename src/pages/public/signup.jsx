import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {};

  submitHandler = (event) => {
    event.preventDefault();
    // event.target.className += ' was-validated';
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="jumbotron col-md-5 mx-5 my-5" style={{ borderRadius: '5%' }}>
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
                    <p className="h4 text-center mb-4">Sign up</p>
                    <MDBInput type="text" label="Full Name" outline required>
                      {/* <div className="valid-feedback ml-3 pl-3">Looks good!</div> */}
                    </MDBInput>
                    <MDBInput
                      type="tel"
                      label="Phone Number"
                      outline
                      pattern="[1-9]{1}[0-9]{9}"
                      required
                    ></MDBInput>
                    <MDBInput type="email" label="Email" outline required></MDBInput>
                    <MDBInput type="password" label="Password" outline required></MDBInput>
                    <MDBInput type="password" label="Confirm Password" outline required></MDBInput>
                    <div className="text-center mt-4">
                      <MDBBtn color="unique" type="submit">
                        Register
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
      </>
    );
  }
}

export default SignUp;
