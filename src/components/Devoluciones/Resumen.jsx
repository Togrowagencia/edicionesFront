/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Data from '../Data/Cotizaciones/Data';

const Resumen = () => {
    const [currentPage] = useState(1);
    const itemsPerPage = 10;

    // Calcular los índices para paginación
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Data.slice(startIndex, endIndex);

    // Estado para manejar la cantidad de libros seleccionados por cada item
    const [quantities, setQuantities] = useState(
        currentItems.reduce((acc, item) => {
            acc[item.id] = 1; // Inicializa cada libro con una cantidad de 1
            return acc;
        }, {})
    );

    // Estado para el cupón
    const [coupon, setCoupon] = useState('');

    // Función para actualizar la cantidad de libros
    const handleQuantityChange = (id, change) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, prev[id] + change) // Evita cantidades menores a 1
        }));
    };

    // Calcular el total de la compra
    const subtotal = currentItems.reduce((total, item) => {
        return total + item.PreciodeVenta * quantities[item.id];
    }, 0);

    const total = subtotal;

    // Calcular la cantidad total de libros seleccionados
    const totalLibros = Object.values(quantities).reduce((acc, val) => acc + val, 0);

    return (
        <div className="flex">
            <div className="flex !min-h-[845px] flex-col mt-[4%] items-center rounded-[10px] bg-white w-full h-full flex-shrink-0 sombra border-2 border-[#5FB868]">
                <div className='w-[83%] h-[10%] items-center gap-3 flex mb-[20px] relative mt-[5%]'>
                    <p className='h3 verde-corporativo'>Resumen del pedido</p>
                    <img src="/public/svg/Pedidos/pedidos (2).svg" alt="Icono" />
                </div>

                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-[83%] h-[10%] gap-2 flex flex-col'>
                        <p className='gris-elegancia textos-bold w-full'>N° Orden</p>
                        <p className='gris-elegancia textos-bold w-full'>Items de la orden</p>
                    </div>
                </div>

                <div className='w-full px-9 h-[10%] justify-center'>
                    {currentItems.map((item, index) => (
                        <div className='w-full flex mb-[20px] relative mt-[10px] border-b pb-2' key={item.id}>
                            <div className="gap-4 flex relative w-full">
                                <img src={item.imagenlibro} alt="Libro" className="w-[32%] cursor-pointer" />
                                <div className="flex flex-col w-full !gap-y-[3%] mt-[3%]">
                                    <p className="w-full textos negro">{item.Nombredelaobra}</p>
                                    <p className="h4 w-full verde-corporativo flex items-center gap-2">
                                        ${item.PreciodeVenta}
                                    </p>

                                    {/* Controles de cantidad */}
                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, -1)}
                                            className="bg-gray-100 h-[45%] pb-[12%] w-[10%] rounded"
                                        >
                                            -
                                        </button>
                                        <span className="font-bold">{quantities[item.id]}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, 1)}
                                            className="bg-gray-100 h-[45%] w-[10%] rounded"
                                        >
                                            +
                                        </button>
                                    </div>

                                </div>
                                <div className='flex flex-col items-end py-2 justify-between'>
                                    <img src='/public/svg/PuntodeVenta/eliminarr.svg' alt="Libro" className="cursor-pointer" />
                                    <p className="textos-bold w-full verde-corporativo flex mt-2">
                                        ${item.PreciodeVenta * quantities[item.id]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Resumen Final */}
                <div className="w-full bg-white p-5 border-3 gap-y-2 flex flex-col rounded-b-lg">
                    <p className="textos-bold gris-elegancia flex justify-between">
                        <span>Cantidad de obras compradas ({totalLibros})</span>
                        <span className="verde-corporativo font-bold">${subtotal.toLocaleString()}</span>
                    </p>
                    <hr className="my-2" />
                    <p className=" flex justify-between h3">
                        <span className='gris-elegancia'>Total</span>
                        <span className="negro">${total.toLocaleString()}</span>
                    </p>
                    <button className="w-full bg-green-700 blanco h4 py-[3%] rounded-[10px] mt-4">
                        Aceptar pedido
                    </button>
                    <button className="w-full bg-red-600 blanco h4 py-[3%] rounded-[10px]">
                        Rechazar pedido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resumen;
