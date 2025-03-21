/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Proveedor from "../../Data/ControldeRecursos/Proveedor";
import BotonAgregar from "../../inputs/BotonAgregar";
import { getProviders } from "../../../api/providers";
const Proveedores = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await getProviders();
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchProviders();
  }, []);
  return (
    <div className="w-[50.5%] h-auto rounded-[10px] sombra flex-shrink-0 bg-white flex flex-col py-2 my-2">
      <div className="w-full flex items-center mb-4">
        <p className="h3 negro w-[85%] ml-[5%]">Proveedores</p>
        <img src="/public/svg/header/buscar.svg" alt="Icono" />
      </div>

      {/* Contenedor de la tabla */}
      <div className="overflow-auto max-h-[200px]">
        <table className="w-[95%] mx-auto">
          <thead className="bg-white sticky top-0 z-10 shadow">
            <tr className="border-b border-green-500">
              <th className="gris-urbano ">Proveedor</th>
              <th className="gris-urbano ">Email</th>
              <th className="gris-urbano ">Teléfono</th>
              <th className="gris-urbano ">Editar / Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((item, index) => (
              <tr
                key={index}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="textos-bold py-1">{item.corporate_name}</td>
                <td className="textos-bold">{item.email}</td>
                <td className="textos-bold">{item.cell_phone}</td>
                <td className="flex items-center justify-center">
                  <img src="/svg/editar.svg" alt="editar" className="p-2" />
                  <img src="/svg/editar.svg" alt="Eliminar" className="p-2" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-end px-4 mt-auto">
        <button className="text-[17px] bg-green-800 hover:bg-green-700 text-white font-bold px-4 border-b-4 border-green-800 hover:border-green-700 rounded">
          Agregar Proveedor +
        </button>
      </div>
    </div>
  );
};

export default Proveedores;
