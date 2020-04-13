import React, { Component } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBContainer,
} from 'mdbreact';

class AddUser extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-6 mb-3">
            <MDBContainer>
              <MDBCard style={{ width: 'auto', marginTop: '2rem' }}>
                <MDBCardHeader color="elegant-color lighten-1 text-center">
                  Add a Student
                </MDBCardHeader>
                <MDBCardBody>
                  {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                  {/* <MDBCardText> */}
                  <div className="md-form form-group">
                    <MDBInput label="Name" outline />
                    <label htmlFor="inputAddress2MD"></label>
                  </div>
                  {/* <div className="md-form form-group">
                    <MDBInput label="Department" outline />
                    <label htmlFor="inputAddress2MD"></label>
                  </div> */}
                  <div className="md-form form-group">
                    <select class="browser-default custom-select">
                      <option disabled selected>
                        Department
                      </option>
                      <option value="1">CSE</option>
                      <option value="2">IT</option>
                      <option value="3">ECE</option>
                      <option value="3">EEE</option>
                      <option value="3">MAE</option>
                    </select>
                  </div>
                  {/* <div className="md-form form-group">
                    <MDBInput label="Section" outline />
                    <label htmlFor="inputAddress2MD"></label>
                  </div> */}
                  <div className="md-form form-group">
                    <select class="browser-default custom-select">
                      <option disabled selected>
                        Section
                      </option>
                      <option value="1">A</option>
                      <option value="2">B</option>
                      <option value="3">C</option>
                    </select>
                  </div>
                  <div className="md-form form-group">
                    <MDBInput label="Phone Number" outline />
                    <label htmlFor="inputAddress2MD"></label>
                  </div>
                </MDBCardBody>
                <MDBBtn color="default">Submit</MDBBtn>
              </MDBCard>
            </MDBContainer>
          </div>
        </div>
      </>
    );
  }
}

export default AddUser;
