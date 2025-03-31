import React, { useState, useEffect, useRef } from "react";
import { Button, Divider, Input, Select, Space } from "antd";
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
  const [name, setName] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  // Actualizamos selectedValue e inputValue usando las opciones para encontrar el label correspondiente
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
  }, [value, option]);

  // Si el valor recibido no existe en las opciones, lo agregamos
  useEffect(() => {
    if (value) {
      let vals = Array.isArray(value) ? value : [value];
      const missing = vals.filter((val) => !option.some((opt) => opt.value === val));
      if (missing.length > 0) {
        setOption((prev) => [
          ...prev,
          ...missing.map((val) => ({ label: val, value: val })),
        ]);
      }
    }
  }, [value, option]);

  const addItem = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setOption([...option, { label: name, value: name }]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleSelect = (data) => {
    // data es un array, forzamos a que si no es multiselect, se quede con un solo valor (el último)
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
      // Forzamos el valor a ser un array de un solo elemento si no es multiselect
      const newVal = !multiselect ? [exactMatch.value] : [exactMatch.value];
      setSelectedValue(newVal);
      onChange(newVal);
    }
  };

  return (
    <div className={`relative w-[316px] ml-[5px] ${className}`}>
      {hasArrow ? (
        <Select
          showSearch
          mode="tags"
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider style={{ margin: "8px 0" }} />
              <Space style={{ padding: "0 8px 4px" }}>
                <Input
                  placeholder="Please enter item"
                  ref={inputRef}
                  value={name}
                  onChange={onNameChange}
                  onKeyDown={(e) => e.stopPropagation()}
                />
                <Button type="text" icon={"+"} onClick={addItem}>
                  Add item
                </Button>
              </Space>
            </>
          )}
          maxTagCount={1} // se muestra 1 etiqueta visualmente
          maxTagPlaceholder={(omittedValues) =>
            `+${omittedValues.length} más`
          }
          optionFilterProp="label"
          style={{ width: "100%", height: "45px" }}
          onChange={handleSelect}
          onSearch={handleSearch}
          onBlur={() => {
            // Si no es multiselect, forzamos a que solo quede un valor
            if (!multiselect && selectedValue.length > 1) {
              const trimmed = [selectedValue[selectedValue.length - 1]];
              setSelectedValue(trimmed);
              onChange(trimmed);
            }
          }}
          value={selectedValue.length > 0 ? selectedValue : undefined}
          options={option}
          notFoundContent={null}
        />
      ) : (
        <input
          className={`p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition-all duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow ${
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
        className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
          (multiselect && selectedValue.length > 0) || 
          (!multiselect && selectedValue.length > 0) || 
          isFocused
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
          className={`absolute bg-white px-1 py-1 left-1 top-2 rounded-[5px] transition-all transform  peer-focus:left-[calc(100%-40px)]`}
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
  multiselect: false, // Por defecto se permite multiselección
};

export default DemoAutoCompleteWithAdd;
