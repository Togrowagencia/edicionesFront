/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { InputRow } from '../inputs/InputRow';

const Header = () => {

  const rows = [
    [
      { iconSrc: "/svg/header/buscar.svg", placeholder: "Identificación" },
      { iconSrc: "/public/svg/identificador.svg", placeholder: "N° de factura" },
      { iconSrc: "/public/svg/popup-ao/ISBN.svg", placeholder: "Rango de fecha" },
    ],
  ];

  return (
    <div className='w-full h-[60%] py-4'>
      <div className=''>
        {rows.map((fields, index) => (
          <InputRow key={index} fields={fields} className="h-[50%] p-4 " />
        ))}
      </div>
      
    </div>
  );
}

export default Header;