import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
  return (
    <>
      <div className="font-neutral">
        <div className="black-black background">
          <div className="bg">
            <div
              className="bg-image"
              style={{ backgroundImage: `url(https://i.imgur.com/LoiHMJo.jpg)` }}
            ></div>
          </div>
          <div className=" header">
            <div className="container-lrg">
              <div className="flex col-12 spread">
                <Link className="h4 h4-responsive text-white">Yearbook</Link>{' '}
                <Link to="mailto:demo@demo.com" className="text-white h4 h4-responsive mr0">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container mb40">
              <div className="col-12 text-center">
                <h1 className="heading-lrg text-white">Memories curated together</h1>
                <h2 className="subheading text-white mt20">
                  Write for others, for self get everything in a PDF
                </h2>
                <div className="mt40">
                  <Link to="/login" className="btn btn-primary">
                    <span> Login </span>
                  </Link>
                  <Link to="/signup" className="btn btn-white mt10">
                    {' '}
                    <span> Sign Up </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="container-lrg">
              <div className="col-12">
                <div className="browserphone">
                  <div className="browserphone-browser ">
                    <div className="mask">
                      <img
                        src="https://i.imgur.com/LoiHMJo.jpg"
                        alt="Screenshot of App in Browser"
                        className="mask-img"
                      />
                    </div>
                  </div>
                  <div className="browserphone-iphone">
                    <div className="mask">
                      <img
                        src="https://i.imgur.com/TwHkOhO.png"
                        alt="Screenshot of iPhone App"
                        className="mask-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
