/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { createAuthor, putAuthor } from "../../../api/author";
import AgregarRecurso from "../CrearRecurso";
const Autor = ({ datoss, update, sinDatos }) => {
  const [texto, setTexto] = useState("");
  const [opcion, setOpcion] = useState("");
  const [editar, SetEditar] = useState([]);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [openDrawer1, setOpenDrawer1] = useState(false);
  const [apiFunc, setApiFunc] = useState({
    create: [],
    update: [],
  });
  const showDrawer2 = (editorial) => {
    SetEditar(editorial);
    setOpenDrawer1(true);
  };
  const showDrawer1 = () => {
    setOpenDrawer1(true);
  };
  const onCloseDrawer1 = () => {
    setOpenDrawer1(false);
  };
  const fields = [
    {
      label: "Nombre del autor",
      name: "name",
      type: "text",
      placeholder: "",
    },
  ];
  return (
    <div className="w-[23.3%] h-auto rounded-[10px] sombra flex-shrink-0 bg-white flex flex-col py-4 my-2">
      <div className="w-full flex items-center mb-4">
        <p className="h3 negro w-[80%] ml-[5%]">Autor</p>
        <img src="/public/svg/header/buscar.svg" alt="Icono" />
      </div>

      {/* Contenedor de la tabla */}
      <div className="overflow-auto max-h-[200px] ">
        <table className="w-[95%] mx-auto">
          <thead className="bg-white sticky top-0 z-10">
            <tr className="border-b sticky border-green-500 ">
              <th className="gris-urbano  text-start px-2">Autores</th>
              <th className="gris-urbano ">Editar / Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {sinDatos ? (
              <tr>
                <td colSpan="4" className="text-center py-2 text-gray-500">
                  Sin datos
                </td>
              </tr>
            ) : (
              datoss.map((item, index) => (
                <tr
                  key={index}
                  className={`text-start ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="textos-bold py-1 px-2">{item.name}</td>
                  <td className="flex items-center justify-end">
                    <img
                      src="/svg/editar.svg"
                      alt="editar"
                      className=" px-3 py-2 cursor-point"
                      onClick={() => {
                        showDrawer2(item);
                        setTexto("Editar proveedor");
                        setOpcion("editar");
                        setApiFunc((prev) => ({
                          ...prev,
                          update: putAuthor,
                        }));
                      }}
                    />
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

      <div className="w-full flex justify-end px-4 mt-auto">
        <button
          className="text-[17px] bg-green-800 hover:bg-green-700 text-white font-bold px-4 border-b-4 border-green-800 hover:border-green-700 rounded"
          onClick={() => {
            showDrawer1();
            setTexto("Agregar autor");
            setOpcion("crear");
            setApiFunc((prev) => ({
              ...prev,
              create: createAuthor,
            }));
          }}
        >
          Agregar Autor +
        </button>
      </div>
      <AgregarRecurso
        handlePopupClose={onCloseDrawer1}
        isPopupOpen={openDrawer1}
        dataedit={editar}
        fields={fields}
        title={texto}
        opciones={opcion}
        apifunc={apiFunc}
        reload={update}
      />
    </div>
  );
};

export default Autor;
