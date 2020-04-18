import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import RadioButton from '../../common/radio';
import NoResults from '../../common/noResults';

class PollCard extends Component {
  state = {
    personSearch: '',
    NoSearchResults: false,
    persons: this.props.persons,
    people: this.props.persons,
  };
  filterPeople = (e) => {
    const people = this.state.persons.filter(
      (person) => person.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1,
    );
    const NoSearchResults = people.length ? false : true;
    this.setState({ people, NoSearchResults });
  };
  render() {
    const { questionTitle, HandleClick } = this.props;
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
                      HandleClick={HandleClick}
                    />
                  </ul>
                  {NoSearchResults === true && <NoResults />}
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </div>
        </div>
      </>
    );
  }
}

export default PollCard;
