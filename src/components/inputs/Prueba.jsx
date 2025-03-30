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
}) => {
  // Estado para las opciones actualizables
  const [option, setOption] = useState(options);

  const inputRef = useRef(null);
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

  useEffect(() => {
    if (Array.isArray(value)) {
      setSelectedValue(value);
      setInputValue(value.join(", "));
    } else if (value) {
      setSelectedValue([value]);
      setInputValue(value);
    } else {
      setSelectedValue([]);
      setInputValue("");
    }
  }, [value]);

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
    const newValue = Array.isArray(data) ? data : [data];
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const handleSearch = (text) => {
    setInputValue(text);
    const exactMatch = option.find(
      (opt) => opt.label.toLowerCase() === text.toLowerCase()
    );

    if (exactMatch) {
      setSelectedValue([exactMatch.value]);
      onChange([exactMatch.value]);
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
          maxTagCount={1}
          maxTagPlaceholder={(omittedValues) =>
            `+${omittedValues.length} más`
          }
          optionFilterProp="label"
          style={{ width: "100%", height: "45px" }}
          onChange={handleSelect}
          onSearch={handleSearch}
          value={selectedValue.length > 0 ? selectedValue : undefined}
          options={option}
          notFoundContent={null}
        />
      ) : (
        <input
          className={`p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition-all duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow ${
            iconSrc ? "pl-3" : "pl-4"
          } ${hasArrow ? "pr-10" : ""}`}
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
          selectedValue.length > 0
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
          className={`absolute bg-white px-1 py-1 left-1 top-2 rounded-[5px] transition-all transform ${
            selectedValue.length > 0
              ? "left-[calc(100%+(-40px))] "
              : "left-5"
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
};

export default DemoAutoCompleteWithAdd;
