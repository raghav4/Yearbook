import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    loggedIn: false,
  };
  submitHandler = () => {
    this.state.loggedIn === true ? delete localStorage.token : localStorage.setItem('token', 4);
    this.setState({ loggedIn: !this.state.loggedIn });
    window.location.reload();
  };
  render() {
    const { loggedIn } = this.state;
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="jumbotron col-md-3 mx-5 my-5" style={{ borderRadius: '5%' }}>
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <form className="needs-validation">
                    <p className="h4 text-center mb-4">Sign In</p>
                    {/* <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                    <MDBInput type="email" label="Email" outline required></MDBInput>
                    <MDBInput type="password" label="Password" outline required></MDBInput>

                    <div className="text-center mt-4">
                      <MDBBtn color="unique" type="button" onClick={this.submitHandler}>
                        Continue
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
  }
}

export default Login;
