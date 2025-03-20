import React from 'react';
import { Drawer } from 'antd';

const Calculadora = ({
    isOpen,
    onClose,
    total,
    subtotal,
    IVA,
    descuento,
}) => {

    return (

        <Drawer
            placement="left"
            onClose={onClose}
            open={isOpen}
            width={462}
            closable={false}
            bodyStyle={{ padding: "16px" }}
            drawerStyle={{ borderRadius: "10px 10px 10px 10px" }}
        >
            {/* Botón de cierre personalizado */}
            <div
                style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer', }} onClick={onClose}>
                <img src="/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6" />
            </div>

            <div className='grid grid-cols-2 gap-4 py-10'>

                {/* Columna numero 1 */}
                <div className="flex flex-col gap-4 bg-[#EEE] py-10 px-6 rounded-[10px]">
                    <p className="textos-bold gris-elegancia">
                        Subtotal
                    </p>
                    <p className="h4 negro">
                        ${subtotal?.toLocaleString()}
                    </p>
                    <p className="textos-bold gris-elegancia">
                        IVA 19%
                    </p>
                    <p className="h4 negro">
                        ${IVA?.toLocaleString()}
                    </p>
                    <p className="textos-bold gris-elegancia">
                        Descuento
                    </p>
                    <p className="h4 negro">
                        ${descuento?.toLocaleString()}
                    </p>
                    <p className="textos-bold gris-elegancia">
                        Total
                    </p>
                    <p className="h4 negro">
                        ${total?.toLocaleString()}
                    </p>
                    <p className="h4 verde-corporativo">
                        Devolver
                    </p>
                    <img src='/svg/PuntodeVenta/puntoscalculadora.svg' alt="" className='absolute mt-[70%] ml-[-3.5%]' />
                </div>


                {/* Columna numero 2 */}
                <div className="flex flex-col gap-4 ">
                    <div className='flex w-full justify-center'>
                        <div className='flex bg-[#00733C] w-auto py-1 px-2 gap-2 rounded-[3px]'>
                            <img src='/svg/PuntodeVenta/efectivo-selected.svg' alt="" className='' />
                            <h3 className="blanco textos">
                                Efectivo
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <input
                            type="number"
                            className="w-full flex h-10 border h3 text-center gris-urbano"
                            placeholder="$1.000.000"
                        />
                    </div>
                    <div className='flex w-full justify-center'>
                        <button className="w-[70%] bg-[#00733C] blanco p-2 rounded h4 rounded-[10px]">
                            Pagar ahora
                        </button>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default Calculadora;