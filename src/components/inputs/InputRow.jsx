import React from "react";
import PropTypes from "prop-types";
import DemoAutoCompleteWithAdd from "../../components/inputs/Prueba";

import classNames from "classnames";

export const InputRow = ({
  fields,
  className,
  values = {},
  onChange = () => {},
}) => {
  return (
    <div
      className={classNames(
        "w-auto h-[10%] flex items-center gap-2 justify-start px-4 -mb-[27px]",
        className
      )}
    >
      {fields.map((field, index) => (
        <DemoAutoCompleteWithAdd
          key={`${field.placeholder}-${index}`}
          iconSrc={field.iconSrc}
          placeholder={field.placeholder}
          hasArrow={field.hasArrow}
          value={values[field.name] || ""}
          onChange={(value) => onChange(field.name, value)}
          options={Array.isArray(field.options) ? field.options : []} // Asegura que sea un array
        />
      ))}
    </div>
  );
};

InputRow.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      iconSrc: PropTypes.string,
      placeholder: PropTypes.string.isRequired,
      hasArrow: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ), // Opciones para el select
    })
  ).isRequired,
  className: PropTypes.string,
  values: PropTypes.object,
  onChange: PropTypes.func,
};
