/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FlipMove from 'react-flip-move';
import Select from './common/select';
import PeopleCard from './common/peopleCard';

class PeopleCards extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    options: [
      { id: 1, name: 'CSE' },
      { id: 2, name: 'IT' },
      { id: 3, name: 'MAE' },
      { id: 4, name: 'ECE' },
      { id: 5, name: 'EEE' },
    ],
    sections: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
    // eslint-disable-next-line react/no-unused-state
    persons: [
      {
        name: 'Mike',
        dp: 'https://www.usanetwork.com/sites/usanetwork/files/suits_cast_mike.jpg',
        bio: "Hello I'm Mike, I work at Pearson Spector Litt LLC",
        id: 1,
      },
      {
        name: 'Harvey Specter',
        dp: 'https://www.usanetwork.com/sites/usanetwork/files/2018/07/suits_cast_harvey_s8.jpg',
        bio: "I don't get lucky, I make my own luck",
        id: 2,
      },
      {
        name: 'Rachel Zane',
        dp: 'https://www.usanetwork.com/sites/usanetwork/files/2018/07/suits_cast_harvey_s8.jpg',
        bio: 'Entire World knows about me!!',
        id: 3,
      },
      {
        name: 'Donna Paulsen',
        dp: 'https://www.usanetwork.com/sites/usanetwork/files/2018/07/suits_cast_donna_s8.jpg',
        bio: "I'm sorry I don't have a photographic memory but my brain is too busy being awesome.",
        id: 4,
      },
      {
        name: 'Louis Litt',
        dp: 'https://pmctvline2.files.wordpress.com/2020/02/rick-hoffman-billions.jpg?w=620',
        bio: "“It's not a scarf, it's one of the world's finest pashminas!”",
        id: 5,
      },
    ],
    people: [],
    modal8: false,
    modal9: false,
  };

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

  triggerModal = (e) => {
    console.log(e);
    // const modalNumber = `Modal ${e}`;
    // this.setState({
    //   [modalNumber]: !this.state[modalNumber],
    // });
  };

  render() {
    const { options, sections, persons, people } = this.state;

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
              <Select selectTitle="Choose the Department" options={options} />
            </div>
            <div className="col">
              <Select selectTitle="Choose the Section" options={sections} />
            </div>
          </div>
        </div>
        <div className="card-deck ml-4 mr-4 mt-5 mb-5 row row-cols-1 row-cols-md-3">
          {/* <FlipMove> */}
          {/* Card Deck!! */}
          {people.map((person) => (
            <div className="col mb-4" key={person.id}>
              <PeopleCard
                key={person.id}
                person={person}
                personName={person.name}
                personImageUrl={person.dp}
                personBio={person.bio}
                triggerModal={this.triggerModal}
              />
            </div>
          ))}
          {/* </FlipMove> */}
        </div>
      </>
    );
  }
}

export default PeopleCards;
