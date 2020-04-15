import React from 'react';
import { Helmet } from 'react-helmet';

const SocialLogin = () => {
  return (
    <>
      <div className="application">
        <Helmet>
          <script src="https://apis.google.com/js/platform.js" async defer></script>
          <meta
            name="google-signin-client_id"
            content="AIzaSyD0oJh-A0LHEAB21AUFe46OtpYMFkrLgKw.apps.googleusercontent.com"
          ></meta>
          <div id="fb-root"></div>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1047474675639245&autoLogAppEvents=1"
          ></script>
        </Helmet>
      </div>
      <div className="text-center">
        <div
          className="fb-login-button mb-4"
          data-width=""
          data-size="medium"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="true"
        ></div>
        {/* <div
          className="g-signin2 mt-1"
          style={{ border: '5%' }}
          data-width="200"
          data-height="30"
        ></div> */}
      </div>
    </>
  );
};

export default SocialLogin;
