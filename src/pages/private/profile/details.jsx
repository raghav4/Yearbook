import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import { DropPicture } from '../../../components';

class UserInfo extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-6 mt-5">
            <div className="jumbotron ml-3 mr-3">
              <h2 className="h1-responsive text-center">Hello, Raghav!</h2>
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <p
                      className="text-center"
                      style={{ color: '#616161', textDecoration: 'underline' }}
                    >
                      Upload your Profile Picture
                    </p>
                    <DropPicture />
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <form>
                        <div className="">
                          <MDBInput
                            type="text"
                            label="Full Name"
                            value="Disabled By Default"
                            outline
                            disabled
                            required
                          ></MDBInput>
                          <MDBInput
                            type="text"
                            label="Phone Number"
                            value="9998989XXX"
                            outline
                            disabled
                            required
                          ></MDBInput>
                          <MDBInput
                            type="text"
                            label="Email"
                            value="placeholdermail@gmail.com"
                            outline
                            disabled
                            required
                          ></MDBInput>
                          <MDBInput
                            type="text"
                            label="Department"
                            value="CSE"
                            outline
                            disabled
                            required
                          ></MDBInput>
                          <MDBInput
                            type="text"
                            label="Section"
                            value="B"
                            outline
                            disabled
                            required
                          ></MDBInput>
                          <MDBInput type="text" label="Your Bio" outline required></MDBInput>
                        </div>
                        <p className="p-responsive text-center">Social Media</p>
                        <div className="row">
                          <div className="col">
                            <MDBInput type="text" label="Contact Email" outline required></MDBInput>
                            <MDBInput type="text" label="Facebook URL" outline required></MDBInput>
                            <MDBInput type="text" label="LinkedIn URL" outline required></MDBInput>
                            <MDBInput
                              type="tel"
                              label="WhatsApp Number"
                              outline
                              required
                            ></MDBInput>
                            <MDBInput type="text" label="Instagram" outline required></MDBInput>
                            <MDBInput type="text" label="Snapchat" outline required></MDBInput>
                          </div>
                        </div>
                        {/* <div className="form-row">
                          <div className="col-md-6">
                            <div className="md-form form-group">
                              <MDBInput type="text" label="Instagram" outline required></MDBInput>
                              <label htmlFor="inputCityMD"></label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="md-form form-group">
                              <MDBInput type="text" label="Snapchat" outline required></MDBInput>
                              <label htmlFor="inputZipMD"></label>
                            </div>
                          </div>
                        </div> */}
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
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
  }
}

export default UserInfo;
