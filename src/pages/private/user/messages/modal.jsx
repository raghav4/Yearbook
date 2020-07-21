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
import { apiUrl } from '../../../../config.json';
import http from '../../../../services/httpService';
import { NotifyAlert, TimerAlert } from '../../../../components';

const ModalBox = ({ personId, personName, toggleOpen, triggerModal }) => {
  const [ModalValue, setModalValue] = useState('');
  const [basic] = useState([
    {
      tooltip: '1/5',
    },
    {
      tooltip: '2/5',
    },
    {
      tooltip: '3/5',
    },
    {
      tooltip: '4/5',
    },
    {
      tooltip: '5/5',
    },
  ]);

  useEffect(() => {
    const getUserMessage = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/api/user/messages/${personId}`);
        setModalValue(data.message);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          // TimerAlert('Error', ex.response.data, 'error');
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
        const { data } = await http.put(
          `${apiUrl}/api/user/messages`,
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
          <p className="text-center" style={{ fontFamily: 'Inter' }}>
            Rate your friendship
          </p>
          <div className="row d-flex justify-content-center mb-1">
            <MDBRating data={basic} getValue={(e) => console.log(e)} />
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
