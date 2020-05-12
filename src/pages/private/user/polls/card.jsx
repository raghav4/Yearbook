import React, { Component } from 'react';
import propTypes from 'prop-types';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import { RadioButton, NoResults } from '../../../../components';

class PollCard extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    NoSearchResults: false,
    persons: this.props.persons,
    people: this.props.persons,
  };

  filterPeople = (e) => {
    const { persons } = this.state;
    const people = persons.filter(
      (person) => person.name.toLowerCase().search(e.target.value.trim().toLowerCase()) !== -1,
    );
    const NoSearchResults = people.length;
    this.setState({ people, NoSearchResults });
  };

  render() {
    const { questionTitle, handleClick } = this.props;
    const { people: persons, NoSearchResults } = this.state;
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
                      onChange={this.filterPeople}
                    />
                  </div>
                  <ul>
                    <RadioButton
                      persons={persons}
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
  }
}

PollCard.propTypes = {
  questionTitle: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default PollCard;
