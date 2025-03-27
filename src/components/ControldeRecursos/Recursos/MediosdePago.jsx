import React, { useState, useEffect } from "react";
import { createPayment, putPayment } from "../../../api/paymentMethods";
import { baseurl2 } from "../../../utils/baseurl";
import AgregarRecurso from "../CrearRecurso";
export const MediosdePago = ({ datoss, update, sinDatos }) => {
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

  const fields = [
    {
      label: "Nombre",
      name: "name",
      type: "text",
      placeholder: "",
    },
    {
      label: "imagen",
      name: "file",
      type: "file",
      placeholder: "",
    },
    {
      label: "comisión",
      name: "comission",
      type: "text",
      placeholder: "",
    },
  ];
  const showDrawer1 = () => {
    setOpenDrawer1(true);
  };
  const onCloseDrawer1 = () => {
    setOpenDrawer1(false);
  };

  return (
    <div className="w-[50.5%] h-auto rounded-[10px] sombra flex-shrink-0 bg-white flex flex-col py-4 my-2">
      <div className="w-full flex items-center mb-4">
        <p className="h3 negro w-[85%] mx-[3%]">Medios de pago</p>
        <img src="/public/svg/header/buscar.svg" alt="Icono" />
      </div>

      {/* Contenedor de la tabla */}
      <div className="overflow-auto max-h-[200px]">
        <table className="w-[95%] mx-auto">
          <thead className="bg-white sticky top-0 z-10">
            <tr className="border-b border-green-500">
              <th className="gris-urbano text-start ">Medio de pago</th>
              <th className="gris-urbano text-end  ">Editar / Eliminar</th>
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
              datoss.map((item, index) => (
                <tr
                  key={index}
                  className={`text-start ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="textos-bold py-1 ">
                    <div className="inline-flex items-center mx-1">
                      <div className="w-6 h-6 rounded-full overflow-hidden mx-2">
                        <img
                          src={baseurl2 + item.file}
                          alt="Imagen"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mx-2">{item.name}</span>
                    </div>
                  </td>

                  <td className="flex items-center justify-end">
                    <img
                      src="/svg/editar.svg"
                      alt="editar"
                      className="px-3 py-2"
                      onClick={() => {
                        console.log(item);
                        showDrawer2(item);
                        setTexto("Editar medio de pago");
                        setOpcion("editar");
                        setApiFunc((prev) => ({
                          ...prev,
                          update: putPayment,
                        }));
                      }}
                    />
                    <img
                      src="/svg/eliminar.svg"
                      alt="Eliminar"
                      className="px-3 py-2 cursor-pointer"
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
            setTexto("Agregar medio de pago");
            setOpcion("crear");
            setApiFunc((prev) => ({
              ...prev,
              create: createPayment,
            }));
          }}
        >
          Agregar Medio de pago +
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
