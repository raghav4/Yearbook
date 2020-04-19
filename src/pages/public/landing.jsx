import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="justify-content-center text-center mt-5">
      <h3 className="h3-responsive text center">Welcome to Yearbook</h3>
      <div className="row text-center justify-content-center">
        <Link to="/login" className="btn btn-primary">
          LogIn
        </Link>
        <Link to="/signup" className="btn btn-primary">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
