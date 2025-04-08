/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DataObra from '../Data/DataObra.js';
import PopupAO from './PopUps/PopupAO.jsx';
import TipodeObra from './PopUps/TipodeObra.jsx';
import PopupTO from './PopUps/PopupTO.jsx';

const Obra = ({ datos, sindatos, reload }) => {
  // Estados para controlar los popups
  const [isPopupAOOpen, setIsPopupAOOpen] = useState(false);
  const [isTipodeObraOpen, setIsTipodeObraOpen] = useState(false);
  const [isPopupTOOpen, setIsPopupTOOpen] = useState(false);

  // Paginación
  const [currentPage] = useState(1);
  const itemsPerPage = 10;
  const currentItems = DataObra.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Manejadores para TipodeObra
  const handleOpenTipodeObra = () => {
    setIsPopupAOOpen(false);
    setIsTipodeObraOpen(true);
  };

  const handleCloseTipodeObra = () => {
    setIsTipodeObraOpen(false);
    setIsPopupAOOpen(true);
  };

  return (
    <div className="flex flex-col items-center ml-[20%]">
      {/* Botón para abrir PopupAO (Agregar Obra) */}
      <div onClick={() => setIsPopupAOOpen(true)} style={{ cursor: 'pointer' }}>
        <div className="agregar-obra -mt-[8px]">
          <div className="texto-ingresos relative mt-[23px] ml-[35px] m-4 flex items-center gap-2">
            <p className="h3 blanco">Agregar Obra</p>
            <img 
              src="/public/svg/mas.svg" 
              alt="Icono agregar" 
              className="w-6 h-6 ml-[190px] mt-[40px]" 
            />
          </div>
          <div className="texto-ingresos relative mt-[-30px] ml-[35px] m-4 flex items-center gap-2">
            <p className="textos blanco">Ultima obra agregada:</p>
          </div>
        </div>
      </div>

      {/* Botón para abrir PopupTO (Trasladar Obra) */}
      <div onClick={() => setIsPopupTOOpen(true)} style={{ cursor: 'pointer' }}>
        <div className="t-obra mt-[28px]">
          <div className="texto-ingresos relative top-[52px] left-[20px] m-4">
            <p className="h3 blanco">Trasladar Obra</p>
            <img 
              src="/public/svg/flecha.svg" 
              alt="Icono trasladar" 
              className="w-6 h-6 ml-[372px] mt-[-27px]" 
            />
          </div>
        </div>
      </div>

      {/* Popup Agregar Obra (PopupAO) */}
      <PopupAO
        isPopupOpen={isPopupAOOpen}
        handlePopupClose={() => setIsPopupAOOpen(false)}
        onConfirm={handleOpenTipodeObra}
        datos={datos}
        sindatos={sindatos}
        reload={reload}
      />

      {/* Popup Tipo de Obra */}
      <TipodeObra
        isOpen={isTipodeObraOpen}
        onClose={handleCloseTipodeObra}
      />

      {/* Popup Trasladar Obra (PopupTO) */}
      <PopupTO 
        isPopupOpen={isPopupTOOpen} 
        handlePopupClose={() => setIsPopupTOOpen(false)} 
      />

      {/* Listado de últimas obras agregadas */}
      <div className="venta-tienda flex flex-col items-center mt-[38px]">
        <div className='w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px] ml-[57px]'>
          <p className='h3 negro'>Ultimas obras agregadas</p>
          <img 
            src="/public/svg/vector.svg" 
            alt="Icono lista" 
            className="w-6 h-6 ml-[55px]" 
          />
        </div>
        
        <div className='w-full h-full justify-center'>
          <div className='w-[402px] h-[10%] gap-2 border-b border-green-500 flex items-end pb-2 -mt-[15px] mx-auto'>
            <p className='gris-urbano w-[50%] ml-[7px]'>Titulo de la Obra</p>
            <p className='gris-urbano w-[13%] ml-[137px]'>Fecha</p>
          </div>

          {currentItems.map((item, index) => (
            <div className='gap-2 flex mb-[20px] relative mt-[10px] ml-[32px]' key={index}>
              <p className='textos-bold w-[70%] truncate'>{item["t-obra"]}</p>
              <p className='textos-bold w-[20%] truncate'>{item["Fecha"]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Obra;