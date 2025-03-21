/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DataTablaGdO from '../Data/DataTablaGdO';
import Popup from './Popup';
import Popup2 from './Popup2';

const TablaGdO = () => {
    const [openDrawer1, setOpenDrawer1] = useState(false);
    const [openDrawer2, setOpenDrawer2] = useState(false);
    const [currentPage] = useState(1);
    const itemsPerPage = 17; // Elementos por página

    // Calcular los índices para paginación
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = DataTablaGdO.slice(startIndex, endIndex);

    const showDrawer1 = () => {
        setOpenDrawer1(true);
    };
    
    const showDrawer2 = () => {
        setOpenDrawer2(true); // Changed from setOpenDrawer1 to setOpenDrawer2
    };

    const onCloseDrawer1 = () => {
        setOpenDrawer1(false);
    };
    
    const onCloseDrawer2 = () => {
        setOpenDrawer2(false); // Changed from setOpenDrawer1 to setOpenDrawer2
    };


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
                    {currentItems.map((item, index) => (
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
                            <td>
                                <img onClick={showDrawer1} src="/public/svg/editar.svg" alt="Imagen" className='cursor-pointer' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-end py-4 mr-[-54%]'>
                <button onClick={showDrawer2} className='flex bg-[#00733C] textos-bold blanco rounded-[3px] p-2 gap-2 mt-1'>
                    Reubicar Masivamente
                    <img src="/svg/agregarmasi.svg" alt="" />
                </button>
            </div>
            <Popup isPopupOpen={openDrawer1} handlePopupClose={onCloseDrawer1} />
            <Popup2 isPopupOpen={openDrawer2} handlePopupClose={onCloseDrawer2} />
        </div>

    );
};

export default TablaGdO;