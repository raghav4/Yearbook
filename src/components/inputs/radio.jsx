import React from 'react';
import propTypes from 'prop-types';

const RadioButton = ({ persons, question, handleClick }) => {
  return (
    <>
      <fieldset id={question}>
        {persons.map((person) => (
          <div key={person._id}>
            <input
              className="mr-1"
              type="radio"
              value={person.credentials.name}
              name={question}
              id={person._id}
              onClick={() => handleClick(person.credentials.name)}
            />
            <label htmlFor={person._id}>{person.credentials.name}</label>
            <br />
          </div>
        ))}
      </fieldset>
    </>
  );
};

RadioButton.propTypes = {
  persons: propTypes.arrayOf(propTypes.object).isRequired,
  question: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default RadioButton;
