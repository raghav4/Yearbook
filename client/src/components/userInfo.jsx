import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const UserInfo = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div class="jumbotron">
            <h2 class="h1-responsive">Hello, Raghav!</h2>
            <p class="alert alert-success text-md-justify">
              Please update some of your information which will be listed on
              your profile and yearbook after the compilation is done. <br />
              Also, Please add those contact details where people can reach out
              to you in future.
            </p>
            <form>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="formGroupExampleInput">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="formGroupExampleInput">Default input</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                    />
                  </div>
                </div>
                <h2 className="h2-responsive">Answer about yourself!</h2>
                <label htmlFor="exampleFormControlTextarea1">
                  <h4 class="h4-responsive">
                    What are your plans after graduating?
                  </h4>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
