/* eslint-disable no-unused-vars */
import React from 'react'
import { DatePicker } from 'antd';

const HeaderGdO = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
  return (
    
    <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4 -ml-[1%]'>
          <div className='w-[200px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%]'>
              <img src="/svg/header/codigo.svg" alt=""/>
              <input type="text" placeholder='Código' className='custom-datepicker h4 custom-input'/>
          </div>

          <div className='w-[200px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[1%] '>
              <img src="/svg/popup-ao/ISBN.svg" alt=""/>
              <input type="text" placeholder='ISBN' className='custom-datepicker h4 custom-input'/>
          </div>

          <div className='w-[200px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[1%] '>
              <img src="/svg/popup-ao/NDLO.svg" alt=""/>
              <input type="text" placeholder='Nombre de la obra' className='custom-datepicker h4 custom-input'/>
          </div>

          <div className='w-[200px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[1%] '>
              <input type="text" placeholder='Proveedor' className='custom-datepicker h4 custom-input'/>
              <img src="/svg/header/flechaA2.svg" alt=""/>
          </div>

          <div className='w-[200px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[1%] '>
              <img src="/svg/header/autor.svg" alt=""/>
              <input type="text" placeholder='Autor' className='custom-datepicker h4 custom-input'/>
          </div>

          <div className='w-[260px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[8px]'>
              <img src="/svg/header/fecha.svg" alt=""/>
              <DatePicker onChange={onChange} placeholder='Rango de fecha' className='custom-datepicker h4'/>
          </div>

          <div>
          <div className='w-[50%] px-4 flex gap-4 items-center h-[50%] ml-[22%]'>
              <img src="/svg/header/stads.svg" alt=""/>
              <img src="/svg/header/descarga.svg" alt=""/>
              <img src="/svg/header/notification.svg" alt=""/>
          </div>
            </div>
    </div>
    
  )
}

export default HeaderGdO;
