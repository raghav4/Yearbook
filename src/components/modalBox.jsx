import React from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';

const ModalBox = ({ toggleOpen, toggelModal, triggerModal, personName }) => {
  return (
    <MDBContainer>
      <MDBModal isOpen={toggleOpen} toggle={toggelModal(1)} centered>
        <MDBModalHeader
          toggle={toggelModal(1)}
        >{`You're writing for : ${personName}`}</MDBModalHeader>
        <MDBModalBody>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Basic textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" />
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <div className="row">
            <MDBBtn color="secondary" onClick={() => triggerModal(1)}>
              close
            </MDBBtn>
            <MDBBtn color="primary">Submit</MDBBtn>
          </div>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ModalBox;
