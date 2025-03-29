/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; 
import Data from '../Data/Historico/Data';
import Chekboxs from './chekboxs'
import Detalle from './Detalle'

const Tabla = () => {
    const [openDrawer1, setOpenDrawer1] = useState(false);

    const showDrawer1 = () => {
        setOpenDrawer1(true);
    };

    const onCloseDrawer1 = () => {
        setOpenDrawer1(false);
    };

    return (
        <div className='w-full h-full justify-center py-5'>
            <table className='w-[1475px] ml-[2%] border-collapse'>
                {/* Encabezados de la tabla */}
                <thead>
                    <tr className='border-b border-grey-500 h-[10%]'>
                        <th className='gris-urbano textos text-left'>N° Factura</th>
                        <th className='gris-urbano textos text-left'>Fecha venta</th>
                        <th className='gris-urbano textos text-left'>Nombre</th>
                        <th className='gris-urbano textos text-left'>Apellidos</th>
                        <th className='gris-urbano textos text-left'>Identificación</th>
                        <th className='gris-urbano textos text-left'>Retefuente</th>
                        <th className='gris-urbano textos text-left'>Total</th>
                        <th className='gris-urbano textos text-left'>Subtotal</th>
                        <th className='gris-urbano textos text-left'>Vendedor</th>
                        <th className='gris-urbano textos text-left'>Punto de Venta</th>
                        <th className='gris-urbano textos text-left'>Anulada</th>
                        <th className='gris-urbano textos text-left'>Editar</th>
                    </tr>
                </thead>
                {/* Filas de datos */}
                <tbody>
                    {Data.map((item, index) => (
                        <tr className='mb-[20px] relative mt-[10px]' key={index}>
                            <td className='textos-bold truncate py-2'>{item["N-Factura"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Fecha-venta"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Nombre"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Apellidos"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Identificacion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Retefuente"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Total"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Subtotal"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Vendedor"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Punto-de-Venta"]}</td>
                            <td className='py-2'><Chekboxs /></td>
                            <td onClick={showDrawer1} className='py-2 cursor-pointer'><img src="/svg/editar.svg" alt="" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Detalle isOpen={openDrawer1} OnClose={onCloseDrawer1} />
        </div>

    );
};

export default Tabla;