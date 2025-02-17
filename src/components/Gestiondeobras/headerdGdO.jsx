/* eslint-disable no-unused-vars */
import React from 'react'
import { DatePicker } from 'antd';

const HeaderGdO = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
  return (
    
    <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4'>
          <div className='w-[34%] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[-30px] '>
              <img src="/svg/header/buscar.svg" alt=""/>
              <input type="text" placeholder='Buscar' className='custom-datepicker h4 custom-input'/>
          </div>
          <div className='w-[34%] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[8px]'>
              <img src="/svg/header/fecha.svg" alt=""/>
              <DatePicker onChange={onChange} placeholder='Rango de fecha' className='custom-datepicker h4'/>
          </div>

          <div>
          <div className='w-[50%] px-4 flex gap-4 items-center h-[50%] ml-[210%]'>
              <img src="/svg/header/carrito.svg" alt=""/>
              <img src="/svg/header/stads.svg" alt=""/>
              <img src="/svg/header/notification.svg" alt=""/>
          </div>
            </div>
    </div>
    
  )
}

export default HeaderGdO;
