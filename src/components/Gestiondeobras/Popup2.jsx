
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputRow from '../dashboard/PopUps/AO/InputRow';
import DataAO from '../Data/DataAO';
import { Checkbox, Select, Drawer } from 'antd';


const Popup2 = ({ isPopupOpen, handlePopupClose }) => {
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

                <div className='flex py-3 mb-9'>
                    {/* Renderizar las filas de campos */}
                    {rows.map((fields, index) => (
                        <InputRow key={index} fields={fields} />
                    ))}
                </div>

                <table className='w-[97%] ml-[2%] border-collapse mb-4'>
                    {/* Encabezados de la tabla */}
                    <thead>
                        <tr className='border-b border-grey-500 h-[10%]'>
                            <th className='gris-elegancia textos text-left'>ID</th>
                            <th className='gris-elegancia textos text-left'>ISBN</th>
                            <th className='gris-elegancia textos text-left'>Nombre de la obra</th>
                            <th className='gris-elegancia textos text-left'>Editorial</th>
                            <th className='gris-elegancia textos text-left'>Clasificación</th>
                            <th className='gris-elegancia textos text-left'>Precio de venta</th>
                            <th className='gris-elegancia textos text-left'>Inducción</th>
                            <th className='gris-elegancia textos text-left'>Proveedor</th>
                            <th className='gris-elegancia textos text-left'>Cantidad propia</th>
                            <th className='gris-elegancia textos text-left'>Cantidad en consignación</th>
                            <th className='gris-elegancia textos text-left'>Cantidad total</th>
                        </tr>
                    </thead>
                    {/* Filas de datos */}
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr className='mb-[20px] relative mt-[10px]' key={index}>
                                <td className='textos-bold verde-eco truncate py-2'>{item["ID"]}</td>
                                <td className='textos-bold truncate py-2'>{item["ISBN"]}</td>
                                <td className='textos-bold truncate py-2'>{item["Nombre de la obra"]}</td>
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
                <div className='flex w-[97%] h-[28%] ml-[2%]'>
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
                                Agregar
                                <img src="/public/svg/gestiondeobras/agregar(2).svg" alt="" />
                            </button>
                            <button className='bg-[#222] blanco p-2 rounded-[5px] h4 flex gap-2'>
                                Cancelar
                                <img src="/public/svg/gestiondeobras/cancelar.svg" alt="" />
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

                <table className='w-[97%] ml-[2%] border-collapse'>
                    {/* Encabezados de la tabla */}
                    <thead>
                        <tr className='border-b border-grey-500 h-[10%]'>
                            <th className='gris-elegancia textos text-left'>ID</th>
                            <th className='gris-elegancia textos text-left'>ISBN</th>
                            <th className='gris-elegancia textos text-left'>Nombre de la obra</th>
                            <th className='gris-elegancia textos text-left'>Proveedor</th>
                            <th className='gris-elegancia textos text-left'>Clasificación</th>
                            <th className='gris-elegancia textos text-left'>Editorial</th>
                            <th className='gris-elegancia textos text-left'>Tipo de movimiento</th>
                            <th className='gris-elegancia textos text-left'>Cantidad total</th>
                            <th className='gris-elegancia textos text-left'>Cantidad en inventario</th>
                            <th className='gris-elegancia textos text-left'>Editar / Eliminar</th>
                        </tr>
                    </thead>
                    {/* Filas de datos */}
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr className='mb-[20px] relative mt-[10px]' key={index}>
                                <td className='textos-bold verde-eco truncate py-2'>{item["ID"]}</td>
                                <td className='textos-bold truncate py-2'>{item["ISBN"]}</td>
                                <td className='textos-bold truncate py-2'>{item["Nombre de la obra"]}</td>
                                <td className='textos-bold truncate py-2'>{item["Proveedor"]}</td>
                                <td className='textos-bold truncate py-2'>{item["Clasificacion"]}</td>
                                <td className='textos-bold truncate py-2'>{item["Editorial"]}</td>
                                <td className='textos-bold truncate py-2'>{item["Tipo-de-movimiento"]}</td>
                                <td className='textos-bold truncate py-2'>{item["Cantidad-total"]}</td>
                                <td className='textos-bold truncate py-2'>{item["Cantidad-en-inventario"]}</td>
                                <td className='flex gap-6 ml-4 mt-2'><img src="/svg/editar.svg" alt="" /><img src="/svg/eliminar.svg" alt="" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex justify-end p-6'>
                    <button className='bg-[#EEE] flex px-2 py-3 textos negro gap-2 justify-center items-center rounded-[5px]'>
                        <img src="/public/svg/popup-ao/NDLO.svg" alt="" />
                        Cantidad a trasladar <span className='negro h4'>{11}</span>
                    </button>
                </div>
                <div className='flex justify-end px-6 gap-5'>
                    <button className='bg-[#00733C] flex p-2 h4 blanco gap-2 justify-center items-center rounded-[5px]'>
                        Confirmar traslado
                        <img src="/svg/gestiondeobras/agregar(2).svg" alt="" />
                    </button>
                    <button className='bg-[#000] flex p-2 h4 blanco gap-2 justify-center items-center rounded-[5px]'>
                        Cancelar
                        <img src="/svg/gestiondeobras/cancelar.svg" alt="" />
                    </button>
                </div>
            </Drawer>
        </div>
    );
};

Popup2.propTypes = {
    isPopupOpen: PropTypes.bool.isRequired,
    handlePopupClose: PropTypes.func.isRequired
};

export default Popup2;