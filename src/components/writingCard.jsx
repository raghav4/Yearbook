import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';

class ModalPage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    modal9: false,
  };

  toggle = nr => () => {
    const modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="info" onClick={this.toggle(9)}>
          Bottom
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal9}
          toggle={this.toggle(9)}
          fullHeight
          position="bottom"
        >
          <MDBModalHeader toggle={this.toggle(9)}>
            MDBModal title
          </MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(9)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
