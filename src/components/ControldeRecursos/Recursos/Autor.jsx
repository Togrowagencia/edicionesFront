/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proveedor from '../../Data/ControldeRecursos/Proveedor';
import AgregarRecurso from '../CrearRecurso';
const Autor = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Proveedor.slice(startIndex, endIndex);

  return (
    <div className="w-[23%] h-[25.5%] bg-white rounded-[10px] sombra flex-shrink-0">
        <div className='w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px] ml-[5%]'>
            <p className='h3 negro w-[80%]'>Autor</p>
            <img src="/public/svg/header/buscar.svg" alt="Icono" className=" " />
        </div>
        <div className='w-full h-full justify-center'>
          <div className="overflow-auto max-h-[calc(100%-80px)]"> 
              <table className='w-[90%] mx-auto'>
                  <thead className="bg-white sticky top-0 z-10 shadow">
                      <tr className='border-b border-green-500 '>
                          <th className='gris-urbano '>Autor</th>
                          <th className='gris-urbano '>Editar / Eliminar</th>
                      </tr>
                  </thead>
                  <tbody>
                      {Proveedor.map((item, index) => (
                          <tr key={index} className={`text-end ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                              <td className='textos-bold py-2'>{item.Proveedor}</td>
                            
                              <td className='flex items-center justify-center'>
                                  <img src="/svg/editar.svg" alt="editar" className='p-2' />
                                  <img src="/svg/editar.svg" alt="Eliminar" className='p-2' />
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
          
      </div>
      <AgregarRecurso  />
      </div>

  )
}

export default Autor