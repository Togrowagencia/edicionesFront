import PropTypes from 'prop-types';
import InputField from './InputField';
import classNames from 'classnames'; // Opcional, ayuda a fusionar clases sin sobrescribirlas

const InputRow = ({ fields, className }) => {
  return (
    <div className={classNames("w-full h-[10%] flex items-center gap-2 justify-start px-4 -mb-[27px]", className)}>
      {fields.map((field, index) => (
        <InputField
          key={index}
          iconSrc={field.iconSrc}
          placeholder={field.placeholder}
          hasArrow={field.hasArrow}
        />
      ))}
    </div>
  );
};

InputRow.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      iconSrc: PropTypes.string,
      placeholder: PropTypes.string,
      hasArrow: PropTypes.bool,
    })
  ).isRequired,
  className: PropTypes.string, // Agregamos la validación de la nueva prop
};

export default InputRow;
