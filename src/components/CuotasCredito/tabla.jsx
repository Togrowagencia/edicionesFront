/* eslint-disable no-unused-vars */
import React from 'react';
import Data from '../Data/CuotasCredito/Data';

const Tabla = () => {

    return (
        <div className='w-full h-full justify-center py-5'>
            <table className='w-[1475px] ml-[2%] border-collapse'>
                {/* Encabezados de la tabla */}
                <thead>
                    <tr className='border-b border-grey-500 h-[10%]'>
                        <th className='gris-urbano textos text-left'>Fecha</th>
                        <th className='gris-urbano textos text-left'>Nombre</th>
                        <th className='gris-urbano textos text-left'>Identificación</th>
                        <th className='gris-urbano textos text-left'>N° Factura</th>
                        <th className='gris-urbano textos text-left'>Pago en efectivo</th>
                        <th className='gris-urbano textos text-left'>Pago por banco</th>
                        <th className='gris-urbano textos text-left'>Pago con tarjeta de credito</th>
                        <th className='gris-urbano textos text-left'>Pago con tarjeta de debito</th>
                        <th className='gris-urbano textos text-left'>Vendedor</th>
                        <th className='gris-urbano textos text-left'>ID creditos pagos</th>
                    </tr>
                </thead>
                {/* Filas de datos */}
                <tbody>
                    {Data.map((item, index) => ( 
                        <tr className='mb-[20px] relative mt-[10px]' key={index}>
                            <td className='textos-bold truncate py-2'>{item["Fecha"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Nombre"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Identificacion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["N-Factura"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Pago-en-efectivo"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Pago-por-banco"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Pago-con-tarjeta-de-credito"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Pago-con-tarjeta-de-debito"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Vendedor"]}</td>
                            <td className='textos-bold truncate py-2'>{item["ID-creditos-pagos"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Tabla;