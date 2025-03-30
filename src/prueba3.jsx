import React from "react";
import classNames from "classnames";
import InputField from "./InputField";
import SelectField from "./prueba2"; // Asegúrate de tener este componente con la funcionalidad del select

const DemoAutoCompleteWithAdd = ({ fields, className, values, onChange }) => {
  return (
    <div
      className={classNames(
        "w-auto  flex items-center gap-2 justify-start px-4 -mb-[27px]",
        className
      )}
    >
      {fields.map((field, index) => {
        // Si se requiere select (hasArrow true) se usa SelectField, sino InputField
        if (field.hasArrow) {
          return (
            <SelectField
              key={index}
              iconSrc={field.iconSrc}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChange={(newVal) => onChange(field.name, newVal)}
              options={
                Array.isArray(field.options)
                  ? field.options.map((option) =>
                      typeof option === "object"
                        ? { value: option.value, label: option.label }
                        : { value: option, label: option }
                    )
                  : []
              }
              hasArrow={field.hasArrow}
            />
          );
        } else {
          return (
            <InputField
              key={index}
              iconSrc={field.iconSrc}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChange={(newVal) => onChange(field.name, newVal)}
            />
          );
        }
      })}
    </div>
  );
};

export default DemoAutoCompleteWithAdd;
