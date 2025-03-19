/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Data from "../Data/Pedidos/Data";

const Tabla = () => {

  return (
    <table className="w-[98%] ml-3 border-collapse">
      {/* Encabezados de la tabla */}
      <thead>
        <tr className="border-b border-gray-200 text-left">
          <th className="gris-urbano textos px-2 py-2">N° Orden</th>
          <th className="gris-urbano textos px-2 py-2">Cliente</th>
          <th className="gris-urbano px-2 textos py-2">Hora de pedido</th>
          <th className="gris-urbano px-2 textos py-2">Nombre de la obra</th>
          <th className="gris-urbano px-2 textos py-2">Cantidad</th>
          <th className="gris-urbano px-2 textos py-2">Costo total</th>
          <th className="gris-urbano px-2 textos py-2">Metodo de pago</th>
          <th className="gris-urbano px-2 textos py-2">Cantidad en stock</th>
          <th className="gris-urbano px-2 textos py-2">Estado del pedido</th>
        </tr>
      </thead>

      {/* Filas de datos */}
      <tbody>
        {Data.map((item, index) => (
          <tr key={index} className=" rounded bg ">
            <td className="px-2 py-2 textos-bold verde-eco">{item.ordenNum}</td>
            <td className="px-2 py-2 textos-bold negro">{item.cliente}</td>
            <td className="px-2 py-2 textos-bold negro">{item.horaPedido}</td>
            <td className="px-2 py-2 textos-bold negro">{item.nombreObra}</td>
            <td className="px-2 py-2 textos-bold negro">{item.cantidad}</td>
            <td className="px-2 py-2 textos-bold negro">${item.costoTotal}</td>
            <td className="px-2 py-2 textos-bold negro">{item.metodoPago}</td>
            <td className="px-2 py-2 textos-bold negro">{item.cantidadStock}</td>
            <td className="px-2 py-2 textos-bold negro">{item.estadoPedido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
