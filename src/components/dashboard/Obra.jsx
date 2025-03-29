/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DataObra from '../Data/DataObra.js';
import PopupTO from './PopUps/PopupTO.jsx';
import PopupAO from './PopUps/PopupAO.jsx';

const Obra = ({datos, sindatos,reload}) => {
  const [openDrawer1, setOpenDrawer1] = useState(false); // Estado para el primer Drawer (PopupAO)
  const [openDrawer2, setOpenDrawer2] = useState(false); // Estado para el segundo Drawer (PopUpTO)
  const [currentPage] = useState(1);
  const itemsPerPage = 10; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DataObra.slice(startIndex, endIndex);

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

  return (
    <div className="flex flex-col items-center ml-[20%]">

      {/* Primer div que abre el primer Drawer (PopupAO) */}
      <div onClick={showDrawer1} style={{ cursor: 'pointer' }}>
        <div className="agregar-obra -mt-[8px]">
          <div className="texto-ingresos relative mt-[23px] ml-[35px] m-4 flex items-center gap-2">
            <p className="h3 blanco">Agregar Obra</p>
            <img src="/public/svg/mas.svg" alt="Icono" className="w-6 h-6 ml-[190px] mt-[40px]" />
          </div>
          <div className="texto-ingresos relative mt-[-30px] ml-[35px] m-4 flex items-center gap-2">
            <p className="textos blanco">Ultima obra agregada:</p>
          </div>
        </div>
      </div>

      {/* Segundo div que abre el segundo Drawer (PopUpTO) */}
      <div onClick={showDrawer2} style={{ cursor: 'pointer' }}>
        <div className="t-obra mt-[28px]">
          <div className="texto-ingresos relative top-[52px] left-[20px] m-4">
            <p className="h3 blanco">Trasladar Obra</p>
            <img src="/public/svg/flecha.svg" alt="Icono" className="w-6 h-6 ml-[372px] mt-[-27px]" />
          </div>
        </div>
      </div>

      {/* Primer Drawer (PopupAO) */}
      <PopupAO isPopupOpen={openDrawer1} handlePopupClose={onCloseDrawer1} datos={datos} sindatos={sindatos} reload ={reload}/>

      {/* Segundo Drawer (PopUpTO) */}
      <PopupTO isPopupOpen={openDrawer2} handlePopupClose={onCloseDrawer2} />

      <div className="venta-tienda flex flex-col items-center mt-[38px]">
        <div className='w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px] ml-[57px]'>
          <p className='h3 negro'>Ultimas obras agregadas</p>
          <img src="/public/svg/vector.svg" alt="Icono" className="w-6 h-6 ml-[55px]" />
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