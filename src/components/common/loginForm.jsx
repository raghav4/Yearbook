import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    loginStatus: {
      isLoggedIn: false,
      role: '',
    },
    roleValue: '',
  };
  handleLogin = () => {
    const loginStatus = {
      isLoggedIn: true,
      role: this.state.roleValue,
    };
    this.setState({ loginStatus });
  };
  handleLogOut = () => {
    const loginStatus = {
      isLoggedIn: false,
      role: '',
    };
    this.setState({ loginStatus });
  };
  handleSelectchange = (e) => {
    e.persist();
    this.setState({ roleValue: e.target.value });
  };
  render() {
    const { loginStatus, role } = this.state;
    return (
      <>
        <div className="d-flex justify-content-center mx-5 my-5">
          <div className="card" style={{ borderRadius: '1%', backgroundColor: '#fffff' }}>
            <form className="text-center p-5" action="#!">
              <h4 className="h4 mb-4">Sign In</h4>
              {loginStatus.isLoggedIn && (
                <p className="p-responsive">Logged In As {loginStatus.role}</p>
              )}
              <select className="browser-default custom-select" onChange={this.handleSelectchange}>
                <option disabled>Open this select menu</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              {!loginStatus.isLoggedIn && (
                <div>
                  <button className="btn btn-primary btn-md" onClick={this.handleLogin}>
                    LogIn
                  </button>
                </div>
              )}
              {loginStatus.isLoggedIn && (
                <div>
                  <button className="btn btn-primary btn-md" onClick={this.handleLogOut}>
                    Log Out
                  </button>
                </div>
              )}
              {/* <div className="form-group text-center justify-content-center row">
                <div className="col-xs-5">
                  <label className="sr-only" for="inlineFormInputGroup">
                    Username
                  </label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">+91</div>
                    </div>
                    <input
                      type="tel"
                      className="form-control py-0"
                      id="inlineFormInputGroup"
                      placeholder="Phone"
                    />
                  </div>
                  <button className="btn btn-primary btn-block" type="submit">
                    Sign in
                  </button>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
