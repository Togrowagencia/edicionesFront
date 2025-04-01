/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TablaUOA from '../Data/ControldeVentas/Data-UOA';
import Frecuentes from './Frecuentes'
import Objetivo from './Objetivo'

const Tabla_TLV = () => {
    const [currentPage] = useState(1);
    const itemsPerPage = 17; // Elementos por página

    // Calcular los índices para paginación
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = TablaUOA.slice(startIndex, endIndex);

    return (
        <div className="flex flex-col items-center ml-[20%]">

            <div className="flex mt-[-8px] gap-5">
                <div className="flex w-[218px] h-[261px] bg-[#FFF] rounded-[10px] justify-center items-center">
                    <div className="flex flex-col items-center justify-center h-full w-full mt-8">
                        <p className="h3 negro text-center">Clientes frecuentes vs nuevos</p>
                        <Frecuentes />
                    </div>
                </div>

                <div className="flex flex-col w-[218px] h-[261px] bg-[#FFF] rounded-[10px] justify-center items-center">
                    <div className="flex flex-col items-center justify-end h-full w-full p-4">
                        <p className="h4 negro text-center">Objetivo mensual de ventas globales</p>
                        <Objetivo />
                    </div>
                </div>
            </div>


            <div className="venta-tienda flex flex-col items-center mt-[38px]">
                <div className='w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px] ml-[57px]'>
                    <p className='h3 negro w-[80%]'>Top libros vendidos</p>
                    <img src="/public/svg/ControldeVentas/librosvendidos.svg" alt="Icono" className=" " />
                </div>
                <div className='w-full h-full justify-center'>
                    <div className='w-[402px] h-[10%] gap-2 border-b border-green-500 flex items-end pb-2 -mt-[15px] mx-auto'>
                        <p className='gris-urbano w-[10%] ml-[15px]'>Top</p>
                        <p className='gris-urbano w-[40%] ml-[7px]'>Libros</p>
                        <p className='gris-urbano w-[43%] ml-[137px]'>Libros vendidos</p>
                    </div>

                    {currentItems.map((item, index) => (
                        <div className='gap-2 flex mb-[20px] relative mt-[10px] ml-[32px]' key={index}>
                            <p className='w-[10%] ml-[15px] textos-bold truncate'>{startIndex + index + 1}</p>
                            <p className='textos-bold w-[90%]  truncate'>{item["libros"]}</p>
                            <p className='textos-bold w-[20%] truncate'>{item["libros-vendidos"]}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Tabla_TLV;
