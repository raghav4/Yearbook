import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
// import { LinearProgress } from '@material-ui/core';
// import Dropzone from 'react-dropzone';
import DropPicture from '../common/utility/imageDrop';

class UserInfo extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-6 mt-5">
            <div className="jumbotron ml-3 mr-3">
              <h2 className="h1-responsive text-center">Hello, Raghav! 👋🏻</h2>
              {/* <p className="alert alert-success text-justify-center">
                Please update some of your information which will be listed on your profile and
                yearbook after the compilation is done. <br />
                Also, Please add those contact details where people can reach out to you in future.
                Good Luck! 😄
              </p> */}
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
                    {/* <Dropzone
                      onDrop={(acceptedFiles) => {
                        console.log(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p
                              style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '40px',
                                borderWidth: '2px',
                                borderRadius: '2px',
                                borderColor: '#eeeeee',
                                borderStyle: 'dashed',
                                marginTop: '15px',
                                marginLeft: '10px',
                                marginRight: '10px',
                                marginBottom: '15px',
                                backgroundColor: '#f2f2f2',
                                outline: 'none',
                              }}
                            >
                              Drag 'n' drop the picture here, or click to select picture
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone> */}
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <form>
                        <div className="">
                          <MDBInput type="text" label="Full Name" outline required></MDBInput>
                          <MDBInput type="text" label="Email" outline required></MDBInput>

                          {/* <div className="col-md-12">
                            <MDBInput type="text" label="Full Name" outline required></MDBInput>
                          </div>
                          <div className="col-md-6">
                            <MDBInput type="text" label="Email" outline required></MDBInput>
                          </div>

                          <div className="col-md-6">
                            <MDBInput type="tel" label="Phone Number" outline required></MDBInput>
                          </div>
                          <div className="col-md-6">
                            <MDBInput type="text" label="Instagram" outline required></MDBInput>
                          </div>

                          <div className="col-md-6">
                            <MDBInput type="tel" label="Facebook" outline required></MDBInput>
                          </div>
                           */}
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="md-form form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="inputAddressMD"
                                placeholder="facebook url"
                              />
                              <label htmlFor="inputAddressMD">{/*Address*/}</label>
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
                                placeholder="WhatsApp Number"
                              />
                              <label htmlFor="inputCityMD"></label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="md-form form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="inputZipMD"
                                placeholder="Instagram Username"
                              />
                              <label htmlFor="inputZipMD"></label>
                            </div>
                          </div>
                        </div>
                        <MDBInput type="text" label="Update Your Bio" outline required></MDBInput>

                        {/* <div className="md-form form-group">
                          <p className="p-responsive text-left" style={{ color: '#616161' }}>
                            Update your Bio
                          </p>
                          <textarea
                            className="form-control pl-2"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            outline
                          />
                          <label htmlFor="inputAddress2MD"></label>
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
