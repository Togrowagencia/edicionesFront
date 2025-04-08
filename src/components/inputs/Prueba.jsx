import React, { useState, useEffect, useRef } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";

const DemoAutoCompleteWithAdd = ({
  iconSrc,
  placeholder,
  className,
  hasArrow,
  value,
  onChange = () => {},
  options = [],
  multiselect, // true para permitir varios, false para uno solo
}) => {
  const [option, setOption] = useState(options);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Siempre trabajamos con array internamente, ya que mode="tags" lo requiere
  const [selectedValue, setSelectedValue] = useState(
    Array.isArray(value) ? value : value ? [value] : []
  );
  const [inputValue, setInputValue] = useState(
    Array.isArray(value) ? value.join(", ") : value || ""
  );

  // Actualizar el estado cuando el valor recibido cambia (para cuando se pasa un nuevo "value")
  useEffect(() => {
    if (value) {
      let vals = Array.isArray(value) ? value : [value];
      const newLabels = vals.map((val) => {
        const found = option.find((opt) => opt.value === val);
        return found ? found.label : val;
      });
      setSelectedValue(vals);
      setInputValue(newLabels.join(", "));
    } else {
      setSelectedValue([]);
      setInputValue("");
    }
  }, [value, option]); // Se actualiza cuando el "value" o "option" cambia

  // Si el valor recibido no existe en las opciones, lo agregamos
  useEffect(() => {
    if (value) {
      let vals = Array.isArray(value) ? value : [value];
      const missing = vals.filter(
        (val) => !option.some((opt) => opt.value === val)
      );
      if (missing.length > 0) {
        setOption((prev) => [
          ...prev,
          ...missing.map((val) => ({ label: val, value: val })),
        ]);
      }
    }
  }, [value, option]);

  const handleSelect = (data) => {
    let newValue = Array.isArray(data) ? data : [data];
    if (!multiselect && newValue.length > 1) {
      newValue = [newValue[newValue.length - 1]];
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const handleSearch = (text) => {
    setInputValue(text);
    const exactMatch = option.find(
      (opt) => opt.label.toLowerCase() === text.toLowerCase()
    );
    if (exactMatch) {
      const newVal = !multiselect ? [exactMatch.value] : [exactMatch.value];
      setSelectedValue(newVal);
      onChange(newVal);
    }
  };

  return (
    <div className={`relative w-[100%] ml-[5px] ${className}`}>
      {hasArrow ? (
        <Select
          showSearch
          mode="tags"
          maxTagCount={1}
          maxTagPlaceholder={(omittedValues) => `+${omittedValues.length} más`}
          optionFilterProp="label"
          style={{ width: "100%", height: "42px", fontWeight: "lighter" }}
          onChange={handleSelect}
          onSearch={handleSearch}
          onFocus={() => setIsFocused(true)} // Establecer el enfoque
          onBlur={() => setIsFocused(false)} // Restablecer el enfoque
          value={selectedValue.length > 0 ? selectedValue : undefined}
          options={option}
          notFoundContent={null}
        />
      ) : (
        <input
          className={`peer w-full bg-white border border-[#000] rounded-[10px] h-[42px] transition-all duration-300 ease focus:outline-none focus:border-green-600 negro shadow-sm focus:shadow  font-[700]  ${
            iconSrc ? "pl-3" : "pl-4"
          } `}
          type="text"
          value={inputValue}
          onChange={(e) => {
            const newVal = e.target.value;
            setInputValue(newVal);
            handleSearch(newVal);
            onChange(newVal);
          }}
          placeholder=" "
        />
      )}

      <label
        className={`perl absolute h4 cursor-text bg-white ml-3  transition-all transform origin-left ${
          isFocused || inputValue || selectedValue.length > 0 // Cuando está enfocado, tiene texto o valor seleccionado
            ? "-top-2.5 left-2.5 text-xs text-green-600 scale-75"
            : `top-3 ${iconSrc ? "left-10" : "left-1"} text-sm text-slate-200 negro`
        } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75 px-2`}
      >
        {placeholder}
      </label>

      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          className={`absolute py-1 top-[14%] transition-all transform ${
            value ? "left-[calc(100%+(-40px))]" : "left-5"
          } peer-focus:left-[calc(100%-40px)]`}
        />
      )}
    </div>
  );
};

DemoAutoCompleteWithAdd.propTypes = {
  iconSrc: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  hasArrow: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  multiselect: PropTypes.bool,
};

DemoAutoCompleteWithAdd.defaultProps = {
  multiselect: false,
};

export default DemoAutoCompleteWithAdd;
