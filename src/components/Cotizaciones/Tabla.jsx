/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Data from '../Data/Cotizaciones/Data'; 

const Tabla = () => {
    const [currentPage] = useState(1);
    const itemsPerPage = 17; // Elementos por página 

    // Calcular los índices para paginación
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Data.slice(startIndex, endIndex);  

    return (
        <div className='w-[20%] h-[10%] justify-center'>
            {/* Encabezados de la tabla */}
            <div className='w-[1385px] h-[10%] border-b border-grey-500 flex items-end pb-2 mx-auto ml-[2%]'>
                <p className='gris-urbano w-[5%]'>ID</p> 
                <p className='gris-urbano w-[10%]'>ISBN</p> 
                <p className='gris-urbano w-[25%] ml-[1%]'>Nombre de la obra</p> 
                <p className='gris-urbano w-[12%]'>Editorial</p> 
            </div>

            {/* Filas de datos */}
            {currentItems.map((item, index) => (
                <div className='w-[1385px] flex mb-[20px] relative mt-[10px] mx-auto ml-[2%]' key={index}>

                </div>
            ))}
        </div>
    );
};

export default Tabla;