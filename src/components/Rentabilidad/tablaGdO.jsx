/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DataTablaGdO from '../Data/DataTablaGdO';

const TablaGdO = () => {

    return (
        <div className='w-full h-full justify-center'>
            <table className='w-[1475px] ml-[2%] border-collapse'>
                {/* Encabezados de la tabla */}
                <thead>
                    <tr className='border-b border-grey-500 h-[10%]'>
                        <th className='gris-urbano text-left'>ID</th>
                        <th className='gris-urbano text-left'>ISBN</th>
                        <th className='gris-urbano text-left'>Nombre de la obra</th>
                        <th className='gris-urbano text-left'>Editorial</th>
                        <th className='gris-urbano text-left'>Clasificación</th>
                        <th className='gris-urbano text-left'>Precio de venta</th>
                        <th className='gris-urbano text-left'>Inducción</th>
                        <th className='gris-urbano text-left'>Proveedor</th>
                        <th className='gris-urbano text-left'>Cantidad propia</th>
                        <th className='gris-urbano text-left'>Cantidad en consignación</th>
                        <th className='gris-urbano text-left'>Cantidad total</th>
                    </tr>
                </thead>
                {/* Filas de datos */}
                <tbody>
                    {DataTablaGdO.map((item, index) => (
                        <tr className='mb-[20px] relative mt-[10px]' key={index}>
                            <td className='textos-bold verde-eco truncate py-2'>{item["ID"]}</td>
                            <td className='textos-bold truncate py-2'>{item["ISBN"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Nombre-de-la-obra"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Editorial"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Clasificacion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Precio-de-venta"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Induccion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Proveedor"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad-Propia"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad-en-consignacion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad-total"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default TablaGdO;