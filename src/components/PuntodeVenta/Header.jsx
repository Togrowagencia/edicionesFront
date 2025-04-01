/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { InputRow } from '../inputs/InputRow';
import { CheckboxWithLabel } from '../inputs/CheckboxWithLabel';
import { Drawer } from 'antd';

const DrawerPagoCredito = ({ visible, onClose }) => (
  <Drawer title="Pago Crédito" visible={visible} onClose={onClose}>
    <p>Contenido del drawer de pago crédito</p>
  </Drawer>
);

const DrawerAgregarCliente = ({ visible, onClose }) => (
  <Drawer title="Agregar Cliente" visible={visible} onClose={onClose}>
    <p>Contenido del drawer para agregar nuevo cliente</p>
  </Drawer>
);

const Header = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    obraPropia: false,
    obraConsignacion: false
  });

  const [isDrawerPagoCreditoOpen, setDrawerPagoCreditoOpen] = useState(false);
  const [isDrawerAgregarClienteOpen, setDrawerAgregarClienteOpen] = useState(false);

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
          <div className='flex w-full'>
            <button onClick={() => setDrawerPagoCreditoOpen(true)}>
              <p className='bg-green-700 rounded blanco textos py-1 px-2'>Pago crédito</p>
            </button>
            <button onClick={() => setDrawerAgregarClienteOpen(true)} className='bg-green-700 rounded blanco textos py-1 ml-2 px-2 flex gap-1'>
              <p className=''>Agregar nuevo cliente</p>
              <img src="/svg/agregar.svg" alt="" className='w-2'/>
            </button>
          </div>
          <CheckboxWithLabel
            label="IVA"
            checked={selectedCheckboxes.obraPropia}
            onChange={() => handleCheckboxChange('obraPropia')}
            className="mr-2"
          />
          <CheckboxWithLabel
            label="Retención en la fuente"
            checked={selectedCheckboxes.obraConsignacion}
            onChange={() => handleCheckboxChange('obraConsignacion')}
            className="mr-2"
          />
        </div>
      </div>

      {/* Renderizar los Drawers */}
      <DrawerPagoCredito visible={isDrawerPagoCreditoOpen} onClose={() => setDrawerPagoCreditoOpen(false)} />
      <DrawerAgregarCliente visible={isDrawerAgregarClienteOpen} onClose={() => setDrawerAgregarClienteOpen(false)} />
    </div>
  );
}

export default Header;
