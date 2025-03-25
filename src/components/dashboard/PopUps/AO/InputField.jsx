import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ 
  iconSrc, 
  placeholder, 
  className, 
  hasArrow, 
  value, 
  onChange = () => {} 
}) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`relative w-[316px] ml-[5px] ${className}`}>
      <input
        id={inputId}
        className={`p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition-all duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow ${
          iconSrc ? 'pl-2' : 'pl-4'
        } ${hasArrow ? 'pr-10' : ''}`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
      />
      
      <label
        htmlFor={inputId}
        className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
          value
            ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
            : "top-3 left-12 text-sm text-slate-400"
        } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
      >
        {placeholder}
      </label>
      
      {iconSrc && (
        <img 
          src={iconSrc} 
          alt="" 
          className={`absolute bg-white px-1 py-1 left-4 top-2 transition-all transform ${
            value ? "left-[calc(100%-40px)] " : "left-4"
          } peer-focus:left-[calc(100%-35px)]`}
        />
      )}
      
      {hasArrow && (
        <img 
          src="/svg/popup-ao/flechaA.svg" 
          alt="" 
          className={`absolute right-4 top-4 transition-transform duration-300 ${
            value ? 'rotate-180' : ''
          } peer-focus:rotate-180`} 
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  iconSrc: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  hasArrow: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;