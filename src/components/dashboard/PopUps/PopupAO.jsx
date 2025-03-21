/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import ObraPropia from './AO/ObraPropia';
import ObraConsignacion from './AO/ObraConsignacion';
import IVA from './AO/IVA';
import InputRow from './AO/InputRow';
import CheckboxWithLabel from './AO/CheckboxWithLabel';
import DataAO from '../../Data/DataAO';

const PopupAO = ({ isPopupOpen, handlePopupClose }) => {
  const [currentPage] = useState(1);
  const itemsPerPage = 10; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DataAO.slice(startIndex, endIndex);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    obraPropia: false,
    obraConsignacion: false,
    iva: false,
  });

  const handleCheckboxChange = (checkbox) => {
    if (checkbox === 'obraPropia' || checkbox === 'obraConsignacion') {
      setSelectedCheckboxes((prevState) => ({
        ...prevState,
        obraPropia: checkbox === 'obraPropia' ? !prevState.obraPropia : false,
        obraConsignacion: checkbox === 'obraConsignacion' ? !prevState.obraConsignacion : false,
      }));
    } else {
      setSelectedCheckboxes((prevState) => ({
        ...prevState,
        [checkbox]: !prevState[checkbox],
      }));
    }
  };

  // Definir las filas de campos
  const rows = [
    [
      { iconSrc: "/public/svg/popup-ao/ISBN.svg", placeholder: "ISBN" },
      { iconSrc: "/public/svg/popup-ao/NDLO.svg", placeholder: "Nombre de la obra" },
      { placeholder: "Proveedor", hasArrow: true },
    ],
    [
      { placeholder: "Editorial", hasArrow: true },
      { placeholder: "Autor", hasArrow: true },
      { placeholder: "Contenido", hasArrow: true },
    ],
    [
      { placeholder: "Clasificación", hasArrow: true },
      { placeholder: "Genero", hasArrow: true },
      { iconSrc: "/public/svg/popup-ao/costo.svg", placeholder: "Costo del libro" },
    ],
    [
      { iconSrc: "/public/svg/popup-ao/precio.svg", placeholder: "Precio de venta" },
      { iconSrc: "/public/svg/popup-ao/cantidad.svg", placeholder: "Cantidad" },
    ],
  ];

  return (
    <div style={{ position: 'relative' }}>
      <Drawer
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        width={1483}
        closable={false}
        headerStyle={{ display: 'none' }}
        drawerStyle={{ borderRadius: '10px 10px 10px 10px', height: '100%' }}
      >
        {/* Botón de cierre personalizado */}
        <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }} onClick={handlePopupClose}>
          <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6 mt-[10%]" />
        </div>

        <div className="flex items-center gap-2">
          <img src="/public/svg/popup-ao/agregar-obra.svg" alt="Icono" className="mb-[15px] w-33px h-33px ml-[20px]" />
          <h2 className="text-2xl mb-4 h3 verde-corporativo ml-[10px]">Añadir nueva obra</h2>
        </div>

        {/* Renderizar las filas de campos */}
        {rows.map((fields, index) => (
          <InputRow key={index} fields={fields} />
        ))}

        {/* Checkboxes y textos */}
        <div className='w-full h-[10%] flex flex-col gap-2 justify-start px-4 mt-[36px]'>
          <div className='flex items-center'>
            <CheckboxWithLabel
              label="Obra propia"
              checked={selectedCheckboxes.obraPropia}
              onChange={() => handleCheckboxChange('obraPropia')}
              className="mr-2 ml-[7px]"
            />
            <CheckboxWithLabel
              label="Obra en consignación"
              checked={selectedCheckboxes.obraConsignacion}
              onChange={() => handleCheckboxChange('obraConsignacion')}
              className="mr-2 ml-[20px]"
            />
            <CheckboxWithLabel
              label="IVA"
              checked={selectedCheckboxes.iva}
              onChange={() => handleCheckboxChange('iva')}
              className="mr-2 ml-[20px]"
            />
          </div>
        </div>

        {/* Renderizar PopupObraPropia si el checkbox está seleccionado */}
        {selectedCheckboxes.obraPropia && <ObraPropia />}
        {selectedCheckboxes.obraConsignacion && <ObraConsignacion />}
        {selectedCheckboxes.iva && <IVA />}

        <div className="flex flex-col items-center mt-[38px]">
          <div className='w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px] ml-[57px]'>
            <p className='h4 verde-corporativo'>Compra de la obra</p>
          </div>

          <div className='w-full h-full justify-center'>
            {/* Encabezados de la tabla */}
            <div className='w-[1385px] h-[10%] gap-2 border-b border-grey-500 flex items-end pb-2 mx-auto'>
              <p className='gris-urbano w-[5%]'>ID</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>ISBN</p>
              <p className='gris-urbano w-[20%] ml-[10px]'>Nombre de la obra</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>Editorial</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>Genero</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>Costo</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>Inducción</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>Proveedor</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>Cantidad total</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>Costo total</p>
              <p className='gris-urbano w-[10%] ml-[10px]'>Editar/Eliminar</p>
            </div>

            {/* Filas de datos */}
            {currentItems.map((item, index) => (
              <div className='gap-2 flex mb-[20px] relative mt-[10px] ml-[22px]' key={index}>
                <p className='textos-bold verde-eco w-[5.6%] truncate'>{item.ID}</p>
                <p className='textos-bold w-[9.4%] truncate'>{item.ISBN}</p>
                <p className='textos-bold w-[18%] truncate'>{item["Nombre de la obra"]}</p>
                <p className='textos-bold w-[10%] truncate'>{item["Editorial"]}</p>
                <p className='textos-bold w-[10%] truncate'>{item["Genero"]}</p>
                <p className='textos-bold w-[9%] truncate'>{item["Costo"]}</p>
                <p className='textos-bold w-[10%] truncate'>{item["Inducción"]}</p>
                <p className='textos-bold w-[10%] truncate'>{item["Proveedor"]}</p>
                <p className='textos-bold w-[10%] truncate'>{item["Cantidad Total"]}</p>
                <p className='textos-bold w-[10%] truncate'>{item["Costo total"]}</p>
                <p className='textos-bold w-[10%] truncate'>{item["Editar/Eliminar"]}</p>
              </div>
            ))}
          </div>

        </div>

      </Drawer>
    </div>
  );
};

PopupAO.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default PopupAO;