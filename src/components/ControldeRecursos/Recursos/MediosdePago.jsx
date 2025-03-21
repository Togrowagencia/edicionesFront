/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Proveedor from "../../Data/ControldeRecursos/Proveedor";

const MediosdePago = () => {
  return (
    <div className="w-[50.5%] h-[25.5%] bg-white rounded-[10px] sombra flex-shrink-0 mt-[-15%]">
      <div className="w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[20px] ml-[5%]">
        <p className="h3 negro w-[85%]">Medios de Pago</p>
        <img src="/public/svg/header/buscar.svg" alt="Icono" className=" " />
      </div>
      <div className="w-full h-full justify-center">
        <div className="overflow-auto max-h-[calc(100%-35%)]">
          <table className="w-[95%] mx-auto">
            <thead className="bg-white sticky top-0 z-10 shadow">
              <tr className="border-b border-green-500 ">
                <th className="gris-urbano ">Autor</th>
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

                  <td className="flex items-center justify-center">
                    <img src="/svg/editar.svg" alt="editar" className="p-2" />
                    <img src="/svg/editar.svg" alt="Eliminar" className="p-2" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-2">
          <div className="col"></div>
          <div className="w-[60%] ml-[41%] flex flex justify-start pr-2 py-3 mt-1">
            <button className=" text-[17px] h-[95%] bg-green-800 hover:bg-green-700 text-white font-bold  px-4 border-b-4 border-green-800 hover:border-green-700 rounded">
              Agregar Medio de pago +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediosdePago;
