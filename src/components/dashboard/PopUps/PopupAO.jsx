import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import ObraPropia from "./AO/ObraPropia";
import ObraConsignacion from "./AO/ObraConsignacion";
import { getGoogleBook } from "../../../api/googleBooks";
import { CheckboxWithLabel } from "../../inputs/CheckboxWithLabel";
import { InputRow } from "../../inputs/InputRow";
import DataAO from "../../Data/DataAO";
import Drop from "./AO/Drop";
import Swal from "sweetalert2";

const PopupAO = ({
  isPopupOpen,
  handlePopupClose,
  datos,
  sindatos,
  reload,
}) => {
  const [currentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DataAO.slice(startIndex, endIndex);
  const [book, setBook] = useState([]);
  const [editorial, setEditorial] = useState("");

  const [options] = useState({
    proveedores: [
      { value: "Proveedor A", label: "Proveedor A" },
      { value: "Proveedor B", label: "Proveedor B" },
      { value: "Proveedor C", label: "Proveedor C" },
    ],
    contenidos: [
      { value: "Contenido A", label: "Contenido A" },
      { value: "Contenido B", label: "Contenido B" },
    ],
    clasificaciones: [
      { value: "Clasificación 1", label: "Clasificación 1" },
      { value: "Clasificación 2", label: "Clasificación 2" },
    ],
    generos: [
      { value: "Género A", label: "Género A" },
      { value: "Género B", label: "Género B" },
      { value: "Género C", label: "Género C" },
    ],
  });

  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    obraPropia: true,
    obraConsignacion: false,
    iva: false,
  });

  const [inputValues, setInputValues] = useState({
    isbn: "",
    nombreObra: "",
    proveedor: "",
    editorial: "",
    autor: "",
    contenido: "",
    clasificacion: "",
    genero: "",
    costoLibro: "",
    precioVenta: "",
    cantidad: "",
    image: "",
  });

  // Función que se encarga de verificar la editorial

  const handleBook = async () => {
    try {
      const respuesta = await getGoogleBook(inputValues.isbn);
      console.log(datos);
      if (respuesta.data.volumeInfo) {
        setBook(respuesta.data.volumeInfo);
        setInputValues((prevData) => {
          const newData = {
            ...prevData,
            nombreObra: respuesta.data.volumeInfo.title || "",
            editorial: respuesta.data.volumeInfo.publisher || "",
            autor: respuesta.data.volumeInfo.authors || "",
            contenido: respuesta.data.volumeInfo.contentVersion || "",
            clasificacion: respuesta.data.volumeInfo.categories || "",
            image: respuesta.data.volumeInfo.imageLinks
              ? respuesta.data.volumeInfo.imageLinks.thumbnail
              : "",
          };
          console.log("newData");
          console.log(newData);
          return newData;
        });
        setEditorial(respuesta.data.volumeInfo.publisher || "");
        console.log("editorial");
        console.log(editorial);
      } else {
        console.log(respuesta);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckboxChange = (checkbox) => {
    if (checkbox === "obraPropia" || checkbox === "obraConsignacion") {
      setSelectedCheckboxes((prevState) => ({
        ...prevState,
        obraPropia: checkbox === "obraPropia" ? !prevState.obraPropia : false,
        obraConsignacion:
          checkbox === "obraConsignacion" ? !prevState.obraConsignacion : false,
      }));
    } else {
      setSelectedCheckboxes((prevState) => ({
        ...prevState,
        [checkbox]: !prevState[checkbox],
      }));
    }
  };

  const handleInputChange = (name, value) => {
    console.log(name, value);
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Definir las filas de campos con nombres únicos
  const rows = [
    [
      {
        name: "isbn",
        iconSrc: "/public/svg/popup-ao/ISBN.svg",
        placeholder: "ISBN",
      },
      {
        name: "nombreObra",
        iconSrc: "/public/svg/popup-ao/NDLO.svg",
        placeholder: "Nombre de la obra",
      },
      {
        name: "proveedor",
        placeholder: "Proveedor",
        hasArrow: true,
        options: datos.Providers
          ? datos.Providers.map((item) => ({
              value: item.id,
              label: item.corporate_name,
            }))
          : [],
      },
    ],
    [
      {
        name: "editorial",
        placeholder: "Editorial",
        hasArrow: true,
        options: datos.Publishing
          ? datos.Publishing.map((item) => ({
              value: item.id,
              label: item.name,
            }))
          : [],
      },
      {
        name: "autor",
        placeholder: "Autor",
        hasArrow: true,
        options: datos.Publishing
          ? datos.Author.map((item) => ({
              value: item.id,
              label: item.name,
            }))
          : [],
      },
      {
        name: "contenido",
        placeholder: "Contenido",
        hasArrow: true,
        options: options.contenidos,
      },
    ],
    [
      {
        name: "clasificacion",
        placeholder: "Clasificación",
        hasArrow: true,
        options: options.clasificaciones,
      },
      {
        name: "genero",
        placeholder: "Género",
        hasArrow: true,
        options: options.generos,
      },
      {
        name: "costoLibro",
        iconSrc: "/public/svg/popup-ao/costo.svg",
        placeholder: "Costo del libro",
      },
    ],
    [
      {
        name: "Precio de venta",
        iconSrc: "/public/svg/popup-ao/costo.svg",
        placeholder: "Precio de venta",
      },
      {
        name: "Cantidad",
        placeholder: "Cantidad",
        iconSrc: "/public/svg/popup-ao/costo.svg",
      },
    ],
  ];

  useEffect(() => {
    if (inputValues.isbn.trim() !== "") {
      handleBook();
    }
  }, [inputValues.isbn]);

  return (
    <div style={{ position: "relative" }}>
      <Drawer
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        width={1483}
        closable={false}
        headerStyle={{ display: "none" }}
        drawerStyle={{ borderRadius: "10px 10px 10px 10px" }}
      >
        {/* Botón de cierre personalizado */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            cursor: "pointer",
          }}
          onClick={handlePopupClose}
        >
          <img
            src="/public/svg/popup-ao/cerrar (2).svg"
            alt="Cerrar"
            className="w-6 h-6 mt-[10%]"
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/public/svg/popup-ao/agregar-obra.svg"
            alt="Icono"
            className="w-33px h-33px ml-[20px]"
          />
          <p className="h3 verde-corporativo">Añadir nueva obra</p>
          <div className="w-[13%] h-full flex justify-end items-start">
            <button className="blanco bg-[#00733C] px-2 py-1 rounded-[3px] flex gap-2">
              <p className="textos-bold">Añadir masivamente</p>
              <img src="/svg/agregarmasi.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-2 h-[45%]">
          <div className="h-full w-[145%]">
            {/* Renderizar las filas de campos con valores y manejadores */}
            {rows.map((fields, index) => (
              <InputRow
                key={index}
                fields={fields}
                className="h-[22%]"
                values={inputValues}
                onChange={handleInputChange}
              />
            ))}
            {/* Checkboxes y textos */}
            <div className="w-full h-[37%] flex flex-col gap-2 justify-start px-4 py-9">
              <div className="flex items-center">
                <CheckboxWithLabel
                  label="Obra propia"
                  checked={selectedCheckboxes.obraPropia}
                  onChange={() => handleCheckboxChange("obraPropia")}
                  className="mr-2 ml-[7px]"
                />
                <CheckboxWithLabel
                  label="Obra en consignación"
                  checked={selectedCheckboxes.obraConsignacion}
                  onChange={() => handleCheckboxChange("obraConsignacion")}
                  className="mr-2 ml-[20px]"
                />
                <CheckboxWithLabel
                  label="IVA"
                  checked={selectedCheckboxes.iva}
                  onChange={() => handleCheckboxChange("iva")}
                  className="mr-2 ml-[20px]"
                />
              </div>
            </div>
            {selectedCheckboxes.obraPropia && <ObraPropia />}
            {selectedCheckboxes.obraConsignacion && <ObraConsignacion />}
            <div className="flex justify-end py-6 px-10">
              <button
                className="flex bg-[#00733C] px-2 py-1 rounded-[3px] gap-2"
                onClick={() => {
                  console.log(inputValues);
                }}
              >
                <p className="blanco h4">Agregar obra</p>
                <img src="/svg/agregar.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="h-full w-[100%] justify-end flex">
            <Drop initialImageUrl={inputValues.image} />
          </div>
        </div>

        <div className="flex flex-col items-start mt-[1%]">
          <div className="w-auto h-[10%] flex gap-2 items-start justify-start my-[1%] relative mx-[1.5%]">
            <p className="h4 verde-corporativo text-start">Compra de la obra</p>
          </div>

          <div className="w-full h-full flex justify-center">
            <div className="w-[1385px]">
              <table className="w-full">
                {/* Encabezados de la tabla */}
                <thead>
                  <tr className="border-b border-grey-500 h-[10%] items-end">
                    <th className="text-left gris-urbano p-2 textos">ID</th>
                    <th className="text-left gris-urbano p-2 textos">ISBN</th>
                    <th className="text-left gris-urbano p-2 textos">
                      Nombre de la obra
                    </th>
                    <th className="text-left gris-urbano p-2 textos">
                      Editorial
                    </th>
                    <th className="text-left gris-urbano p-2 textos">Genero</th>
                    <th className="text-left gris-urbano p-2 textos">Costo</th>
                    <th className="text-left gris-urbano p-2 textos">
                      Inducción
                    </th>
                    <th className="text-left gris-urbano p-2 textos">
                      Proveedor
                    </th>
                    <th className="text-left gris-urbano p-2 textos">
                      Cantidad total
                    </th>
                    <th className="text-left gris-urbano p-2 textos">
                      Costo total
                    </th>
                    <th className="text-left gris-urbano p-2 textos">
                      Editar/Eliminar
                    </th>
                  </tr>
                </thead>

                {/* Filas de datos */}
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index} className="mb-5 mt-[10px]">
                      <td className="textos-bold verde-eco truncate p-2">
                        {item.ID}
                      </td>
                      <td className="textos-bold truncate p-2">{item.ISBN}</td>
                      <td className="textos-bold truncate p-2">
                        {item["Nombre de la obra"]}
                      </td>
                      <td className="textos-bold truncate p-2">
                        {item["Editorial"]}
                      </td>
                      <td className="textos-bold truncate p-2">
                        {item["Genero"]}
                      </td>
                      <td className="textos-bold truncate p-2">
                        {item["Costo"]}
                      </td>
                      <td className="textos-bold truncate p-2">
                        {item["Induccion"]}
                      </td>
                      <td className="textos-bold truncate p-2">
                        {item["Proveedor"]}
                      </td>
                      <td className="textos-bold truncate p-2">
                        {item["Cantidad-total"]}
                      </td>
                      <td className="textos-bold truncate p-2">
                        {item["Costo-total"]}
                      </td>
                      <td className="flex gap-6 mx-5">
                        <img src="/svg/editar.svg" alt="" />
                        <img src="/svg/eliminar.svg" alt="" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center p-4 justify-end w-full">
            <div className="flex items-center gap-2 bg-[#EEE] p-2 rounded-[3px] justify-end w-auto">
              <img src="/svg/popup-ao/NDLO.svg" alt="" />
              <p className="textos negro">
                Cantidad total <span className="textos-bold mx-3">450</span>
              </p>
              <img src="/svg/total (2).svg" alt="" className="ml-6" />
              <p className="textos negro">
                Cantidad total <span className="textos-bold">$8,405,393</span>
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full justify-end p-4">
            <button className="bg-[#00733C] flex px-2 py-1 rounded-[3px] gap-2">
              <p className="h4 blanco">Confirmar carga de obras</p>
              <img src="/svg/gestiondeobras/agregar(2).svg" alt="" />
            </button>
            <button
              onClick={handlePopupClose}
              className="bg-[#222] flex px-2 py-1 rounded-[3px] gap-2"
            >
              <p className="h4 blanco">Cancelar</p>
              <img src="/svg/gestiondeobras/cancelar.svg" alt="" />
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

PopupAO.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default PopupAO;
