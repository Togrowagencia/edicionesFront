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
    <div className="w-[50.5%]  rounded-[10px] sombra flex-shrink-0 bg-white flex flex-col py-2 my-2">
      <div className="w-full h-[10%] flex items-center gap-2 mb-[20px] mt-[16px]">
        <p className="h3 negro w-[85%] ml-[5%]">Promociones</p>
        <img src="/public/svg/header/buscar.svg" alt="Icono" />
      </div>

      <div className="flex-1 overflow-auto max-h-[calc(100%-35%)] my-1">
        <table className="w-[95%] mx-auto">
          <thead className="bg-white sticky top-0 z-10">
            <tr className="border-b border-green-500">
              <th className="gris-urbano ">Promocion</th>
              <th className="gris-urbano ">tipo</th>
              <th className="gris-urbano ">estado</th>
              <th className="gris-urbano ">Editar / Eliminar</th>
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
                  className={`text-center ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="textos-bold py-2">{item.name}</td>
                  <td className="textos-bold ">{item.name}</td>
                  <td className="textos-bold">{item.name}</td>
                  <td className="flex items-center justify-center">
                    <img src="/svg/editar.svg" alt="editar" className="p-2" />
                    <img
                      src="/svg/eliminar.svg"
                      alt="Eliminar"
                      className="p-2"
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
