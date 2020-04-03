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
        <div class="card mb-3">
          <div class="card-header bg-dark text-white">Header</div>
          <div class="card-body">
            {/* <h5 class="card-title">Primary Panel title</h5> */}
            <p class="card-text">
              {/* Some quick example text to build on the panel title and make up the bulk of the
              panel's content. */}
              <form class="text-center border border-light p-5" action="#!">
                <p class="h4 mb-4">Sign in</p>

                <input
                  type="email"
                  id="defaultLoginFormEmail"
                  class="form-control mb-4"
                  placeholder="Phone"
                />
                {/* <input
                  type="OTP"
                  id="defaultLoginFormPassword"
                  class="form-control mb-4"
                  placeholder="OTP"
                /> */}

                <div class="d-flex justify-content-around">
                  <div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="defaultLoginFormRemember"
                      />
                      <label class="custom-control-label" for="defaultLoginFormRemember">
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* <div>
                    <a href="">Forgot password?</a>
                  </div> */}
                </div>

                <button class="btn peach-gradient btn-block my-4" type="submit">
                  Sign in
                </button>

                {/* <p>
                  Not a member?
                  <a href="">Register</a>
                </p>
                <p>or sign in with:</p>

                <a href="#" class="mx-2" role="button">
                  <i class="fab fa-facebook-f light-blue-text"></i>
                </a>
                <a href="#" class="mx-2" role="button">
                  <i class="fab fa-twitter light-blue-text"></i>
                </a>
                <a href="#" class="mx-2" role="button">
                  <i class="fab fa-linkedin-in light-blue-text"></i>
                </a>
                <a href="#" class="mx-2" role="button">
                  <i class="fab fa-github light-blue-text"></i>
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
