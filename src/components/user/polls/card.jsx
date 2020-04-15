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
import RadioButton from '../../common/radio';

const PollCard = ({ questionTitle, persons, HandleClick }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="mb-4 card-body">
          <MDBContainer>
            <MDBCard style={{ width: '300px', marginTop: '2rem' }}>
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
                <ul>
                  <RadioButton
                    persons={persons}
                    question={questionTitle}
                    HandleClick={HandleClick}
                  />
                </ul>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default PollCard;
