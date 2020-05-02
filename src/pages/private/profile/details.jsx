import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import { DropPicture } from '../../../components';

class UserInfo extends Component {
  state = {
    user: {
      name: 'Raghav',
    },
  };
  render() {
    const { user } = this.state;
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-6 mt-5">
            <div className="jumbotron ml-3 mr-3">
              <h3 className="h3-responsive text-center">Update your Profile</h3>
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <DropPicture defaultPicture="https://i.imgur.com/P104MWw.png" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
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
                          <MDBInput type="tel" label="WhatsApp Number" outline required></MDBInput>
                          <MDBInput type="text" label="Instagram" outline required></MDBInput>
                          <MDBInput type="text" label="Snapchat" outline required></MDBInput>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
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
