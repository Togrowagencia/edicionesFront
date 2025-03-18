import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import HeaderGdB from '../components/Gestiondebodegas/headerGdB';
import Libromain from '../components/Gestiondebodegas/libromain';
import Libros from '../components/Gestiondebodegas/libros';
import Tienda from '../components/Gestiondebodegas/tienda';

const GestiondeBodegas = () => {
  const [libroSeleccionado, setLibroSeleccionado] = useState(null); // 📌 Manejamos el estado aquí

  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <div className='w-1553px h-883px flex gap-5'>
        <Sidebar />

        <div className='w-[83%] gestion-de-obras'>
          <HeaderGdB />
          <div className='w-full h-[90%] flex'>
            <div className='w-[65%] h-full'>
              <Libromain />
              <div className=''>
                <Libros setLibroSeleccionado={setLibroSeleccionado} /> {/* 📌 Pasamos la función */}
                <Tienda libro={libroSeleccionado} /> {/* 📌 Pasamos el libro seleccionado */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestiondeBodegas;
