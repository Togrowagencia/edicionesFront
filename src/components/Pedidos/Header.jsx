/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { InputRow } from '../inputs/InputRow';

const Header = () => {

  const rows = [
    [
      { iconSrc: "/svg/header/buscar.svg", placeholder: "Buscar" },
      { iconSrc: "/public/svg/identificador.svg", placeholder: "Identificador" },
      { iconSrc: "/public/svg/popup-ao/ISBN.svg", placeholder: "ISBN" },
    ],
  ];

  return (
    <div className='w-full h-full flex flex-col mb-10'>
      <div className='h2 negro px-6 gap-3 flex py-10'>
      <img src='/public/svg/Pedidos/rappi.svg' alt="Libro"/>
        <p>Pedidos de Rappi</p>
      </div>
      <div className=''>
        {rows.map((fields, index) => (
          <InputRow key={index} fields={fields} className="h-[50%] p-4" />
        ))}
      </div>
      
    </div>
  );
}

export default Header;