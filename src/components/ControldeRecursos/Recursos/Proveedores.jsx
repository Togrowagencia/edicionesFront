import React, { useState, useEffect } from "react";
import AgregarRecurso from "../CrearRecurso";
import { createProvider, putProvider } from "../../../api/providers";
const Proveedores = ({ datoss, update, sinDatos }) => {
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
      label: "Nombre de la empresa",
      name: "corporate_name",
      type: "text",
      placeholder: "",
    },
    {
      label: "Nombre del proveedor",
      name: "name_provider",
      type: "text",
      placeholder: "",
    },
    {
      label: "Tipo de identificación",
      name: "type_id",
      type: "text",
      placeholder: "",
    },
    {
      label: "Identificación",
      name: "identification",
      type: "text",
      placeholder: "0.000.000",
    },
    {
      label: "Teléfono",
      name: "phone",
      type: "text",
      placeholder: "000000000",
    },
    {
      label: "Celular",
      name: "cell_phone",
      type: "text",
      placeholder: "000000000",
    },
    {
      label: "Departamento",
      name: "department",
      type: "text",
      placeholder: "Antioquia",
    },
    {
      label: "Municipio",
      name: "municipality",
      type: "text",
      placeholder: "Medellín",
    },
    {
      label: "Dirección",
      name: "address",
      type: "text",
      placeholder: "Calle 54",
    },
    {
      label: "Página web",
      name: "web",
      type: "text",
      placeholder: "happyBooks.com",
    },
    {
      label: "Gran contrubuyente",
      name: "large_contributor",
      isSelect: true,
      placeholder: "",
      options: [
        { label: "Sí", value: true },
        { label: "No", value: false },
      ],
    },
    {
      label: "Correo electrónico",
      name: "email",
      type: "email",
      placeholder: "example@example.com",
    },
    {
      label: "Porcentaje",
      name: "percentage",
      type: "number",
      placeholder: "Ej. 10",
    },
  ];
  const showDrawer1 = () => {
    setOpenDrawer1(true);
  };
  const onCloseDrawer1 = () => {
    setOpenDrawer1(false);
  };

  return (
    <div className="w-[50.5%] h-auto rounded-[10px] sombra flex-shrink-0 bg-white flex flex-col py-2 my-2">
      <div className="w-full flex items-center mb-4">
        <p className="h3 negro w-[85%]  mx-[3%] mt-2">Proveedores</p>
        <img src="/public/svg/header/buscar.svg" alt="Icono" />
      </div>

      <div className="overflow-auto max-h-[200px]">
        <table className="w-[95%] mx-auto">
          <thead className="bg-white sticky top-0 z-10">
            <tr className="border-b border-green-500">
              <th className="gris-urbano text-start px-2">Proveedor</th>
              <th className="gris-urbano text-start">Email</th>
              <th className="gris-urbano text-start">Teléfono</th>
              <th className="gris-urbano text-end">Editar / Eliminar</th>
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
                    index % 2 === 0 ? "bg-[#f5f5f5]" : "bg-white"
                  }`}
                >
                  <td className="textos-bold py-1 px-2">{item.corporate_name}</td>
                  <td className="textos-bold">{item.email}</td>
                  <td className="textos-bold">{item.cell_phone}</td>
                  <td className="flex items-center justify-end">
                    <img
                      src="/svg/editar.svg"
                      alt="editar"
                      className="px-3 py-2 cursor-pointer"
                      onClick={() => {
                        showDrawer2(item);
                        setTexto("Editar proveedor");
                        setOpcion("editar");
                        setApiFunc((prev) => ({
                          ...prev,
                          update: putProvider,
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
            setTexto("Agregar proveedor");
            setOpcion("crear");
            setApiFunc((prev) => ({
              ...prev,
              create: createProvider,
            }));
          }}
        >
          Agregar Proveedor +
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

export default Proveedores;
