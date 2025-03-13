/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import DataTO from '../../Data/DataTO';

const PopupTO = ({ isPopupOpen, handlePopupClose }) => {
  const [currentPage] = useState(1);
  const itemsPerPage = 10; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DataTO.slice(startIndex, endIndex);  

  return (
    <div style={{ position: 'relative' }}>
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
          <img src="/public/svg/popup-to/trasladar.svg" alt="Icono" className="mb-[15px] w-33px h-33px ml-[20px]" />
          <h2 className="text-2xl mb-4 h3 verde-corporativo ml-[10px]">Trasladar obras</h2>
        </div>

        <div className="flex items-center gap-2">
          <h4 className="text-2xl mb-4 h4 gris-urbano ml-[1.5%] mt-[3%]">Trasladar de </h4>
          
          <div className='w-[260px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[1%] mt-[2%]'>
              <input type="text" placeholder='Punto de venta' className='custom-datepicker h4 custom-input'/>
              <img src="/svg/popup-ao/flechaA.svg" alt=""/>
          </div>
          
          <h4 className="text-2xl mb-4 h4 gris-urbano ml-[1%] mt-[3%]">a</h4>

          <div className='w-[260px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[1%] mt-[2%]'>
              <input type="text" placeholder='Punto de venta' className='custom-datepicker h4 custom-input'/>
              <img src="/svg/popup-ao/flechaA.svg" alt=""/>
          </div>

          <div className='w-[260px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[1%] mt-[2%]'>
              <img src="/svg/header/buscar.svg" alt=""/>
              <input type="text" placeholder='Buscar' className='custom-datepicker h4 custom-input'/>
          </div>

          <div className='w-[150px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[1%] mt-[2%]'>
              <img src="/svg/popup-ao/cantidad.svg" alt=""/>
              <input type="text" placeholder='Cantidad' className='custom-datepicker h4 custom-input'/>
          </div>

        </div>
        
        <div className="flex items-center gap-2">
        <h4 className="text-2xl mb-4 h4 verde-corporativo ml-[1.5%] mt-[3%]">Busqueda</h4>
        </div>

        <div className="flex items-center gap-2 mt-[10%]">
        <h4 className="text-2xl mb-4 h4 verde-corporativo ml-[1.5%] mt-[3%]">Items a trasladar viva laureles</h4>
        <img className="mt-[2%] ml-[1%]" src="/svg/header/flechaA2.svg" alt=""/>
        </div>

        <div className='w-full h-full justify-center -mt-[4%]'>
{/* Encabezados de la tabla */}
        <div className='w-[1385px] h-[10%] gap-2 border-b border-grey-500 flex items-end pb-2 mx-auto ml-[1.5%]'>
          <p className='gris-urbano w-[5%]'>ID</p> 
          <p className='gris-urbano w-[10%] ml-[10px]'>ISBN</p> 
          <p className='gris-urbano w-[20%] ml-[10px]'>Nombre de la obra</p> 
          <p className='gris-urbano w-[10%] ml-[10px]'>Editorial</p> 
          <p className='gris-urbano w-[10%] ml-[10px]'>Proveedor</p> 
          <p className='gris-urbano w-[10%] ml-[10px]'>Salida desde punto de venta</p> 
          <p className='gris-urbano w-[10%] ml-[10px]'>Lleganda al punto de venta</p> 
          <p className='gris-urbano w-[10%] ml-[10px]'>Cantidad total</p> 
          <p className='gris-urbano w-[10%] ml-[10px]'>Editar/Eliminar</p> 
        </div>

{/* Filas de datos */}
        {currentItems.map((item, index) => (
          <div className='gap-2 flex mb-[20px] relative mt-[10px] ml-[1.5%]' key={index}>
            <p className='textos-bold verde-eco w-[5.6%] truncate'>{item.ID}</p> 
            <p className='textos-bold w-[9.4%] truncate'>{item["ISBN"]}</p> 
            <p className='textos-bold w-[18%] truncate'>{item["Nombre de la obra"]}</p> 
            <p className='textos-bold w-[10%] truncate'>{item["Editorial"]}</p> 
            <p className='textos-bold w-[10%] truncate'>{item["Genero"]}</p> 
            <p className='textos-bold w-[10%] truncate'>{item["Proveedor"]}</p> 
            <p className='textos-bold w-[10%] truncate'>{item["Salida-desde-punto-de-venta"]}</p>
            <p className='textos-bold w-[10%] truncate'>{item["Llegada-al-punto-de-venta"]}</p>
            <p className='textos-bold w-[10%] truncate'>{item["Cantidad-Total"]}</p> 
            <p className='textos-bold w-[10%] truncate'>{item["Editar/Eliminar"]}</p> 
          </div>
        ))}
        </div>

      </Drawer>
    </div>
  );
};
PopupTO.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default PopupTO;