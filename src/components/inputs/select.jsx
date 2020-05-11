import React from 'react';
import propTypes from 'prop-types';

const Select = ({ selectTitle, options, handleSelectInput }) => {
  return (
    <>
      <select className="custom-select custom-select-md" onChange={handleSelectInput}>
        <option disabled value="" defaultValue>
          {selectTitle}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

Select.propTypes = {
  selectTitle: propTypes.string.isRequired,
  handleSelectInput: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Select;
