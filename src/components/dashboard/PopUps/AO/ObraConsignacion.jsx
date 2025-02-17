/* eslint-disable no-unused-vars */
import React from 'react';

const ObraPropia = () => {
  return (
    <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4 -mt-[70px]'>

      <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
        <img src="/public/svg/popup-ao/numero.svg" alt="" />
        <input type="text" placeholder='Nº Remisión' className='custom-datepicker h4 negro custom-input' />
      </div>

      <div className='w-[316px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[43px] ml-[5px] '>
        <img src="/public/svg/popup-ao/retefuente.svg" alt="" />
        <input type="text" placeholder='Retefuente' className='custom-datepicker h4 negro custom-input' />
      </div>

    </div>
  );
};

export default ObraPropia;