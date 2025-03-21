/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import PropTypes from 'prop-types';
import InputRow from '../dashboard/PopUps/AO/InputRow';
import DataAO from '../Data/DataAO';

const Popup = ({ isPopupOpen, handlePopupClose }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Verify data is loaded
        console.log('DataAO:', DataAO);
        setTableData(DataAO || []);
    }, []);
    // Definir las filas de campos
    const rows = [
        [
            { iconSrc: "/svg/header/buscar.svg", placeholder: "ISBN" },
            { placeholder: "Punto de venta", hasArrow: true },
        ]
    ];

    return (
        <div style={{ position: 'relative' }}>
            <Drawer
                placement="right"
                onClose={handlePopupClose}
                open={isPopupOpen}
                width={1483}
                closable={false}
                headerStyle={{ display: 'none' }}
                drawerStyle={{ borderRadius: '10px 10px 10px 10px', height: '100%' }}
            >
                {/* Botón de cierre personalizado */}
                <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }} onClick={handlePopupClose}>
                    <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6 mt-[10%]" />
                </div>

                <div className='flex py-3'>
                {/* Renderizar las filas de campos */}
                {rows.map((fields, index) => (
                    <InputRow key={index} fields={fields} />
                ))}
                
                <button className='flex bg-[#00733C] textos-bold blanco rounded-[3px] p-2 gap-2 mt-1'>
                    Reubicar Masivamente
                    <img src="/svg/agregarmasi.svg" alt="" />
                    </button>
                </div>

                <table className='w-[95%] ml-[2%] border-collapse'>
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
                        <th className='gris-urbano text-left'>Inducción</th>
                        <th className='gris-urbano text-left'>Proveedor</th>
                        <th className='gris-urbano text-left'>Cantidad propia</th>
                        <th className='gris-urbano text-left'>Cantidad en consignación</th>
                        <th className='gris-urbano text-left'>Cantidad total</th>
                    </tr>
                </thead>
                {/* Filas de datos */}
                <tbody>
                    {tableData.map((item, index) => (
                        <tr className='mb-[20px] relative mt-[10px]' key={index}>
                            <td className='textos-bold verde-eco truncate py-2'>{item["ID"]}</td>
                            <td className='textos-bold truncate py-2'>{item["ISBN"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Nombre-de-laobra"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Editorial"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Clasificacion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Precio-de-venta"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Costo-de-compra"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Induccion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Proveedor"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad-Propia"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad-en-consignacion"]}</td>
                            <td className='textos-bold truncate py-2'>{item["Cantidad-total"]}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </Drawer>
        </div>
    );
};

Popup.propTypes = {
    isPopupOpen: PropTypes.bool.isRequired,
    handlePopupClose: PropTypes.func.isRequired
};

export default Popup;