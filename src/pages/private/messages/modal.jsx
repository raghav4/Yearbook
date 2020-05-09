import React, { useState } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import propTypes from 'prop-types';
// import Editor from 'react-medium-editor';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import { NotifyAlert } from '../../../components';

// require('medium-editor/dist/css/medium-editor.css');
// require('medium-editor/dist/css/themes/default.css');

const ModalBox = ({ personId, personName, toggleOpen, triggerModal }) => {
  const [ModalValue, setModalValue] = useState('');

  // useEffect(() => {
  //   const getUserMessage = async () => {
  //     try {
  //       const { data } = await axios.get(`http://localhost:5000/api/user/messages/${personId}`, {
  //         headers: { 'x-auth-token': cookies.load('x-auth-token') },
  //       });
  //       setModalValue(data.message);
  //     } catch (ex) {
  //       console.log(ex.response);
  //     }
  //   };
  //   getUserMessage();
  // }, []);

  const handleSubmit = () => {
    const messageObject = {
      message: ModalValue,
      sendTo: personId,
    };
    const submitData = async () => {
      try {
        const { data } = await axios.put('http://localhost:5000/api/user/messages', messageObject, {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setModalValue(data.message);
        NotifyAlert('Added Successfully', 'top');
        triggerModal(personId);
      } catch (ex) {
        NotifyAlert('Error', 'top', 'error');
        console.log(ex.response);
      }
    };
    submitData();
  };

  return (
    <MDBContainer>
      <MDBModal isOpen={toggleOpen} centered>
        <MDBModalHeader>{`You're writing for : ${personName}`}</MDBModalHeader>
        <MDBModalBody>
          <div className="form-group">
            <p className="text-center">Be Good :)</p>
            <textarea
              className="form-control"
              id={personId}
              rows="5"
              placeholder={`Put up Whatever you've for ${personName}, your memories together, etc`}
              onChange={(e) => setModalValue(e.target.value)}
              value={ModalValue}
            />
            {/* <Editor
              id={personId}
              text={ModalValue}
              placeholder={`Put up Whatever you've for ${personName}, your memories together, etc`}
              onChange={(e) => console.log(e)}
              options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
            /> */}
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <div className="row">
            <MDBBtn color="danger" onClick={() => triggerModal(personId)}>
              close
            </MDBBtn>
            <MDBBtn color="primary" onClick={() => handleSubmit()}>
              Submit
            </MDBBtn>
          </div>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

ModalBox.propTypes = {
  personId: propTypes.string.isRequired,
  personName: propTypes.string.isRequired,
  triggerModal: propTypes.func.isRequired,
  toggleOpen: propTypes.bool.isRequired,
};

export default ModalBox;
