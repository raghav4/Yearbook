import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    loggedIn: {
      status: false,
      role: '',
    },
  };
  handleLogIn = () => {
    //this.props.history.push('/login');
    const loggedIn = {
      status: !this.state.loggedIn.status,
      role: 'User',
    };
    this.setState({ loggedIn });
    localStorage.setItem('token', 4);
  };
  handleLogOut = () => {
    const loggedIn = {
      status: !this.state.loggedIn.status,
      role: '',
    };
    this.setState({ loggedIn });
    delete localStorage.token;
  };
  render() {
    const { loggedIn } = this.state;
    return (
      <>
        {!loggedIn.status && (
          <div className="text-center">
            <p className="text-center mt-5">Nobody is Logged in</p>
            <button className="btn btn-primary btn-sm" onClick={() => this.handleLogIn()}>
              Log In
            </button>
          </div>
        )}
        {loggedIn.status && (
          <div className="text-center">
            <p className="text-center mt-5">
              Logged In as{' '}
              <span className="text-center mt-5" style={{ color: 'red' }}>
                {loggedIn.role}
              </span>
            </p>
            <button className="btn btn-success btn-sm" onClick={() => this.handleLogOut()}>
              Log Out
            </button>
          </div>
        )}
      </>
    );
  }
}

export default LoginForm;
