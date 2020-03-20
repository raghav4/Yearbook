import React from 'react';
import { MDBInput } from 'mdbreact';

const UserInfo = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-6 mt-3">
          <div className="jumbotron ml-3 mr-3">
            <h2 className="h1-responsive text-center">Hello, Raghav! 👋🏻</h2>
            <p className="alert alert-success text-justify-center">
              Please update some of your information which will be listed on
              your profile and yearbook after the compilation is done. <br />
              Also, Please add those contact details where people can reach out
              to you in future. Good Luck! 😄
            </p>
            <form>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <form>
                      <div className="form-row">
                        <div className="col-md-12">
                          <div className="md-form form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress2MD"
                              placeholder="👧🏻/👦🏻 Your Name"
                            />
                            <label for="inputAddress2MD"></label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="md-form form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail4MD"
                              placeholder="📧 Email"
                            />
                            <label for="inputEmail4MD"></label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="md-form form-group">
                            <input
                              type="tel"
                              className="form-control"
                              id="inputPassword4MD"
                              placeholder="📱 Phone Number"
                            />
                            <label for="inputPassword4MD">{/*Password*/}</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddressMD"
                              placeholder="linkedin url"
                            />
                            <label for="inputAddressMD">{/*Address*/}</label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddressMD"
                              placeholder="facebook url"
                            />
                            <label for="inputAddressMD">{/*Address*/}</label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress2MD"
                              placeholder="Apartment, studio, or floor"
                            />
                            <label for="inputAddress2MD"></label>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="md-form form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="inputCityMD"
                              placeholder="New York City"
                            />
                            <label for="inputCityMD"></label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="md-form form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="inputZipMD"
                              placeholder="11206-1117"
                            />
                            <label for="inputZipMD"></label>
                          </div>
                        </div>
                      </div>
                      <div className="md-form form-group">
                        <MDBInput label="Example label" outline />
                        <textarea
                          className="form-control pl-2"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          outline
                        />
                        <label for="inputAddress2MD"></label>
                      </div>
                      <button type="submit" className="btn btn-primary btn-md">
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
