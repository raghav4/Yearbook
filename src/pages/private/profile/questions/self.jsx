import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
const Box = ({ answer }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="mr-5 mb-3 ml-5">
          <MDBContainer>
            <MDBCard className="mt-3 mb-3">
              <MDBCardHeader color="special-color-dark lighten-1">
                {answer.questionId.question}
              </MDBCardHeader>
              <MDBCardBody>{answer.answer}</MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default Box;
