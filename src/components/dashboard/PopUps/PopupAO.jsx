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
import { createPublishing } from "../../../api/editorial";
import Swal from "sweetalert2";
import { TablaAO } from "./TablaAO";
import Notify from "simple-notify";
import { getPublishing } from "../../../api/editorial";
import { createItem } from "../../../utils/agregarObras";
import Masivamente from "./Masivamente";

const PopupAO = ({
  isPopupOpen,
  handlePopupClose,
  datos,
  sindatos,
  reload,
}) => {
  const [book, setBook] = useState([]);
  const [editorial, setEditorial] = useState("");

  const [segundoDrawerVisible, setSegundoDrawerVisible] = useState(false);
  const abrirSegundoDrawer = () => {
    handlePopupClose(); // Cierra el primer Drawer
    setSegundoDrawerVisible(true); // Abre el segundo
  };
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
    dimesiones: "",
    edicion: "",
    formato: "",
    idioma: "",
    paginas: "",
    peso: "",
    presentacion: "",
    descripcion: "",
  });
  //** los formatos son en pasta dura o blanda*/
  //** numero de paginas */
  //** dimensiones */
  //** idioma  */
  //** peso *//
  //* funcion de repeticion en donde los libros de menor valor son los que se van a añadir a la promocion *//
  //* Las promociones me deben afectar cotizaciones   *//

  const handleSubmit = async () => {
    console.log(inputValues);

    // Validar que el proveedor tenga un valor
    if (String(inputValues.proveedor).trim() === "") {
      return new Notify({
        title: "Por favor, rellene todos los campos.",
        status: "warning",
        type: "filled",
        autotimeout: 850,
        autoclose: true,
        position: "left top",
        effect: "slide",
        gap: 20,
      });
    }

    const editorialExists = datos.Publishing?.some((pub) => {
      // Se compara por id y por nombre (ignorando mayúsculas)
      return (
        String(pub.id) === String(inputValues.editorial) ||
        (pub.name &&
          pub.name.toLowerCase() ===
            String(inputValues.editorial).toLowerCase())
      );
    });

    if (!editorialExists) {
      try {
        const response = await createPublishing({
          name: inputValues.editorial[0],
          id_provider: String(inputValues.proveedor).trim(),
        });

        let editorialCreada = null;
        // Si response.data es un array, buscar la editorial
        if (Array.isArray(response.data)) {
          editorialCreada = response.data.find(
            (pub) =>
              pub.name.toLowerCase() === inputValues.editorial.toLowerCase()
          );
        } else {
          // Sino, se asume que response.data es el objeto creado
          editorialCreada = response.data;
        }
        console.log("Editorial creada:", editorialCreada);
        if (editorialCreada) {
          reload(getPublishing, "Publishing");
          console.log(reload);
          setInputValues((prev) => ({
            ...prev,
            editorial: editorialCreada.name,
          }));
        }
        console.log(inputValues);
      } catch (error) {
        console.error("Error al crear la editorial", error);
        return new Notify({
          title: "Error al crear la editorial",
          status: "error",
          type: "filled",
          autotimeout: 850,
          autoclose: true,
          position: "left top",
          effect: "slide",
          gap: 20,
        });
      }
    }
    console.log("Submit final:", inputValues);
  };
  const handleBook = async () => {
    try {
      const respuesta = await getGoogleBook(inputValues.isbn);
      console.log(datos);
      if (respuesta.data.volumeInfo) {
        setBook(respuesta.data.volumeInfo);
        const publisher = respuesta.data.volumeInfo.publisher || "";
        let editorialValue = publisher; // Por defecto, la cadena
        let associatedProvider = ""; // Por defecto, vacío
        if (datos.Publishing) {
          const found = datos.Publishing.find(
            (item) => item.name.toLowerCase() === publisher.toLowerCase()
          );
          if (found) {
            editorialValue = found.id; // Se asigna el id de la editorial
            associatedProvider = found.provider ? found.provider.id : "";
          }
        }
        setInputValues((prevData) => {
          const newData = {
            ...prevData,
            nombreObra: respuesta.data.volumeInfo.title || "",
            editorial: editorialValue,
            autor: respuesta.data.volumeInfo.authors || "",
            contenido: respuesta.data.volumeInfo.contentVersion || "",
            genero: respuesta.data.volumeInfo.categories || "",
            paginas: respuesta.data.volumeInfo?.pageCount || "",
            descripcion: respuesta.data.volumeInfo?.description || "",
            idioma:
              respuesta.data.volumeInfo.language === "es"
                ? "Español"
                : respuesta.data.volumeInfo.language || "",

            image: respuesta.data.volumeInfo.imageLinks
              ? respuesta.data.volumeInfo.imageLinks.thumbnail
              : "",
            proveedor: associatedProvider || prevData.proveedor,
          };
          console.log("newData", newData);
          return newData;
        });
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
    setInputValues((prev) => {
      let newData = { ...prev, [name]: value };

      if (name === "proveedor") {
        // Buscar el proveedor en la lista de proveedores
        console.log(value);
        console.log(datos.Providers);
        const selectedProvider = datos.Providers.find(
          (provider) => provider.id === value
        );

        if (selectedProvider) {
          // Imprimir el percentage del proveedor
          console.log(
            `Proveedor seleccionado: ${selectedProvider.corporate_name}`
          );
          console.log(
            `Percentage del proveedor: ${selectedProvider.percentage}`
          );
        } else {
          console.log("Proveedor no encontrado");
        }
      }

      // Si se actualiza la editorial, actualizamos el proveedor basado en la editorial
      if (name === "editorial") {
        const editorialId = Array.isArray(value) ? value[0] : value;
        if (datos.Publishing) {
          const found = datos.Publishing.find(
            (item) => item.id === editorialId
          );
          if (found && found.provider) {
            newData.proveedor = found.provider.id;
          }
        }
      }

      return newData;
    });
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
        name: "editorial",
        placeholder: "Editorial",
        hasArrow: true,
        multiselect: false,
        options: datos.Publishing
          ? datos.Publishing.map((item) => ({
              value: item.id,
              label: item.name,
            }))
          : [],
      },
    ],
    [
      {
        name: "proveedor",
        placeholder: "Proveedor",
        hasArrow: true,
        multiselect: false,
        options: datos.Providers
          ? datos.Providers.map((item) => ({
              value: item.id,
              label: item.corporate_name,
              percentage: item.percentage,
            }))
          : [],
      },
      {
        name: "autor",
        placeholder: "Autor",
        hasArrow: true,
        multiselect: true,
        options: datos.Author
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
        multiselect: false,
        options: datos.Content
          ? datos.Content.map((item) => ({
              value: item.id,
              label: item.name,
            }))
          : [],
      },
    ],
    [
      {
        name: "clasificacion",
        placeholder: "Clasificación",
        hasArrow: true,
        multiselect: true,
        options: datos.Classification
          ? datos.Classification.map((item) => ({
              value: item.id,
              label: item.name,
            }))
          : [],
      },
      {
        name: "genero",
        placeholder: "Género",
        hasArrow: true,
        multiselect: true,
        options: datos.Gender
          ? datos.Gender.map((item) => ({
              value: item.id,
              label: item.name,
            }))
          : [],
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
        iconSrc: "/public/svg/popup-ao/precio.svg",
        placeholder: "Precio de venta",
      },
      {
        name: "Cantidad",
        iconSrc: "",
        placeholder: "Cantidad",
      },
      {
        name: "Dimensiones",
        iconSrc: "",
        placeholder: "Dimensiones",
      },
    ],
    [
      {
        name: "Edicion",
        iconSrc: "/public/svg/popup-ao/NDLO.svg",
        placeholder: "Edición",
      },

      {
        name: "Formato",
        iconSrc: "/public/svg/popup-ao/NDLO.svg",
        placeholder: "Formato",
      },
      {
        name: "idioma",
        iconSrc: "",
        placeholder: "Idioma",
      },
    ],
    [
      {
        name: "paginas",
        iconSrc: "",
        placeholder: "Numero de páginas",
      },
      {
        name: "Peso",
        placeholder: "Peso",
        iconSrc: "/public/svg/popup-ao/costo.svg",
      },
      {
        name: "Presentacion",
        placeholder: "Presentacion",
        iconSrc: "/public/svg/popup-ao/NDLO.svg",
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
            right: 30,
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

        <div className="flex items-center gap-4 m-2 ml-[50px]">
          <img
            src="/public/svg/popup-ao/agregar-obra.svg"
            alt="Icono"
            className="w-33px h-33px ml-[10px]"
          />
          <p className="h3 verde-corporativo ">Añadir nueva obra</p>
          <div className="w-[13%] h-full flex justify-end items-start">
            <button
              onClick={abrirSegundoDrawer}
              className="blanco bg-[#00733C] px-2 py-1 rounded-[3px] flex gap-2"
            >
              <p className="textos-bold">Añadir masivamente</p>
              <img src="/svg/agregarmasi.svg" alt="" />
            </button>
          </div>
        </div>
        <Masivamente
          visible={segundoDrawerVisible}
          onClose={() => setSegundoDrawerVisible(false)}
        />
        <div className="flex gap-2 min-h-[45%] mx-[50px] my-5">
          <div className="h-full w-[75%] flex flex-col gap-2">
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

            <div className="flex flex-col w-[100%] ">
              <textarea
                id="message"
                rows="5"
                className="peer w-full full bg-white border border-[#000] rounded-[10px] transition-all duration-300 ease focus:outline-none focus:border-green-600 negro shadow-sm focus:shadow placeholder:text-gray-700 placeholder:text-md placeholder: textos px-2 py-2"
                placeholder="Descripción"
                value={inputValues.descripcion} // Asignar el valor de 'descripcion' del estado
                onChange={(e) =>
                  handleInputChange("descripcion", e.target.value)
                } // Actualizar el estado cuando el valor cambie
              ></textarea>
            </div>
          </div>
          <div className="h-[350px] w-[25%] justify-center  rounded-[10px]">
            <div className="h-full flex justify-center">
              <Drop initialImageUrl={inputValues.image} />
            </div>

            <div className="py-2 w-[100%]  flex justify-center">
              <button
                onClick={handleSubmit}
                className="blanco bg-[#00733C] px-2 py-1 rounded-[3px] flex gap-2 w-[75%] py-2 justify-center items-center"
              >
                <p className="textos-bold">Agregar obra +</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start ">
          <div className="w-auto h-[10%] flex gap-2 items-start justify-start relative mx-[4%]">
            <p className="h4 verde-corporativo text-start">Compra de la obra</p>
          </div>

          <div className="w-full h-full flex justify-center">
            <TablaAO />
          </div>

          <div className="flex gap-4 w-full justify-end p-4 mt-[-75px] px-[60px]">
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
