/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { InputRow } from '../inputs/InputRow';
import { CheckboxWithLabel } from '../inputs/CheckboxWithLabel';
import BotonAgregar from '../inputs/BotonAgregar'

const Header = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    obraPropia: false,
    obraConsignacion: false
  });

  const handleCheckboxChange = (name) => {
    setSelectedCheckboxes(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const rows = [
    [
      { iconSrc: "/svg/header/buscar.svg", placeholder: "Buscar" },
      { iconSrc: "/public/svg/identificador.svg", placeholder: "Identificador" },
    ],
    [
      { iconSrc: "/public/svg/popup-ao/ISBN.svg", placeholder: "ISBN" },
      { placeholder: "Vendedor", hasArrow: true },
    ],
  ];

  return (
    <div className='w-full h-full flex'>
      <div className=''>
        {rows.map((fields, index) => (
          <InputRow key={index} fields={fields} className="h-[50%] p-4" />
        ))}
      </div>

      <div className='flex'>

        <div className='flex flex-wrap items-center gap-4 mt-3 h-[70%] w-full'>
          <div className='w-[52%] mr-[30%]'>
          <BotonAgregar texto={"Agregar nuevo cliente"}/>
          </div>
          <CheckboxWithLabel
            label="IVA"
            checked={selectedCheckboxes.obraPropia}
            onChange={() => handleCheckboxChange('obraPropia')}
            className="mr-2"
            />
          <CheckboxWithLabel
            label="Retencion en la fuente"
            checked={selectedCheckboxes.obraConsignacion}
            onChange={() => handleCheckboxChange('obraConsignacion')}
            className="mr-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;