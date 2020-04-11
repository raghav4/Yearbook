import React, { Component } from 'react';
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
});

class Auth extends Component {
  state = {
    isSignedIn: false,
  };
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // Invisible reCAPTCHA with image challenge and bottom left badge.
        recaptchaParameters: {
          type: 'image',
          size: 'invisible',
          badge: 'bottomleft',
        },
      },
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log('user', user);
    });
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center my-5 mx-3">
          <div className="card bg-success">
            <div className="card-header bg-dark text-white text-center">
              <div>
                <AccountCircleIcon fontSize="small" className="mr-1" />
                Login
              </div>
            </div>
            <div className="card-body">
              {this.state.isSignedIn ? (
                <div className="text-center mt-5">
                  <p className="">Signed In</p>
                  <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                  <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
                  <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
                </div>
              ) : (
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Auth;
