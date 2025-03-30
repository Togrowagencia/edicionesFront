// SelectField.js
import React, { useState } from "react";
import { Select } from "antd";
import classNames from "classnames";
import PropTypes from "prop-types";

const SelectField = ({
  iconSrc,
  placeholder,
  className,
  value,
  onChange = () => {},
  options = [],
  hasArrow = true,
}) => {
  const [focused, setFocused] = useState(false);
  const inputId = `select-${Math.random().toString(36).substr(2, 9)}`;

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className={`relative w-[316px] ml-[5px] ${className}`}>
      <Select
        id={inputId}
        style={{ width: "100%", height: "45px"}}
        showSearch
        placeholder=" "  // Dejamos el placeholder vacío para que lo maneje la etiqueta flotante
        options={options.map((option) => ({
          value: option.value || option,
          label: option.label || option,
        }))}
        value={value || undefined}
        onChange={(newVal) => onChange(newVal)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="peer w-full bg-white border border-[#000] rounded-[10px] h4 transition-all duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow pr-10"
      />
      <label
        htmlFor={inputId}
        className={classNames(
          "absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left",
          (value || focused)
            ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
            : "top-3 left-12 text-sm text-slate-400"
        )}
      >
        {placeholder}
      </label>
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          className={classNames(
            "absolute bg-white px-1 py-1 rounded-[5px] transition-all transform",
            (value || focused) ? "left-[calc(100%-40px)]" : "left-5",
            "top-2"
          )}
        />
      )}
      
    </div>
  );
};

SelectField.propTypes = {
  iconSrc: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  hasArrow: PropTypes.bool,
};

export default SelectField;
