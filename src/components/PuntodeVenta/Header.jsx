import React, { useState } from 'react';
import { InputRow } from '../inputs/InputRow';
import { CheckboxWithLabel } from '../inputs/CheckboxWithLabel';
import PagoCredito from './PagoCredito';
import NuevoCliente from './NuevoCliente'

const Header = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    obraPropia: false,
    obraConsignacion: false
  });

  // Mover los estados dentro del componente
  const [openDrawer1, setOpenDrawer1] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);

  const showDrawer1 = () => {
    setOpenDrawer1(true);
  };

  const showDrawer2 = () => {
    setOpenDrawer2(true);
  };

  const onCloseDrawer1 = () => {
    setOpenDrawer1(false);
  };

  const onCloseDrawer2 = () => {
    setOpenDrawer2(false);
  };

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
      <div>
        {rows.map((fields, index) => (
          <InputRow key={index} fields={fields} className="h-[50%] p-4" />
        ))}
      </div>

      <div className='flex'>
        <div className='flex flex-wrap items-center gap-4 mt-3 h-[70%] w-full'>
          <div className='flex w-full'>
            <button onClick={showDrawer1}>
              <p className='bg-green-700 rounded blanco textos py-1 px-2'>Pago crédito</p>
            </button>
            <button onClick={showDrawer2} className='bg-green-700 rounded blanco textos py-1 ml-2 px-2 flex gap-1'>
              <p>Agregar nuevo cliente</p>
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

      {/* Primer Drawer (PagoCredito) */}
      <PagoCredito isPopupOpen={openDrawer1} handlePopupClose={onCloseDrawer1} />

      {/* Segundo Drawer (PopUpTO) */}
      <NuevoCliente isPopupOpen={openDrawer2} handlePopupClose={onCloseDrawer2} />
    </div>
  );
}

export default Header;