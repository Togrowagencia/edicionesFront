/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import ObraPropia from './AO/ObraPropia';
import ObraConsignacion from './AO/ObraConsignacion';
import IVA from './AO/IVA';

const PopupAO = ({ isPopupOpen, handlePopupClose }) => {
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

  return (
    <div style={{ position: 'relative'}}>
      <Drawer
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        width={1483}
        closable={false} // Desactiva el botón de cierre predeterminado
        headerStyle={{ display: 'none' }} // Oculta el header del Drawer
        drawerStyle={{ 
          borderRadius: '10px 10px 10px 10px', 
          height: '100%',
        }} 
      >

        {/* Botón de cierre personalizado */}
        <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }} onClick={handlePopupClose}>
          <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6 mt-[10%]" />
        </div>

        <div className="flex items-center gap-2">
          <img src="/public/svg/popup-ao/agregar-obra.svg" alt="Icono" className="mb-[15px] w-33px h-33px ml-[20px]" />
          <h2 className="text-2xl mb-4 h3 verde-corporativo ml-[10px]">Añadir nueva obra</h2>
        </div>

        {/* Primera fila de campos */}
        <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4 -mb-[27px]'>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <img src="/public/svg/popup-ao/ISBN.svg" alt="" />
            <input type="text" placeholder='ISBN' className='custom-datepicker h4 negro custom-input' />
          </div>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <img src="/public/svg/popup-ao/NDLO.svg" alt="" />
            <input type="text" placeholder='Nombre de la obra' className='custom-datepicker h4 negro custom-input' />
          </div>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <input type="text" placeholder='Proveedor' className='custom-datepicker h4 negro custom-input' />
            <img src="/public/svg/popup-ao/flechaA.svg" alt="" className='ml-[10%] mt-[3px]' />
          </div>
        </div>

        {/* Segunda fila de campos */}
        <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4 -mb-[27px]'>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <input type="text" placeholder='Editorial' className='custom-datepicker h4 custom-input' />
            <img src="/public/svg/popup-ao/flechaA.svg" alt="" className='ml-[10%] mt-[3px]' />
          </div>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <input type="text" placeholder='Autor' className='custom-datepicker h4 custom-input' />
            <img src="/public/svg/popup-ao/flechaA.svg" alt="" className='ml-[10%] mt-[3px]' />
          </div>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <input type="text" placeholder='Contenido' className='custom-datepicker h4 custom-input' />
            <img src="/public/svg/popup-ao/flechaA.svg" alt="" className='ml-[10%] mt-[3px]' />
          </div>
        </div>

        {/* Tercera fila de campos */}
        <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4 -mb-[27px]'>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <input type="text" placeholder='Clasificación' className='custom-datepicker h4 custom-input' />
            <img src="/public/svg/popup-ao/flechaA.svg" alt="" className='ml-[10%] mt-[3px]' />
          </div>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <input type="text" placeholder='Genero' className='custom-datepicker h4 custom-input' />
            <img src="/public/svg/popup-ao/flechaA.svg" alt="" className='ml-[10%] mt-[3px]' />
          </div>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <img src="/public/svg/popup-ao/costo.svg" alt="" />
            <input type="text" placeholder='Costo del libro' className='custom-datepicker h4 custom-input' />
          </div>
        </div>

        {/* Cuarta fila de campos */}
        <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4 -mb-[27px]'>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <img src="/public/svg/popup-ao/precio.svg" alt="" />
            <input type="text" placeholder='Precio de venta' className='custom-datepicker h4 custom-input' />
          </div>
          <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
            <img src="/public/svg/popup-ao/cantidad.svg" alt="" />
            <input type="text" placeholder='Cantidad' className='custom-datepicker h4 custom-input' />
          </div>
        </div>

        {/* Checkboxes y textos */}
        <div className='w-full h-[10%] flex flex-col gap-2 justify-start px-4 mt-[36px]'>
          <div className='flex items-center'>
            <input
              type="checkbox"
              className='mr-2 ml-[7px] check-box'
              checked={selectedCheckboxes.obraPropia}
              onChange={() => handleCheckboxChange('obraPropia')}
            />
            <p className='h4 gris-urbano'>Obra propia</p>

            <input
              type="checkbox"
              className='mr-2 ml-[20px] check-box'
              checked={selectedCheckboxes.obraConsignacion}
              onChange={() => handleCheckboxChange('obraConsignacion')}
            />
            <p className='h4 gris-urbano'>Obra en consignación</p>

            <input
              type="checkbox"
              className='mr-2 ml-[20px] check-box'
              checked={selectedCheckboxes.iva}
              onChange={() => handleCheckboxChange('iva')}
            />
            <p className='h4 gris-urbano'>IVA</p>
          </div>
        </div>

        {/* Renderizar PopupObraPropia si el checkbox está seleccionado */}
        {selectedCheckboxes.obraPropia && <ObraPropia />}
        {selectedCheckboxes.obraConsignacion && <ObraConsignacion />}
        {selectedCheckboxes.iva && <IVA />}

      </Drawer>
    </div>
  );
};

PopupAO.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default PopupAO;