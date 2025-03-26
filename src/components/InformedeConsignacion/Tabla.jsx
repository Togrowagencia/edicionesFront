/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Data from "../Data/InformedeConsignacion/Data";

const Tabla = () => {
  return (
    <div className="w-full h-[485px] justify-center">
      <table className="w-[1470px] my-[2%] border-collapse">
        {/* Encabezados de la tabla */}
        <thead>
          <tr className="border-b border-grey-500 h-[10%]">
            <th className="gris-urbano textos text-left">ID</th>
            <th className="gris-urbano textos text-left">ISBN</th>
            <th className="gris-urbano textos text-left">Nombre de la obra</th>
            <th className="gris-urbano textos text-left">Editorial</th>
            <th className="gris-urbano textos text-left">Autor</th>
            <th className="gris-urbano textos text-left">
              Cantidad en inventario
            </th>
            <th className="gris-urbano textos text-left">Precio de venta</th>
            <th className="gris-urbano textos text-left">Venta normal</th>
            <th className="gris-urbano textos text-left">Promo enero</th>
            <th className="gris-urbano textos text-left">Promo apertura</th>
            <th className="gris-urbano textos text-left">Promo adicional</th>
            <th className="gris-urbano textos text-left">Saldo</th>
            <th className="gris-urbano textos text-left">Conciliacion</th>
          </tr>
        </thead>
        {/* Filas de datos */}
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              <td className="textos-bold verde-eco truncate py-2">{item.ID}</td>
              <td className="textos-bold truncate py-2">{item.ISBN}</td>
              <td className="textos-bold truncate py-2">
                {item.NombreDeLaObra}
              </td>
              <td className="textos-bold truncate py-2">{item.Editorial}</td>
              <td className="textos-bold truncate py-2">{item.Autor}</td>
              <td className="textos-bold truncate py-2">
                {item.CantidadEnInventario}
              </td>
              <td className="textos-bold truncate py-2">
                {item.PrecioDeVenta}
              </td>
              <td className="textos-bold truncate py-2">{item.VentaNormal}</td>
              <td className="textos-bold truncate py-2">{item.PromoEnero}</td>
              <td className="textos-bold truncate py-2">
                {item.PromoApertura}
              </td>
              <td className="textos-bold truncate py-2">
                {item.PromoAdicional}
              </td>
              <td className="textos-bold truncate py-2">{item.Saldo}</td>
              <td className="textos-bold truncate py-2">{item.Conciliacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
