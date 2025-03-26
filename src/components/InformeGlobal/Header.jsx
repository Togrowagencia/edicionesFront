/* eslint-disable no-unused-vars */
import React from 'react'
import { DatePicker } from 'antd';
import { useState } from 'react';
import IconNotificacion from '../inputs/IconNotificacion';
import IconReportes from '../inputs/IconReportes';
import { CheckboxWithLabel } from '../inputs/CheckboxWithLabel';

const Header = () => {
    const [codigo, setCodigo] = useState('');
    const [isbn, setIsbn] = useState('');
    const [nombreObra, setNombreObra] = useState('');
    const [autor, setAutor] = useState('');

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (


        <div className='w-full h-[10%] flex items-center justify-start gap-[58%] px-4 -ml-[1%]'>

            <div className='w-[30%] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%]'>
                <img src="/svg/header/fecha.svg" alt="" />
                <DatePicker onChange={onChange} placeholder='Rango de fecha' className='custom-datepicker h4' />
            </div>

            <div>
                <div className='w-[50%] px-4 flex gap-4 items-center h-[50%] ml-[22%]'>
                    <IconReportes />
                    <img src="/svg/header/descarga.svg" alt="" />
                    <IconNotificacion />
                </div>
            </div>

        </div>

    )
}

export default Header;
