/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FlipMove from 'react-flip-move';
import axios from 'axios';
import Select from '../../common/select';
import PeopleCard from './peopleCard';

class PeopleCards extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    departments: [],
    sections: [],
    // eslint-disable-next-line react/no-unused-state
    persons: [],
    people: [],
    modal8: false,
    modal9: false,
  };
  async componentDidMount() {
    const { data: persons } = await axios.get('http://localhost:3000/api/user');
    let departments = persons.map((e) => {
      return e.department;
    });
    let sections = persons.map((e) => {
      return e.section;
    });
    departments = [...new Set(departments)];
    sections.sort();
    sections = ['ALL', ...new Set(sections)];
    console.log(sections);
    persons.sort((a, b) => {
      const keyA = a.section,
        keyB = b.section;
      return keyA > keyB;
    });
    this.setState({ persons });
    this.setState({ people: persons });
    this.setState({ sections });
    this.setState({ departments });
    // console.log(departments);
  }

  UNSAFE_componentWillMount() {
    this.setState({ people: this.state.persons });
  }

  filterPeople = (e) => {
    let updatedPeople = this.state.persons;

    updatedPeople = updatedPeople.filter(
      (person) => person.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1,
    );
    this.setState({ people: updatedPeople });
  };
  handleSectionSelect = (e) => {
    e.persist();
    console.log(e.target.value);
    if (e.target.value === 'ALL') return this.setState({ people: this.state.persons });
    const persons = this.state.persons.filter((person) => person.section === e.target.value[0]);
    this.setState({ people: persons });
  };
  triggerModal = (e) => {
    // console.log(e);
    // const modalNumber = `Modal ${e}`;
    // this.setState({
    //   [modalNumber]: !this.state[modalNumber],
    // });
  };

  render() {
    const { departments, sections, persons, people } = this.state;

    return (
      <>
        <div className="ml-5 mr-5 mt-5 mb-5 active-cyan-3 active-cyan-4">
          <Input
            className="form-control"
            type="text"
            placeholder="Search People"
            aria-label="Search"
            onChange={this.filterPeople}
            style={{ fontFamily: 'Sofia Pro Medium' }}
            startAdornment={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          {/* <p className="p-responsive mt-3 mb-2 text-left">
          <FilterListIcon className="mr-1" />
          Filter People
        </p> */}
          <div className="row mt-3 mb-2">
            <div className="col">
              <Select
                selectTitle="Choose the Department"
                options={departments}
                handleSelectInput={this.handleSelectInput}
              />
            </div>
            <div className="col">
              <Select
                selectTitle="Choose the Section"
                options={sections}
                handleSelectInput={this.handleSectionSelect}
              />
            </div>
          </div>
        </div>
        <div className="ml-4 mr-4 mt-5 mb-5 row row-cols-1 row-cols-md-3">
          {people.map((person) => (
            <FlipMove duration={420}>
              <div className="card-deck col mb-4" key={person._id}>
                <PeopleCard
                  key={person.id}
                  person={person}
                  personName={person.name}
                  personImageUrl={person.dp}
                  personBio={person.bio}
                  triggerModal={this.triggerModal}
                />
              </div>
            </FlipMove>
          ))}
        </div>
      </>
    );
  }
}

export default PeopleCards;
