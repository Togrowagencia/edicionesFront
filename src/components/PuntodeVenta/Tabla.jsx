/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Data from "../Data/Cotizaciones/Data";

const Tabla = () => {
  const [currentPage] = useState(1);
  const itemsPerPage = 17; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Data.slice(startIndex, endIndex);

  return (
    <>
      <table className="w-[98%] ml-3 border-collapse">
        {/* Encabezados de la tabla */}
        <thead>
          <tr className="border-b border-gray-200 text-left">
            <th className="gris-urbano textos px-2 py-2">ID</th>
            <th className="gris-urbano textos px-2 py-2">ISBN</th>
            <th className="gris-urbano px-2 textos py-2">Nombre de la obra</th>
            <th className="gris-urbano px-2 textos py-2">Editorial</th>
            <th className="gris-urbano px-2 textos py-2">Clasificación</th>
            <th className="gris-urbano px-2 textos py-2">Precio de venta</th>
            <th className="gris-urbano px-2 textos py-2">Inducción</th>
            <th className="gris-urbano px-2 textos py-2">Proveedor</th>
            <th className="gris-urbano px-2 textos py-2">Cantidad en stock</th>
          </tr>
        </thead>

        {/* Filas de datos */}
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className=" rounded bg ">
              <td className="px-2 py-2 textos-bold verde-eco">{item.ID}</td>
              <td className="px-2 py-2 textos-bold negro">{item.ISBN}</td>
              <td className="px-2 py-2 textos-bold negro">
                {item.Nombredelaobra}
              </td>
              <td className="px-2 py-2 textos-bold negro">{item.Editorial}</td>
              <td className="px-2 py-2 textos-bold negro">
                {item.Clasificacion}
              </td>
              <td className="px-2 py-2 textos-bold negro">
                ${item.PreciodeVenta}
              </td>
              <td className="px-2 py-2 textos-bold negro">{item.Inducción}</td>
              <td className="px-2 py-2 textos-bold negro">{item.Proveedor}</td>
              <td className="px-2 py-2 textos-bold negro">
                {item.CantidadenStock}
              </td>

              <button className="bg-green-700 rounded blanco flex justify-center w-[100%] mr-2">
                <p className="texto px-2">Añadir</p>
                <img src='/svg/agregar.svg' alt="Libro" className="cursor-pointer" />
              </button>

            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-end w-[100%]">
        <button className="bg-green-700 rounded blanco flex justify-center w-[11%] mr-2">
          <p className="texto px-2">Añadir todos</p>
          <img src='/svg/agregar.svg' alt="Libro" className="cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default Tabla;
