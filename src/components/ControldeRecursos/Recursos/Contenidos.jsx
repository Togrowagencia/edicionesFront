/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proveedor from '../../Data/ControldeRecursos/Proveedor';

const Contenidos = () => {

  return (
    <div className="w-[23%] h-[25.5%] bg-white rounded-[10px] sombra flex-shrink-0 mt-[-15%]">
        <div className='w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px] ml-[5%]'>
            <p className='h3 negro w-[80%]'>Contenidos</p>
            <img src="/public/svg/header/buscar.svg" alt="Icono" className=" " />
        </div>
        <div className='w-full h-full justify-center'>
        <div className="overflow-auto max-h-[calc(100%-35%)]"> 
            <table className='w-[90%] mx-auto'>
                <thead className="bg-white sticky top-0 z-10 shadow">
                    <tr className='border-b border-green-500 '>
                        <th className='gris-urbano '>Proveedor</th>
                        <th className='gris-urbano '>Editar / Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {Proveedor.map((item, index) => (
                        <tr key={index} className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
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
        <div className="w-[85%] ml-[11%] flex flex justify-end py-2 mt-1">
          <button className=" text-[17px] h-[95%] bg-green-800 hover:bg-green-700 text-white font-bold  px-4 border-b-4 border-green-800 hover:border-green-700 rounded">
            Agregar contenido +
          </button>
        </div>
    </div>
           
      </div>

  )
}

export default Contenidos