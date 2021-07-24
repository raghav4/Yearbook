import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import toast, { Toaster } from 'react-hot-toast';
import { apiUrl, endPoints } from '../../../../config.json';
import http from '../../../../services/httpService';
import { NotifyAlert, TimerAlert } from '../../../../components';

const ModalBox = ({
  personId,
  personName,
  toggleOpen,
  triggerModal,
  modalValue,
  isAnonymousMessage,
}) => {
  const [ModalValue, setModalValue] = useState(() => modalValue);
  const [isAnonymous, setIsAnonymous] = useState(() => isAnonymousMessage);

  console.log('isAnonymousMessage...', isAnonymousMessage);

  useEffect(() => {
    setModalValue(modalValue);
  }, [modalValue]);

  // useEffect(() =>  {
  //   setIsAnonymous();
  // }, [isAnonymous])

  const handleSubmit = () => {
    const messageObject = {
      content: ModalValue,
      receiverId: personId,
      isAnonymous,
    };
    const submitData = async () => {
      try {
        const { data } = await http.put(
          `${apiUrl}/${endPoints.messages.new}`,
          messageObject,
        );
        console.log('data...', data);
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
      <Toaster />
      <MDBModal isOpen={toggleOpen} centered>
        <MDBModalHeader toggle={() => triggerModal(personId)}>
          {`You're here for : ${personName}`}
        </MDBModalHeader>

        <MDBModalBody>
          <div className="form-group">
            <p className="text-center">Write a nice message for {personName} :)</p>
            <textarea
              className="form-control"
              id={personId}
              rows="5"
              placeholder={`Put up whatever you've for ${personName}, first impression, your memories, etc 🤗\nAnd yes, please be kind? :)`}
              onChange={(e) => setModalValue(e.target.value)}
              value={ModalValue}
            />
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <span className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultUnchecked"
              value={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            <label className="custom-control-label" htmlFor="defaultUnchecked">
              Send Anonymously
            </label>
          </span>
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
