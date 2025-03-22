/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { DatePicker } from 'antd';
import Notificacion from './Notificacion';
import Carrito from './Carrito';

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [carritoVisible, setCarritoVisible] = useState(false);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const showCarrito = () => {
    setCarritoVisible(true);
  };

  const closeCarrito = () => {
    setCarritoVisible(false);
  };

  return (
    <div className='w-[95%] h-[80px] flex items-center gap-2 justify-start px-4 '>
      <div className='w-[34%] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[-30px] '>
        <img src="/svg/header/buscar.svg" alt=""/>
        <input type="text" placeholder='Buscar' className='custom-datepicker h4 custom-input'/>
      </div>
      <div className='w-[34%] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[8px]'>
        <img src="/svg/header/fecha.svg" alt=""/>
        <DatePicker onChange={onChange} placeholder='Rango de fecha' className='custom-datepicker h4'/>
      </div>

      <div>
        <div className='w-[50%] px-4 flex gap-4 items-center h-[50%] ml-[243%]'>
          <img src="/svg/header/carrito.svg" alt="" onClick={showCarrito} className='cursor-pointer'/>
          <img src="/svg/header/stads.svg" alt=""/>
          <img src="/svg/header/notification.svg" alt="" onClick={showDrawer} className='cursor-pointer'/>
        </div>
      </div>

      <Notificacion visible={drawerVisible} onClose={closeDrawer} />
      <Carrito visible={carritoVisible} onClose={closeCarrito} />
    </div>
  );
};

export default Header;