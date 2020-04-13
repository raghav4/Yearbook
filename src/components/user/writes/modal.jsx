import React from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';

const ModalBox = ({ toggleOpen, toggelModal, triggerModal, personName, person }) => {
  return (
    <MDBContainer>
      <MDBModal isOpen={toggleOpen} toggle={toggelModal(person._id)} centered>
        <MDBModalHeader
          toggle={toggelModal(1)}
        >{`You're writing for : ${personName}`}</MDBModalHeader>
        <MDBModalBody>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Be Good :)</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder={`Put up Whatever you've for ${personName}, your memories together, etc`}
            />
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <div className="row">
            <MDBBtn color="secondary" onClick={() => triggerModal(person._id)}>
              close
            </MDBBtn>
            <MDBBtn color="default">{`Update`}</MDBBtn>
          </div>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ModalBox;
