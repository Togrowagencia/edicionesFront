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
    <div className='w-full h-[10%] flex flex-col gap-2 justify-start px-4 '>
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