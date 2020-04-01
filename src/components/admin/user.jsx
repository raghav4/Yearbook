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

class CreateUser extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-6 mb-3">
            <MDBContainer>
              <MDBCard style={{ width: 'auto', marginTop: '2rem' }}>
                <MDBCardHeader color="elegant-color lighten-1">
                  Add a Student
                </MDBCardHeader>
                <MDBCardBody>
                  {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                  {/* <MDBCardText> */}
                  <div className="md-form form-group">
                    <MDBInput label="Name" outline />
                    <label for="inputAddress2MD"></label>
                  </div>
                  <div className="md-form form-group">
                    <MDBInput label="Department" outline />
                    <label for="inputAddress2MD"></label>
                  </div>
                  <div className="md-form form-group">
                    <MDBInput label="Section" outline />
                    <label for="inputAddress2MD"></label>
                  </div>
                  <div className="md-form form-group">
                    <MDBInput label="Phone Number" outline />
                    <label for="inputAddress2MD"></label>
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

export default CreateUser;
