/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

export const CheckboxWithLabel = ({ label, checked, onChange, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        className='mr-2 check-box'
        checked={checked}
        onChange={onChange}
      />
      <p className='h4 gris-urbano'>{label}</p>
    </div>
  );
};
CheckboxWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
