import React from 'react';
import { baseurl2 } from '../../utils/baseurl';

const Libromain = ({ libro }) => {
  if (!libro) return null;

  return (
    <div className="w-[99%] h-[50%] relative flex items-center bg-[url('/images/fondolibromain.png')] bg-center mt-[20%]">
      <div className="w-full h-full flex justify-right items-center">
        <img 
          src={baseurl2 + libro.file} 
          alt={libro.name} 
          className='absolute ml-[15%] w-[63%]'
        />
      </div>
    </div>
  );
};

export default Libromain;
