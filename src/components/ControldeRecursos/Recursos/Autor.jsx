/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import { getAuthor } from "../../../api/author";
import Proveedor from "../../Data/ControldeRecursos/Proveedor";
import AgregarRecurso from "../CrearRecurso";
const Autor = () => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await getAuthor();
          setDatos(response.data);
        } catch (error) {
          console.error("Error al obtener los usuarios:", error);
        }
      };
  
      fetchUsers();
    }, []);
  return (
    <div className="w-[23.3%] h-auto rounded-[10px] sombra flex-shrink-0 bg-white flex flex-col py-4 my-2">
    <div className="w-full flex items-center mb-4">
      <p className="h3 negro w-[80%] ml-[5%]">Autor</p>
      <img src="/public/svg/header/buscar.svg" alt="Icono" />
    </div>

    {/* Contenedor de la tabla */}
    <div className="overflow-auto max-h-[200px]">
      <table className="w-[95%] mx-auto">
        <thead className="bg-white sticky top-0 z-10">
          <tr className="border-b sticky border-green-500 ">
            <th className="gris-urbano ">Autores</th>
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
              <td className="textos-bold py-1">{item.name}</td>
              <td className="flex items-center justify-center">
                <img src="/svg/editar.svg" alt="editar" className="p-2" />
              <img src="/svg/eliminar.svg" alt="Eliminar" className="p-2" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Contenedor del botón sin margin-top automático */}
    <div className="w-full flex justify-end px-4 mt-auto">
      <button className="text-[17px] bg-green-800 hover:bg-green-700 text-white font-bold px-4 border-b-4 border-green-800 hover:border-green-700 rounded">
        Agregar Autor +
      </button>
    </div>
  </div>
  );
};

export default Autor;
