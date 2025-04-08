import React from 'react';
import { baseurl2 } from '../../utils/baseurl';
const Libromain = ({ libro }) => {
  // 📌 Recibe libro como prop
  return (
    <div className="w-[99%] h-[50%] relative flex items-center bg-[url('/images/fondolibromain.png')] bg-center mt-[20%]">
      <div className="w-full h-full flex justify-right items-center">
        {libro ? (
          <img src='' alt='' className='' />
        ) : (
          <img src='/images/libroflorida1.png' alt='' className='absolute ml-[15%] w-[63%]' /> // Tienda por defecto
        )}
      </div>
    </div>
  );
};

export default Libromain;
