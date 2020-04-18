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
          <div className="jumbotron col-md-3 mx-5 my-5">
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <form className="needs-validation">
                    <p className="h4 text-center mb-4">Sign In</p>
                    <p className="p-responsive text-center mx-3 text-gray">
                      Enter your WhatsApp Number
                    </p>
                    {/* <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                    <MDBInput type="tel" label="Phone Number" outline required></MDBInput>

                    <div className="text-center mt-4">
                      <MDBBtn color="unique" type="button" onClick={this.submitHandler}>
                        Continue
                      </MDBBtn>
                    </div>
                    <p className="text-center mt-3 mr-2">
                      Not a member?{'  '}
                      <Link to="/signup">Register</Link>
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
