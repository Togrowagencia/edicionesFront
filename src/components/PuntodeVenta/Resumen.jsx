/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Data from '../Data/Cotizaciones/Data';
import Calculadora from './Calculadora'

const Resumen = () => {
    const [currentPage] = useState(1);
    const itemsPerPage = 10;

    const [selected, setSelected] = useState(null);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleMethodClick = (methodId) => {
        setSelected(methodId);
        if (methodId === 'cash') {
            setIsDrawerOpen(true);
        }
    };

    // Lista de métodos de pago con identificadores únicos
    const paymentMethods = [
        { id: "debit", img: "/svg/PuntodeVenta/visa.svg", imgSelected: "/svg/PuntodeVenta/visa-selected.svg", label: "Tarjeta débito" },
        { id: "credit", img: "/svg/PuntodeVenta/credito.svg", imgSelected: "/svg/PuntodeVenta/credito-selected.svg", label: "Tarjeta crédito" },
        { id: "cash", img: "/svg/PuntodeVenta/efectivo.svg", imgSelected: "/svg/PuntodeVenta/efectivo-selected.svg", label: "Efectivo" },
        { id: "qr", img: "/svg/PuntodeVenta/qr.svg", imgSelected: "/svg/PuntodeVenta/qr-selected.svg", label: "Código QR" },
        { id: "more", img: "/svg/PuntodeVenta/opciones.svg", imgSelected: "/svg/PuntodeVenta/opciones-selected.svg", label: "Más opciones" },
    ];

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

    const IVA = subtotal * 0.19;
    const descuento = coupon === 'cupon123' ? subtotal * 0.10 : 0;
    const total = subtotal + IVA - descuento;

    // Calcular la cantidad total de libros seleccionados
    const totalLibros = Object.values(quantities).reduce((acc, val) => acc + val, 0);

    return (
        <div className="flex">
            <div className="flex !max-h-[845px] flex-col mt-[4%] items-center rounded-[10px] bg-white w-[100%] h-[100%] flex-shrink-0 sombra border-2 border-[#5FB868]">
                <div className='w-[83%] h-[10%] items-center gap-3 flex mb-[20px] relative mt-[5%]'>
                    <p className='h3 verde-corporativo'>Resumen de venta</p>
                    <img src="/public/svg/ControldeVentas/CdV.svg" alt="Icono" />
                </div>

                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-[83%] h-[10%] gap-2 flex flex-col'>
                        <p className='gris-urbano w-[100%]'>Cliente</p>
                        <p className='negro w-[100%]'>Juan Manuel</p>
                        <p className='gris-urbano w-[100%]'>Items comprados</p>
                    </div>
                </div>

                <div className='w-full px-9 h-[10%] justify-center max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-gray-700'>
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
                                        <span className="textos">{quantities[item.id]}</span>
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
                    <p className="textos-bold gris-elegancia flex justify-between">
                        <span>IVA 19%</span>
                        <span className="verde-corporativo font-bold">${IVA.toLocaleString()}</span>
                    </p>
                    <div className="flex textos-bold gris-elegancia justify-between items-center">
                        <span>Cupón de descuento</span>
                        <input
                            type="text"
                            className="bg-gray-100 px-2 py-1 w-20 h-5 verde-corporativo rounded"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                    </div>
                    {descuento > 0 && (
                        <p className="textos-bold gris-elegancia flex justify-between">
                            <span>Descuento</span>
                            <span className="verde-corporativo font-bold">10%</span>
                        </p>
                    )}
                    <hr className="my-2" />
                    <p className=" flex justify-between h3">
                        <span className='gris-elegancia'>Total</span>
                        <span className="negro">${total.toLocaleString()}</span>
                    </p>

                    {/* botones de opciones de pago */}
                    <div>
                        <p className='gris-elegancia textos-bold mb-2'>Metodo de pago</p>
                        <div className="flex flex-wrap gap-2">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    className={`w-auto textos h4 p-2 rounded flex justify-center gap-1 transition-all duration-200 ${selected === method.id ? "bg-[#00733C] blanco" : "bg-[#DADADA] gris-urbano"}`}
                                    onClick={() => handleMethodClick(method.id)}
                                >
                                    <img
                                        src={selected === method.id ? method.imgSelected : method.img}
                                        className="cursor-pointer"
                                    />
                                    {method.label}
                                </button>
                            ))}
                        </div>

                        {/* Calculadora */}
                        
                        <Calculadora
                            isOpen={isDrawerOpen}
                            onClose={() => setIsDrawerOpen(false)}
                            total={total}
                            subtotal={subtotal}
                            IVA={IVA}  
                            descuento={descuento}
                        />
                    </div>

                    <button className="w-full bg-green-700 blanco h4 py-2 rounded mt-4 flex justify-center gap-3">
                        <img src='/svg/PuntodeVenta/generarventa.svg' alt="" className="cursor-pointer" />
                        Generar venta
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Resumen;
