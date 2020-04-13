import React, { Component } from 'react';
import SocialLogin from './login/socialLogin';

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row d-flex justify-content-center mx-5 my-5">
          <div className="card" style={{ borderRadius: '1%', backgroundColor: '#f0f0f0' }}>
            <form class="text-center  p-5" action="#!">
              <p class="h4 mb-4">Sign In</p>

              <p>If you've already filled in your details, use email method to login.</p>

              {/* <p>
              <a href="" target="_blank">
                See the last newsletter
              </a>
            </p> */}

              <input
                type="email"
                id="defaultSubscriptionFormEmail"
                class="form-control mb-4"
                placeholder="E-mail"
              />
              <button class="btn btn-info btn-block" type="submit">
                Sign in
              </button>

              {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
