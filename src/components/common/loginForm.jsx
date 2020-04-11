import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBContainer,
} from 'mdbreact';
import Swal from 'sweetalert2';

const LoginForm = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-5 ml-4 mr-4">
        <div className="card mb-3">
          <div className="card-header bg-dark text-white">Header</div>
          <div className="card-body">
            <p className="card-text">
              {/* Some quick example text to build on the panel title and make up the bulk of the
              panel's content. */}
              <form className="text-center border border-light p-5" action="#!">
                <p className="h4 mb-4">Sign in</p>

                <input
                  type="tel"
                  id="defaultLoginFormEmail"
                  className="form-control mb-4"
                  placeholder="Phone"
                />
                {/* <input
                  type="OTP"
                  id="defaultLoginFormPassword"
                  className="form-control mb-4"
                  placeholder="OTP"
                /> */}

                <div className="d-flex justify-content-around">
                  <div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="defaultLoginFormRemember"
                      />
                      <button className="btn btn-light-green btn-block my-4" type="submit">
                        Sign in
                      </button>
                      {/* <label className="custom-control-label" for="defaultLoginFormRemember">
                        Remember me
                      </label> */}
                    </div>
                  </div>
                  {/* <div>
                    <a href="">Forgot password?</a>
                  </div> */}
                </div>

                {/* <button className="btn btn-light-green btn-block my-4" type="submit">
                  Sign in
                </button> */}

                {/* <p>
                  Not a member?
                  <a href="">Register</a>
                </p>
                <p>or sign in with:</p>

                <a href="#" className="mx-2" role="button">
                  <i className="fab fa-facebook-f light-blue-text"></i>
                </a>
                <a href="#" className="mx-2" role="button">
                  <i className="fab fa-twitter light-blue-text"></i>
                </a>
                <a href="#" className="mx-2" role="button">
                  <i className="fab fa-linkedin-in light-blue-text"></i>
                </a>
                <a href="#" className="mx-2" role="button">
                  <i className="fab fa-github light-blue-text"></i>
                </a> */}
              </form>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
