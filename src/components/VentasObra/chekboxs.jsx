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
              label="Obra en consignación"
              checked={selectedCheckboxes.obraPropia}
              onChange={() => handleCheckboxChange('obraPropia')}
              className="mr-2 ml-[7px]"
            />
            <CheckboxWithLabel
              label="Obras propias"
              checked={selectedCheckboxes.obraConsignacion}
              onChange={() => handleCheckboxChange('obraConsignacion')}
              className="mr-2 ml-[20px]"
            />
            <CheckboxWithLabel
              label="Total"
              checked={selectedCheckboxes.iva}
              onChange={() => handleCheckboxChange('iva')}
              className="mr-2 ml-[20px]"
            />
          </div>
        </div>
  );
}

export default Chekboxs;