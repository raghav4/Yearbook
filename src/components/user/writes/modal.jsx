import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';

class ModalBox extends Component {
  state = {
    localModalValue: this.props.modalValue,
  };
  handleModalValue = (e) => {
    // console.log('value is ', this.props.modalValue);
    // console.log(this.state.localModalValue, this.props.modalValue);
    this.setState({ localModalValue: e.target.value });
  };
  render() {
    const { submitModalMessage, toggleOpen, triggerModal, personName, person } = this.props;
    return (
      <MDBContainer>
        <MDBModal isOpen={toggleOpen} centered>
          <MDBModalHeader>{`You're writing for : ${personName}`}</MDBModalHeader>
          <MDBModalBody>
            <div className="form-group">
              <label htmlFor={person._id}>Be Good :)</label>
              <textarea
                className="form-control"
                id={person._id}
                rows="5"
                placeholder={`Put up Whatever you've for ${personName}, your memories together, etc`}
                onChange={this.handleModalValue}
                value={this.state.localModalValue}
              />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <div className="row">
              <MDBBtn color="danger" onClick={() => triggerModal(person._id)}>
                close
              </MDBBtn>
              <MDBBtn
                color="primary"
                onClick={() => submitModalMessage(this.state.localModalValue)}
              >{`Submit`}</MDBBtn>
            </div>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalBox;
