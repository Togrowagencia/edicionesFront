/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Data from '../Data/InformeGlobal/Data';

const Tabla = () => {
    const [currentPage] = useState(1);
    const itemsPerPage = 17; // Elementos por página

    // Calcular los índices para paginación
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Data.slice(startIndex, endIndex);

    return (
        <div className='w-full h-[577px] justify-center'>
            <table className='w-[1475px] mx-[1%] my-[2%] border-collapse'>
                {/* Encabezados de la tabla */}
                <thead>
                    <tr className='border-b border-grey-500 h-[10%]'>
                        <th className='gris-urbano textos text-left'>ID</th>
                        <th className='gris-urbano textos text-left'>ISBN</th>
                        <th className='gris-urbano textos text-left'>Nombre de la obra</th>
                        <th className='gris-urbano textos text-left'>Proveedor</th>
                        <th className='gris-urbano textos text-left'>Precio de venta</th>
                        <th className='gris-urbano textos text-left'>Cantidad Central</th>
                        <th className='gris-urbano textos text-left'>Cantidad San diego</th>
                        <th className='gris-urbano textos text-left'>Cantidad Viva laures</th>
                        <th className='gris-urbano textos text-left'>Cantidad Monterrey</th>
                        <th className='gris-urbano textos text-left'>Cantidad Mayorca ET1</th>
                        <th className='gris-urbano textos text-left'>Cantidad Mayorca ET2</th>
                    </tr>
                </thead>
                {/* Filas de datos */}
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr className='mb-[20px] relative mt-[10px]' key={index}>
                            <td className='textos-bold verde-eco truncate py-2'>{item["ID"]}</td>
                            <td className='textos-bold truncate py-2'>{item["ISBN"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Nombre de la obra"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Proveedor"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Precio-de-venta"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad Central"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad San Diego"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad Vivo"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad Monterrey"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad Mayorca ET1"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad Mayorca ET2"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Tabla;