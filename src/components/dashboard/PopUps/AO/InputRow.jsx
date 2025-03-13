/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

const InputRow = ({ fields }) => {
  return (
    <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4 -mb-[27px]'>
      {fields.map((field, index) => (
        <InputField
          key={index}
          iconSrc={field.iconSrc}
          placeholder={field.placeholder}
          hasArrow={field.hasArrow}
        />
      ))}
    </div>
  );
};
InputRow.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      iconSrc: PropTypes.string,
      placeholder: PropTypes.string,
      hasArrow: PropTypes.bool,
    })
  ).isRequired,
};

export default InputRow;