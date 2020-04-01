import React from 'react';
import propTypes from 'prop-types';

const Select = ({ selectTitle, options }) => {
  return (
    <>
      <select className="custom-select custom-select-md">
        <option value="" disabled selected>
          {selectTitle}
        </option>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

Select.propTypes = {
  selectTitle: propTypes.string,
  options: propTypes.object.isRequired,
};
export default Select;
