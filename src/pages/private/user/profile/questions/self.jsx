import React from 'react';
import propTypes from 'prop-types';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';

const Box = ({ question, answer }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="mb-2 mx-4">
          <MDBContainer style={{ width: 'auto' }}>
            <MDBCard className="mt-3 mb-1">
              <MDBCardHeader color="special-color-dark lighten-1 text-center">
                {question}
              </MDBCardHeader>
              <MDBCardBody>{answer}</MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

Box.propTypes = {
  question: propTypes.string.isRequired,
  answer: propTypes.string.isRequired,
};

export default Box;
