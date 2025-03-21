/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputRow from '../dashboard/PopUps/AO/InputRow';
import DataAO from '../Data/DataAO';
import { Checkbox, Drawer } from 'antd';


const Popup = ({ isPopupOpen, handlePopupClose }) => {
    const [tableData, setTableData] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [selectedItems, setSelectedItems] = useState({
        ingreso: false,
        salida: false
    });

    const handleQuantityChange = (id, change) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + change)
        }));
    };

    useEffect(() => {
        console.log('DataAO:', DataAO);
        setTableData(DataAO || []);
        // Initialize quantities after data is loaded
        if (DataAO && DataAO.length > 0) {
            const initialQuantities = {};
            DataAO.forEach(item => {
                initialQuantities[item.ID] = 1;
            });
            setQuantities(initialQuantities);
        }
    }, []);

    const checkboxOptions = [
        { id: 'ingreso', label: 'Ingreso' },
        { id: 'salida', label: 'Salida' },
        { id: 'aconsignacion', label: 'Propio a consignación' },
        { id: 'apropia', label: 'Consignación a propio' },
    ];
    const handleCheckboxChange = (id) => {
        setSelectedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
    useEffect(() => {
        // Verify data is loaded
        console.log('DataAO:', DataAO);
        setTableData(DataAO || []);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <Drawer
                placement="right"
                onClose={handlePopupClose}
                open={isPopupOpen}
                width={1483}
                closable={false}
                rootClassName='drawer-librosolo'
                headerStyle={{ display: 'none' }}
                drawerStyle={{ borderRadius: '10px 10px 10px 10px'}}
            >
                {/* Botón de cierre personalizado */}
                <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }} onClick={handlePopupClose}>
                    <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6 mt-[10%]" />
                </div>

                <div className='flex w-[97%] h-[28%] ml-[2%] py-[4%]'>
                    <div className='w-[44%] h-full flex flex-col gap-[2px]'>
                        <p className='verde-corporativo h3 mb-2'>Cien años de soledad</p>
                        <p className="textos gris-urbano">
                            ISBN <span className="mx-1 negro textos-bold">{1122334455667}</span>
                        </p>
                        <p className="textos gris-urbano">
                            Inventario <span className="mx-1 negro textos-bold">{100}</span> Consignación <span className="mx-1 negro textos-bold">{100}</span>
                        </p>
                        <div className="flex items-center gap-3">
                            <p className='textos gris-urbano'>Cantidad de obras</p>
                            <button
                                onClick={() => handleQuantityChange(1122334455667, -1)}
                                className="bg-gray-100 h-[5%] py-2 w-[5%] rounded items-center justify-center flex"
                            >
                                -
                            </button>
                            <span className="textos">{quantities[1122334455667] || 1}</span>
                            <button
                                onClick={() => handleQuantityChange(1122334455667, 1)}
                                className="bg-gray-100 h-[5%] py-2 w-[5%] rounded items-center justify-center flex"
                            >
                                +
                            </button>
                        </div>
                        <p className='textos negro-puro mt-2'>Define El Tipo De Movimiento Para Estas Obras:</p>

                        {/* Checkboxes */}
                        <div className="flex gap-2">
                            {checkboxOptions.map((option) => (
                                <div key={option.id} className="flex items-center gap-2">
                                    <Checkbox
                                        checked={selectedItems[option.id]}
                                        onChange={() => handleCheckboxChange(option.id)}
                                        className="custom-checkbox"
                                    />
                                    <span className="textos gris-urbano">{option.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className='flex gap-3  py-2'>
                            <button className='bg-[#00733C] h4 p-2 rounded-[5px] blanco flex gap-2'>
                                Aceptar
                                <img src="/public/svg/gestiondeobras/agregar(2).svg" alt="" className='w-4'/>
                            </button>
                            <button className='bg-[#222] blanco p-2 rounded-[5px] h4 flex gap-2'>
                                Cancelar
                                <img src="/public/svg/gestiondeobras/cancelar.svg" alt=""  className='w-4'/>
                            </button>
                        </div>

                    </div>
                    <div className="w-[872px] h-[191px] flex mt-4">
                        <textarea
                            className="w-full h-full bg-[#EEE] rounded-[10px] text-start p-2 resize-none textos-peques gris-urbano"
                            placeholder='Escribe aqui el por que del movimiento'
                        ></textarea>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

Popup.propTypes = {
    isPopupOpen: PropTypes.bool.isRequired,
    handlePopupClose: PropTypes.func.isRequired
};

export default Popup;