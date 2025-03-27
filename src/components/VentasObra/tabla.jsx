/* eslint-disable no-unused-vars */
import React from 'react';
import Data from '../Data/VentasObra/Data';

const Tabla = () => {

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
                        <th className='gris-urbano text-left'>Costo de compra</th>
                        <th className='gris-urbano text-left'>Fecha venta</th>
                        <th className='gris-urbano text-left'>Proveedor</th>
                        <th className='gris-urbano text-left'>N° Factura</th>
                        <th className='gris-urbano text-left'>Vendido</th>
                        <th className='gris-urbano text-left'>Cantidad total</th>
                    </tr>
                </thead>
                {/* Filas de datos */}
                <tbody>
                    {Data.map((item, index) => ( 
                        <tr className='mb-[20px] relative mt-[10px]' key={index}>
                            <td className='textos-bold verde-eco truncate py-2'>{item["ID"]}</td>
                            <td className='textos-bold truncate py-2'>{item["ISBN"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Nombre-de-la-obra"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Editorial"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Clasificacion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Precio-de-venta"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Costo-de-compra"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Fecha-venta"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Proveedor"]}</td>
                            <td className='textos-bold truncate py-2'>{item["N-Factura"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Vendido"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad-total"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Tabla;