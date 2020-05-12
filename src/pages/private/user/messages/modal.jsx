import React, { useState, useEffect } from 'react';
import cookies from 'react-cookies';
import propTypes from 'prop-types';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import config from '../../../../config.json';
import http from '../../../../services/httpService';
import { NotifyAlert, TimerAlert } from '../../../../components';

const ModalBox = ({ personId, personName, toggleOpen, triggerModal }) => {
  const [ModalValue, setModalValue] = useState('');

  useEffect(() => {
    const getUserMessage = async () => {
      try {
        const { data } = await http.get(`${config.apiEndPoint}/api/user/messages/${personId}`, {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setModalValue(data.message);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          TimerAlert('Error', ex.response.data, 'error');
        }
      }
    };
    getUserMessage();
  }, [personId]);

  const handleSubmit = () => {
    const messageObject = {
      message: ModalValue,
      sendTo: personId,
    };
    const submitData = async () => {
      try {
        const { data } = await http.put(`${config.apiEndPoint}/api/user/messages`, messageObject, {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setModalValue(data.message);
        TimerAlert('Message sent successfully');
        triggerModal(personId);
      } catch (ex) {
        NotifyAlert('Error', 'top', 'error');
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
