import React from 'react';

const RadioButton = ({ persons, question, HandleClick }) => {
  return (
    <>
      <fieldset id={question}>
        {persons.map((person) => (
          <div key={person._id}>
            <input
              className="mr-1"
              type="radio"
              value={person.name}
              name={question}
              id={person._id}
              onClick={() => HandleClick(person.name)}
            />
            <label htmlFor={person._id}>{person.name}</label>
            <br />
          </div>
        ))}
      </fieldset>
    </>
  );
};

export default RadioButton;
