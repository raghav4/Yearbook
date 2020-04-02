import React, { Component } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBContainer,
} from 'mdbreact';

const PollsList = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-6 mb-3">
          <MDBContainer>
            <MDBCard style={{ width: 'auto', marginTop: '2rem' }}>
              <MDBCardHeader color="elegant-color lighten-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </MDBCardHeader>
              <MDBCardBody>
                <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="materialGroupExample1"
                    name="groupOfMaterialRadios"
                  />
                  <label className="form-check-label" for="materialGroupExample1">
                    <p>Inverness McKenzie</p>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="materialGroupExample2"
                    name="groupOfMaterialRadios"
                  />
                  <label className="form-check-label" for="materialGroupExample2">
                    <p>Dominic L. Ement</p>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="materialGroupExample3"
                    name="groupOfMaterialRadios"
                  />
                  <label className="form-check-label" for="materialGroupExample3">
                    <p>Malcolm Function</p>
                  </label>
                </div>
                {/* </MDBCardText> */}
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default PollsList;
