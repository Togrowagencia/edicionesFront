/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ iconSrc, placeholder, className, hasArrow, setISBN }) => {
  return (
    <div className={`w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] ${className}`}>
      {iconSrc && <img src={iconSrc} alt="" />}
      <input type="text" placeholder={placeholder} className='custom-datepicker h4 negro custom-input flex-1'/>
      {hasArrow && <img src="/public/svg/popup-ao/flechaA.svg" alt="" className='ml-[10%] mt-[3px]' />}
    </div>
  );
};
InputField.propTypes = {
  iconSrc: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  hasArrow: PropTypes.bool,
};
export default InputField;