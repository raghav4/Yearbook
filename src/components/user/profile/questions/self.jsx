import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBContainer,
} from 'mdbreact';
import FlipMove from 'react-flip-move';

const Box = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="mr-5 mb-3 ml-5">
          <MDBContainer>
            <MDBCard className="mt-3 mb-3">
              <MDBCardHeader color="special-color-dark lighten-1">
                What is that one thing you'll miss the most?
              </MDBCardHeader>
              <MDBCardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam voluptatum
                eveniet quis. Voluptas eius, laudantium reprehenderit repellendus dolor praesentium
                non illo ab dignissimos sapiente doloribus odit neque, consectetur dolore?
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default Box;
