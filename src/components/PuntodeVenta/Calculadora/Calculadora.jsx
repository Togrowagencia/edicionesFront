import React, { useState } from 'react';
import { Drawer } from 'antd';
import Carrusel from "./Carrusel.jsx"


const Calculadora = ({
    isOpen,
    onClose,
    total,
    subtotal,
    IVA,
    descuento,
}) => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleDelete = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString()); // Evalúa la expresión (solo suma y resta)
        } catch {
            setInput("Error");
        }
    };

    return (
        <Drawer
            className="drawer-calculadora"
            placement="left"
            onClose={onClose}
            open={isOpen}
            width={462}
            closable={false}
            bodyStyle={{ padding: "16px" }}
            drawerStyle={{ borderRadius: "10px 10px 10px 10px"}}
        >
            {/* Botón de cierre personalizado */}
            <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }} onClick={onClose}>
                <img src='/svg/PuntodeVenta/cerrarcal.svg' alt="" className="cursor-pointer" />
            </div>

            <div className='grid grid-cols-2 gap-4 py-10'>
                {/* Columna número 1 */}
                <div className="flex flex-col gap-4 bg-[#EEE] py-10 px-6 rounded-[10px]">
                    <p className="textos-bold gris-elegancia">Subtotal</p>
                    <p className="h4 negro">${subtotal?.toLocaleString()}</p>
                    <p className="textos-bold gris-elegancia">IVA 19%</p>
                    <p className="h4 negro">${IVA?.toLocaleString()}</p>
                    <p className="textos-bold gris-elegancia">Descuento</p>
                    <p className="h4 negro">${descuento?.toLocaleString()}</p>
                    <p className="textos-bold gris-elegancia">Total</p>
                    <p className="h4 negro">${total?.toLocaleString()}</p>
                    <p className="h4 verde-corporativo">Devolver</p>
                    <img src='/svg/PuntodeVenta/puntoscalculadora.svg' alt="" className='mt-[100%] ml-[-3.5%]' />
                </div>

                {/* Columna número 2 */}
                <div className="flex flex-col gap-2">
                    <div className='flex w-full justify-center'>
                        <div className='flex bg-[#00733C] w-auto py-1 px-2 gap-2 rounded-[3px]'>
                            <img src='/svg/PuntodeVenta/efectivo-selected.svg' alt="" />
                            <h3 className="blanco textos">Efectivo</h3>
                        </div>
                    </div>

                    {/* Input */}
                    <input
                        type="text"
                        value={input}
                        readOnly
                        placeholder='$1.000.000'
                        className="w-full text-center h3 gris-urbano"
                    /> 
                    
                    {/* Carrusel */}
                    <Carrusel className='flex flex-row'/>

                    {/* Teclado numérico */}
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                            <button
                                key={num}
                                onClick={() => handleClick(num.toString())}
                                className="p-4 h2"
                            >
                                {num}
                            </button>
                        ))}
                        <button onClick={() => handleClick("+")} className="negro p-4 h2">
                            +
                        </button>
                        <button onClick={() => handleClick("-")} className="negro p-4 h2">
                            -
                        </button>
                        <button onClick={handleDelete} className="negro p-4">
                        <img src='/svg/PuntodeVenta/borrarcal.svg' alt="" className="cursor-pointer" />
                        </button>
                    </div>
                    <div className='flex w-full justify-center'>
                        <button onClick={handleCalculate} className="w-[70%] bg-[#00733C] blanco p-2 rounded h4 rounded-[10px]">
                            Pagar ahora
                        </button>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default Calculadora;
