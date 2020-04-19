/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import axios from 'axios';
import FlipMove from 'react-flip-move';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '../../../components/common/select';
import PeopleCard from './peopleCard';
import NoResults from '../../../components/common/noResults';

class PeopleCards extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    ProgressBar: true,
    NoSearchResults: false,
    departmentSelect: '',
    sectionSelect: '',
    departments: [],
    sections: [],
    persons: [],
    people: [],
  };
  async componentDidMount() {
    const { data: persons } = await axios.get('https://yb-server.herokuapp.com/api/user');
    let departments = persons.map((e) => {
      return e.department;
    });
    let sections = persons.map((e) => {
      return e.section;
    });
    departments.sort();
    departments = ['ALL', ...new Set(departments)];
    sections.sort();
    sections = ['ALL', ...new Set(sections)];
    this.setState({
      persons,
      sections,
      departments,
      people: persons,
      ProgressBar: !this.state.ProgressBar,
    });
    this.state.persons.map((person) => console.log(person.department, person.section));
  }

  UNSAFE_componentWillMount() {
    this.setState({ people: this.state.persons });
  }

  filterPeople = (e) => {
    const people = this.state.persons.filter(
      (person) => person.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1,
    );
    const NoSearchResults = people.length ? false : true;
    this.setState({ people, NoSearchResults });
  };
  handleDepartmentSelect = (e) => {
    e.persist();
    if (e.target.value === 'ALL') {
      console.log(this.state.sectionSelect);
      return this.setState({ people: this.state.persons, sectionSelect: this.state.sectionSelect });
    }
    // TODO #21: the state will update with 'people' not with the 'persons'
    const persons = this.state.persons.filter(
      (person) =>
        person.department === e.target.value && person.section === this.state.sectionSelect,
    );
    // if(!persons.length)
    this.setState({ people: persons, departmentSelect: e.target.value });
  };
  handleSectionSelect = (e) => {
    e.persist();
    if (e.target.value === 'ALL') {
      console.log(this.state.departmentSelect);
      return this.setState({
        people: this.state.persons,
        departmentSelect: this.state.departmentSelect,
      });
    }
    const persons = this.state.persons.filter(
      (person) =>
        person.section === e.target.value && person.department === this.state.departmentSelect,
    );
    console.log(persons);
    this.setState({ people: persons, sectionSelect: e.target.value });
  };

  render() {
    const { ProgressBar, departments, sections, people, NoSearchResults } = this.state;

    return (
      <>
        {ProgressBar && <LinearProgress variant="indeterminate" color="primary" />}
        <div className="ml-5 mr-5 mt-5 mb-5 active-cyan-3 active-cyan-4">
          <Input
            className="form-control"
            type="text"
            placeholder="Search People"
            aria-label="Search"
            onChange={this.filterPeople}
            style={{ fontFamily: 'Sofia Pro Medium' }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <div className="row mt-3 mb-2">
            <div className="col">
              <Select
                selectTitle="Choose the Department"
                options={departments}
                handleSelectInput={this.handleDepartmentSelect}
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
            <FlipMove duration={420} key={person._id}>
              <div className="col mb-4" key={person._id}>
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
        {NoSearchResults === true && <NoResults />}
      </>
    );
  }
}

export default PeopleCards;
