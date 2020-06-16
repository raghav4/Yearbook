import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import SearchIcon from '@material-ui/icons/Search';
import { Input, LinearProgress, InputAdornment } from '@material-ui/core';
import UserCard from './single';
import { apiUrl } from '../../../../config.json';
import http from '../../../../services/httpService';
import { NoResults, Select } from '../../../../components';

class PeopleCards extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    ProgressBar: true,
    NoSearchResults: false,
    departmentSelect: 'ALL',
    sectionSelect: 'ALL',
    departments: [],
    sections: [],
    persons: [],
    people: [],
  };

  // eslint-disable-next-line react/sort-comp
  async componentDidMount() {
    const { data: persons } = await http.get(`${apiUrl}/api/user/self/all`);
    let departments = persons.map((e) => {
      return e.deptSection.department;
    });
    let sections = persons.map((e) => {
      return e.deptSection.section;
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
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.setState({ people: this.state.persons });
  }

  filterPeople = (e) => {
    const people = this.state.persons.filter(
      (person) =>
        person.credentials.name
          .toLowerCase()
          .search(e.target.value.trim().toLowerCase()) !== -1,
    );
    this.setState({ people, NoSearchResults: !people.length });
  };

  handleDepartmentSelect = ({ currentTarget: input }) => {
    const { persons, sectionSelect } = this.state;
    if (input.value === 'ALL') {
      if (sectionSelect === 'ALL') return this.setState({ people: persons });

      return this.setState({
        people: persons.filter((e) => {
          return e.deptSection.section === sectionSelect;
        }),
        departmentSelect: input.value,
      });
    }

    return this.setState({
      people: persons.filter((e) => {
        if (sectionSelect !== 'ALL') {
          return (
            e.deptSection.department === input.value &&
            e.deptSection.section === sectionSelect
          );
        }
        return e.deptSection.department === input.value;
      }),
      departmentSelect: input.value,
    });
  };

  handleSectionSelect = ({ currentTarget: input }) => {
    const { persons, departmentSelect } = this.state;
    if (input.value === 'ALL') {
      if (departmentSelect === 'ALL') return this.setState({ people: persons });

      return this.setState({
        people: persons.filter((e) => {
          return e.deptSection.department === departmentSelect;
        }),
        sectionSelect: input.value,
      });
    }

    return this.setState({
      people: persons.filter((e) => {
        if (departmentSelect !== 'ALL') {
          return (
            e.deptSection.section === input.value &&
            e.deptSection.department === departmentSelect
          );
        }
        return e.deptSection.section === input.value;
      }),
      sectionSelect: input.value,
    });
  };

  render() {
    const {
      ProgressBar,
      departments,
      sections,
      people,
      NoSearchResults,
    } = this.state;

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
            <FlipMove duration={500} staggerDurationBy={300} key={person._id}>
              <div className="col mb-4" key={person._id}>
                <UserCard
                  person={person}
                  key={person._id}
                  personName={person.credentials.name}
                  personImageUrl={person.info.profilePicture}
                  personBio={person.info.bio}
                  triggerModal={this.triggerModal}
                />
              </div>
            </FlipMove>
          ))}
        </div>
        {NoSearchResults === true && <NoResults fontSize="h1" />}
      </>
    );
  }
}

export default PeopleCards;
