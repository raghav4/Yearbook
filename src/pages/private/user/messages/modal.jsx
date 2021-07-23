import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRating,
} from 'mdbreact';
import { apiUrl, endPoints } from '../../../../config.json';
import http from '../../../../services/httpService';
import { NotifyAlert, TimerAlert } from '../../../../components';

const ModalBox = ({ personId, personName, toggleOpen, triggerModal,  modalValue }) => {
  const [ModalValue, setModalValue] = useState(() => modalValue);

  useEffect(() => {
    setModalValue(modalValue)
  }, [modalValue])

  const handleSubmit = () => {
    const messageObject = {
      content: ModalValue,
      receiverId: personId,
    };
    const submitData = async () => {
      try {
        const { data } = await http.put(
          `${apiUrl}/${endPoints.messages.new}`,
          messageObject,
        );
        setModalValue(data.message);
        TimerAlert('Message sent successfully');
        triggerModal(personId);
      } catch (ex) {
        NotifyAlert('Error', 'top', 'error');
      }
    };
    submitData();
  };

  // TODO: Implement handle delete.
  const handleDelete = () => {};

  return (
    <MDBContainer>
      <MDBModal isOpen={toggleOpen} centered>
        <MDBModalHeader toggle={() => triggerModal(personId)}>
          {`You're here for : ${personName}`}
        </MDBModalHeader>

        <MDBModalBody>
          <div className="form-group">
            <p className="text-center" style={{ fontFamily: 'Inter' }}>
              Write a nice message for {personName} :)
            </p>
            <textarea
              style={{ fontFamily: 'Inter' }}
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
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(personId)}
            >
              Delete
            </button>
            <button
              className="btn btn-elegant btn-sm"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
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
