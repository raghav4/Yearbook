import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import { RadioButton, NoResults } from '../../../../components';

const PollCard = ({ questionTitle, question, persons, handleClick }) => {
  const [NoSearchResults, setNoSearchResults] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(persons);
  }, [persons]);

  const filterPeople = ({ currentTarget: input }) => {
    const users = students.filter(
      (student) =>
        student.credentials.name
          .toLowerCase()
          .search(input.value.trim().toLowerCase()) !== -1,
    );
    setStudents(users);
    setNoSearchResults(!users.length);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="mb-4 card-body">
          <MDBContainer>
            <MDBCard style={{ width: '320px', marginTop: '1rem' }}>
              <MDBCardHeader color="elegant-color lighten-1 text-center">
                {questionTitle}
              </MDBCardHeader>
              <MDBCardBody>
                <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={filterPeople}
                  />
                </div>
                <ul>
                  <RadioButton
                    persons={students}
                    question={questionTitle}
                    handleClick={handleClick}
                  />
                </ul>
                {NoSearchResults === true && <NoResults fontSize="h3" />}
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

PollCard.propTypes = {
  handleClick: propTypes.func.isRequired,
  questionTitle: propTypes.string.isRequired,
};

export default PollCard;
