/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proveedor from '../../Data/ControldeRecursos/Proveedor';

const Contenidos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Proveedor.slice(startIndex, endIndex);

  return (
    <div className="w-[23%] h-[37.5%] bg-white rounded-[10px] sombra flex-shrink-0">
        <div className='w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px] ml-[5%]'>
            <p className='h3 negro w-[80%]'>Contenidos</p>
            <img src="/public/svg/header/buscar.svg" alt="Icono" className=" " />
        </div>
        <div className='w-full h-full justify-center'>
            <div className='w-[90%] h-[10%] gap-2 border-b border-green-500 flex items-end pb-2 mt-[3%] mx-auto'>
                <p className='gris-urbano w-[58%] ml-[2%]'>Contenidos</p>
                <p className='gris-urbano w-[35%]'>Editar / Eliminar</p>
            </div>

            {currentItems.map((item, index) => (
                <div className='gap-2 flex mb-[20px] relative mt-[10px] ml-[7%]' key={index}>
                    <p className='textos-bold w-[60%]  truncate'>{item.Proveedor}</p>
                    <img src="/svg/editar.svg" alt="" className=''/>
                    <img src="/svg/editar.svg" alt="" className='ml-[7%]'/>
                </div>
            ))}

        </div>
           
      </div>

  )
}

export default Contenidos