/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Proveedor from "../../Data/ControldeRecursos/Proveedor";
import BotonAgregar from "../../inputs/BotonAgregar";
const Proveedores = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Elementos por página

  // Calcular los índices para paginación
  //const startIndex = (currentPage - 1) * itemsPerPage;
  //const endIndex = startIndex + itemsPerPage;
  //const currentItems = Proveedor.slice(startIndex, endIndex);

  return (
    <div className="w-[50.5%] h-[25.5%]  rounded-[10px] sombra flex-shrink-0 bg-white">
      <div className="w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px]">
        <p className="h3 negro w-[85%] ml-[5%]">Proveedores</p>
        <img src="/public/svg/header/buscar.svg" alt="Icono" />
      </div>
      <div className="w-full h-full justify-center">
        <div className="overflow-auto max-h-[calc(100%-35%)] my-1">
          <table className="w-[95%] mx-auto">
            <thead className="bg-white sticky top-0 z-10 shadow">
              <tr className="border-b border-green-500 ">
                <th className="gris-urbano ">Proveedor</th>
                <th className="gris-urbano ">Email</th>
                <th className="gris-urbano ">Teléfono</th>
                <th className="gris-urbano ">Editar / Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {Proveedor.map((item, index) => (
                <tr
                  key={index}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="textos-bold py-2">{item.Proveedor}</td>
                  <td className="textos-bold ">{item.Email}</td>
                  <td className="textos-bold">{item.Telefono}</td>
                  <td className="flex items-center justify-center">
                    <img src="/svg/editar.svg" alt="editar" className="p-2" />
                    <img src="/svg/editar.svg" alt="Eliminar" className="p-2" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-[85%] ml-[12%] flex flex justify-end py-3">
          <button className=" text-[17px] h-[95%] bg-green-800 hover:bg-green-700 text-white font-bold  px-4 border-b-4 border-green-800 hover:border-green-700 rounded">
            Agregar proveedor +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;
