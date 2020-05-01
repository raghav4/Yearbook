import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
const Box = ({ answer }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="mr-5 mb-3 ml-5">
          <MDBContainer>
            <MDBCard className="mt-3 mb-3">
              <MDBCardHeader color="special-color-dark lighten-1 text-center">
                {' '}
                Hi Sample question
              </MDBCardHeader>
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur explicabo
                magni delectus cum illum saepe magnam officia commodi tempore quisquam, reiciendis
                voluptatum in temporibus omnis ipsa dolores doloribus dignissimos fugit.
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default Box;
