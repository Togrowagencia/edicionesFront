/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CheckboxWithLabel } from '../inputs/CheckboxWithLabel';

function Chekboxs() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    obraPropia: false,
    obraConsignacion: false,
    iva: false,
  });

  const handleCheckboxChange = (checkbox) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [checkbox]: !prev[checkbox],
    }));
  };

  return (
    <div className='w-[15%] h-full flex flex-col justify-center'>
          <div className='flex items-center'>
            <CheckboxWithLabel
              label=""
              checked={selectedCheckboxes.obraPropia}
              onChange={() => handleCheckboxChange('obraPropia')}
              className="mr-2 ml-[7px]"
            />
          </div>
        </div>
  );
}

export default Chekboxs;