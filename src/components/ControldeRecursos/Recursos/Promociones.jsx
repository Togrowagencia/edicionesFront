/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Proveedor from "../../Data/ControldeRecursos/Proveedor";
import BotonAgregar from "../../inputs/BotonAgregar";
import { getPublishing } from "../../../api/editorial";
const Promociones = () => {
  const [sinDatos, setSinDatos] = useState(false);
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getPublishing();
        if (response.data.message === "BAD_REQUEST::No se encontró resultado") {
          setSinDatos(true);
        } else {
          setDatos(response.data);
          setSinDatos(false);
        }
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetch();
  }, []);
  return (
    <div className="w-[50.5%] h-auto rounded-[10px] sombra flex-shrink-0 bg-white flex flex-col py-2 my-2">
      <div className="w-full flex items-center mb-4">
        <p className="h3 negro w-[85%]  mx-[3%] mt-2">Promociones</p>
        <img src="/public/svg/header/buscar.svg" alt="Icono" />
      </div>

      <div className="overflow-auto max-h-[200px]">
        <table className="w-[95%] mx-auto">
          <thead className="bg-white sticky top-0 z-10">
            <tr className="border-b border-green-500">
              <th className="gris-urbano text-start px-2">Promocion</th>
              <th className="gris-urbano text-start">tipo</th>
              <th className="gris-urbano text-start">estado</th>
              <th className="gris-urbano text-end">Editar / Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {sinDatos ? (
              // Si no hay datos, mostramos una fila con "Sin datos"
              <tr>
                <td colSpan="4" className="text-center py-2 text-gray-500">
                  Sin datos
                </td>
              </tr>
            ) : (
              datos.map((item, index) => (
                <tr
                  key={index}
                  className={`text-start ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="textos-bold px-2">{item.name}</td>
                  <td className="textos-bold ">{item.name}</td>
                  <td className="textos-bold">{item.name}</td>
                  <td className="flex items-center justify-end">
                    <img src="/svg/editar.svg" alt="editar" className="px-3 py-2 cursor-pointer" />
                    <img
                      src="/svg/eliminar.svg"
                      alt="Eliminar"
                      className="px-5 py-2"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-end p-3 mt-auto">
        <button className="text-[17px] bg-green-800 hover:bg-green-700 text-white font-bold px-4 border-b-4 border-green-800 hover:border-green-700 rounded">
          Agregar promoción +
        </button>
      </div>
    </div>
  );
};

export default Promociones;
