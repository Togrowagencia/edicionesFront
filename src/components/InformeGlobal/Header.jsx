/* eslint-disable no-unused-vars */
import React from 'react'
import { DatePicker } from 'antd';
import { useState } from 'react';
import IconNotificacion from '../inputs/IconNotificacion';
import IconReportes from '../inputs/IconReportes';
import { CheckboxWithLabel } from '../inputs/CheckboxWithLabel';

const Header = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({
        obraPropia: false,
        obraConsignacion: false
    });

    const handleCheckboxChange = (name) => {
        setSelectedCheckboxes(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const [codigo, setCodigo] = useState('');
    const [isbn, setIsbn] = useState('');
    const [nombreObra, setNombreObra] = useState('');
    const [autor, setAutor] = useState('');

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (


        <div className='w-full h-[10%] flex items-center justify-start gap-[41%] px-4 -ml-[1%]'>

            <div className='w-[30%] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-full'>
                <img src="/svg/header/fecha.svg" alt="" />
                <DatePicker onChange={onChange} placeholder='Rango de fecha' className='custom-datepicker h4' />
            </div>
            
            <div>
            <div className='flex'>
                <div className='flex items-center gap-4 mt-3 h-[70%] w-full'>
                    <CheckboxWithLabel
                        label="Total"
                        checked={selectedCheckboxes.obraPropia}
                        onChange={() => handleCheckboxChange('obraPropia')}
                        className="mr-2"
                    />
                    <CheckboxWithLabel
                        label="Por venta"
                        checked={selectedCheckboxes.obraConsignacion}
                        onChange={() => handleCheckboxChange('obraConsignacion')}
                        className="mr-2"
                    />
                </div>
            
                <div className='w-[50%] px-4 flex gap-4 items-center h-[50%]'>
                    <IconReportes />
                    <img src="/svg/header/descarga.svg" alt="" />
                    <IconNotificacion />
                </div>
                </div>
            </div>

        </div>

    )
}

export default Header;
