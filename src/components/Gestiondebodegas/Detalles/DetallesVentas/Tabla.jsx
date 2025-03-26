/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DataTablaGdO from "../../../Data/DataTablaGdO";
import Fecha from "../../../../../public/svg/DetallesVentas/fecha.jsx"
import Tablas from "./Tablas.jsx"
import { useNavigate } from 'react-router-dom';

const Tabla = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(1);
  const itemsPerPage = 17; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DataTablaGdO.slice(startIndex, endIndex);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(
    "Tienda florida parque comercial"
  );

  const stores = [
    "Tienda florida parque comercial",
    "Tienda centro",
    "Tienda norte",
    "Tienda sur",
  ];

  const handleSelect = (store) => {
    setSelectedStore(store);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative inline-block text-left mt-[-3%]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h3 flex py-2 items-center"
        >
          {selectedStore}
          <span className="ml-1">▼</span>
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-5 w-48 bg-white border rounded shadow-lg z-50">
            {stores.map((store, index) => (
              <button
                key={index}
                onClick={() => handleSelect(store)}
                className="block w-full text-left px-4 py-2 hover:bg-green-400"
              >
                {store}
              </button>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <img src="/svg/DetallesVentas/ventasmes.svg" alt="" />
          <p className="verde-corporativo h3">Ventas del mes:</p>
        </div>
        <div className="flex gap-2">
          <img src="/svg/DetallesVentas/metames.svg" alt="" />
          <p className="verde-eco h4">Meta de ventas:</p>
          <img src="/svg/DetallesVentas/editarmeta.svg" alt="" />
        </div>
      </div>
      <div className="relative w-full my-2 flex gap-[14px] h-full">

        <div className="w-full rounded-[10px] bg-[#d9b030] bg-cover bg-center relative sombra h-full p-6 flex flex-col gap-1" style={{ backgroundImage: "url('/images/balance.png')" }}>
          <p className="h4">Balance de la tienda</p>
          <p className="textos-bold mt-[10%]">Ingresos totales</p>
          <p className="h2">654.541</p>
          <div className="bg-white w-[90%] rounded-[5px] flex gap-2 py-1 px-2 items-center">
            <Fecha />
            <p className="w-full">La tienda tiene un balance positivo de</p>
            <div className="flex justify-end w-[20%]">
              <p className="bg-[#d9b030] rounded-[5px] px-2 py-1">+74.12%</p>
            </div>
          </div>
        </div>

        <div onClick={() => navigate('/ingresos')}  className="cursor-pointer w-full rounded-[10px] bg-[#00733C] bg-cover bg-center relative sombra h-full p-6 flex flex-col gap-1" style={{ backgroundImage: "url('/images/totalingresos.png')" }}>
          <p className="h4">Ingresos de la tienda</p>
          <p className="textos-bold mt-[10%] dorado-optimista">Ingresos totales</p>
          <p className="h2 blanco">654.541</p>
          <div className="bg-white w-[90%] rounded-[5px] flex gap-2 py-1 px-2 items-center">
            <Fecha />
            <p className="w-full">Total ingresos vs el último mes</p>
            <div className="flex justify-end w-[20%]">
              <p className="bg-[#A8D1BD] rounded-[5px] px-2 py-1">+74.12%</p>
            </div>
          </div>
        </div>

        <div onClick={() => navigate('/egresos')} className="cursor-pointer w-full rounded-[10px] bg-[#D55665] bg-cover bg-center relative sombra h-full p-6 flex flex-col gap-1" style={{ backgroundImage: "url('/images/totalegresos.png')" }}>
          <p className="h4">Balance de la tienda</p>
          <p className="textos-bold mt-[10%] verde-serenidad">Gastos totales</p>
          <p className="h2 blanco">654.541</p>
          <div className="bg-white w-[90%] rounded-[5px] flex gap-2 py-1 px-2 items-center">
            <Fecha />
            <p className="w-full">Total ingresos vs el último mes</p>
            <div className="flex justify-end w-[20%]">
              <p className="bg-[#D55665] rounded-[5px] blanco px-2 py-1">+74.12%</p>
            </div>
          </div>
        </div>
      </div>
      <Tablas />
    </>
  );
};

export default Tabla;
