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

const PollCard = ({ questionTitle, persons }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="">
          <MDBContainer>
            <MDBCard style={{ width: 'auto', marginTop: '2rem' }}>
              <MDBCardHeader color="elegant-color lighten-1 text-center">
                {questionTitle}
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
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default PollCard;
