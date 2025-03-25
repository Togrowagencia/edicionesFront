import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import classNames from 'classnames';

const InputRow = ({ fields, className, values = {}, onChange = () => {} }) => {
  return (
    <div className={classNames("w-auto h-[10%] flex items-center gap-2 justify-start px-4 -mb-[27px]", className)}>
      {fields.map((field, index) => (
        <InputField
          key={`${field.placeholder}-${index}`}
          iconSrc={field.iconSrc}
          placeholder={field.placeholder}
          hasArrow={field.hasArrow}
          value={values[field.name] || ''}
          onChange={(value) => onChange(field.name, value)}
        />
      ))}
    </div>
  );
};

InputRow.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Nuevo campo requerido
      iconSrc: PropTypes.string,
      placeholder: PropTypes.string.isRequired,
      hasArrow: PropTypes.bool,
    })
  ).isRequired,
  className: PropTypes.string,
  values: PropTypes.object,
  onChange: PropTypes.func,
};

export default InputRow;