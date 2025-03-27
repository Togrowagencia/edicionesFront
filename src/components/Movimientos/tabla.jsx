/* eslint-disable no-unused-vars */
import React from 'react';
import Data from '../Data/Movimientos/Data';
import Chekboxs from './chekboxs'

const Tabla = () => {

    return (
        <div className='w-full h-full justify-center py-5'>
            <table className='w-[1475px] ml-[2%] border-collapse'>
                {/* Encabezados de la tabla */}
                <thead>
                    <tr className='border-b border-grey-500 h-[10%]'>
                        <th className='gris-urbano textos text-left'>ID</th>
                        <th className='gris-urbano textos text-left'>ISBN</th>
                        <th className='gris-urbano textos text-left'>ID movimiento</th>
                        <th className='gris-urbano textos text-left'>Nombre de la obra</th>
                        <th className='gris-urbano textos text-left'>Descripción</th>
                        <th className='gris-urbano textos text-left'>Punto de venta</th>
                        <th className='gris-urbano textos text-left'>Fecha</th>
                        <th className='gris-urbano textos text-left'>Obra en consignacion</th>
                    </tr>
                </thead>
                {/* Filas de datos */}
                <tbody>
                    {Data.map((item, index) => ( 
                        <tr className='mb-[20px] relative mt-[10px]' key={index}>
                            <td className='textos-bold verde-eco truncate py-2'>{item["ID"]}</td>
                            <td className='textos-bold truncate py-2'>{item["ISBN"]}</td>
                            <td className='textos-bold truncate py-2'>{item["ID-movimiento"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Nombre-de-la-obra"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Descripcion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Punto-de-venta"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Fecha"]}</td>
                            <td className='py-2'><Chekboxs/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Tabla;