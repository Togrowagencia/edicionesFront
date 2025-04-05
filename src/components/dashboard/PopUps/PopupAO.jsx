import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import { getGoogleBook } from "../../../api/googleBooks";
import { InputRow } from "../../inputs/InputRow";
import { Rows } from "./AO/Rows";
import Drop from "./AO/Drop";
<<<<<<< Updated upstream
import { createPublishing } from "../../../api/editorial";
import { TablaAO } from "./TablaAO";
import Notify from "simple-notify";
import { getPublishing } from "../../../api/editorial";
import Masivamente from "./Masivamente";
=======
import { createClasification } from "../../../api/clasification";
import Swal from "sweetalert2";
import { TablaAO } from "./TablaAO";
import Notify from "simple-notify";
import {getPublishing,createPublishing} from "../../../api/editorial"
import { createItem } from "../../../utils/agregarObras";
>>>>>>> Stashed changes

// Función helper para calcular el precio de venta
const calcularPrecioVenta = (costo, pct) => {
  const precio = parseFloat(costo) * (1 + parseFloat(pct) / 100);
  return Math.round(precio);
};

<<<<<<< Updated upstream


const formatNumber = (num) => {
  if (!num) return "";
  const parsed = parseFloat(num.toString().replace(/\./g, ""));
  if (isNaN(parsed)) return "";
  return parsed.toLocaleString("es-AR"); 
};


const PopupAO = ({ isPopupOpen, handlePopupClose, datos, reload }) => {
  const [book, setBook] = useState([]);
  const [percentage, setPercentage] = useState("");
  const [segundoDrawerVisible, setSegundoDrawerVisible] = useState(false);
=======
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    obraPropia: true,
    obraConsignacion: false,
    iva: false,
  });
>>>>>>> Stashed changes

  const [inputValues, setInputValues] = useState({
    isbn: "",
    nombreObra: "",
    proveedor: "",
    editorial: "",
    autor: "",
    contenido: "",
    clasificacion: "",
    genero: "",
    idioma : "",
    nroPaginas : "",
    peso:"",
    dimesiones:"",
    costoLibro: "",
    precioVenta: "",
    Formato:"",
    cantidad: "",
    dimensiones: "",
    edicion: "",
    formato: "",
    idioma: "",
    paginas: "",
    peso: "",
    presentacion: "",
    descripcion: "",
  });
<<<<<<< Updated upstream

  const rows = useMemo(() => Rows(datos), [datos]);

  const abrirSegundoDrawer = useCallback(() => {
    handlePopupClose();
    setSegundoDrawerVisible(true);
  }, [handlePopupClose]);

  useEffect(() => {
    const costo = parseFloat(inputValues.costoLibro.toString().replace(/\./g, "")) || 0;
    const pct = parseFloat(percentage) || 0;
    const precioCalculado = calcularPrecioVenta(costo, pct);
    if (inputValues.precioVenta !== precioCalculado) {
      setInputValues((prev) => ({ ...prev, precioVenta: precioCalculado }));
    }
  }, [inputValues.costoLibro, percentage, inputValues.precioVenta]);

  const handleInputChange = useCallback(
    (name, value) => {
      setInputValues((prev) => {
        let newData = { ...prev };

        if (name === "costoLibro") {
          const rawValue = value.replace(/\./g, "");
          const costo = parseFloat(rawValue) || 0;
          newData[name] = rawValue;
          newData.precioVenta = calcularPrecioVenta(costo, percentage || 0);
          return newData;
        }

        newData[name] = value;

        if (name === "proveedor") {
          const selectedProvider = datos.Providers.find(
            (provider) => provider.id == value
          );
          if (selectedProvider) {
            setPercentage(selectedProvider.percentage);
          }
        }

        if (name === "editorial") {
          const editorialName = Array.isArray(value) ? value[0] : value;
          if (datos.Publishing) {
            const found = datos.Publishing.find(
              (item) => item.name == editorialName
            );
            if (found && found.provider) {
              newData.proveedor = found.provider.id;
              setPercentage(found.provider.percentage);
            }
          }
        }

        return newData;
      });
    },
    [datos.Providers, datos.Publishing, percentage]
  );

  const handleBook = useCallback(async () => {
    try {
      const respuesta = await getGoogleBook(inputValues.isbn);
      if (respuesta.data.volumeInfo) {
        setBook(respuesta.data.volumeInfo);
        const publisher = respuesta.data.volumeInfo.publisher || "";
        let editorialValue = publisher;
        let associatedProvider = "";
        if (datos.Publishing) {
          const found = datos.Publishing.find(
            (item) => item.name.toLowerCase() === publisher.toLowerCase()
          );
          if (found) {
            editorialValue = found.id;
            associatedProvider = found.provider ? found.provider.id : "";
          }
        }
        setInputValues((prevData) => ({
          ...prevData,
          nombreObra: respuesta.data.volumeInfo.title || "",
          editorial: editorialValue,
          autor: respuesta.data.volumeInfo.authors || "",
          contenido: respuesta.data.volumeInfo.contentVersion || "",
          genero: respuesta.data.volumeInfo.categories || "",
          paginas: respuesta.data.volumeInfo.pageCount || "",
          descripcion: respuesta.data.volumeInfo.description || "",
          idioma:
            respuesta.data.volumeInfo.language === "es"
              ? "Español"
              : respuesta.data.volumeInfo.language || "",
          image: respuesta.data.volumeInfo.imageLinks
            ? respuesta.data.volumeInfo.imageLinks.thumbnail
            : "",
          proveedor: associatedProvider || prevData.proveedor,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  }, [inputValues.isbn, datos.Publishing]);

  useEffect(() => {
    if (inputValues.isbn.trim() !== "") {
      handleBook();
    }
  }, [inputValues.isbn, handleBook]);

  const handleSubmit = async () => {
    console.log(inputValues);
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

    const editorialExists = datos.Publishing?.some(
      (pub) =>
        String(pub.id) === String(inputValues.editorial) ||
        (pub.name &&
          pub.name.toLowerCase() === inputValues.editorial[0].toLowerCase())
    );

=======
  
    const editorialExists = datos.Publishing?.some((pub) => {
      // Se compara por id y por nombre (ignorando mayúsculas)
      return (
        String(pub.id) === String(inputValues.editorial) ||
        (pub.name &&
          pub.name.toLowerCase() ===
            String(inputValues.editorial).toLowerCase())
      );
    });
  
>>>>>>> Stashed changes
    if (!editorialExists) {
      try {
        const response = await createPublishing({
          name: inputValues.editorial[0],
          id_provider: String(inputValues.proveedor).trim(),
        });
<<<<<<< Updated upstream
        let editorialCreada = Array.isArray(response.data)
          ? response.data.find(
              (pub) =>
                pub.name.toLowerCase() === inputValues.editorial.toLowerCase()
            )
          : response.data;

        if (editorialCreada) {
          reload(getPublishing, "Publishing");
=======
  
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
          console.log(reload)
>>>>>>> Stashed changes
          setInputValues((prev) => ({
            ...prev,
            editorial: editorialCreada.name,
          }));
        }
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
<<<<<<< Updated upstream
  };
=======
    createItem(inputValues.clasificacion,createClasification,datos.Classification,"Classification",setInputValues)
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
      // Si se actualiza la editorial, buscamos el objeto en Publishing
      // y, si se encuentra, actualizamos el proveedor con el id asociado
      if (name === "editorial") {
        // Suponemos que value es un array (porque el select está en mode="tags")
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
      // Si se actualiza el proveedor, se puede filtrar la lista de editoriales (opcional)
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
        name: "proveedor",
        placeholder: "Proveedor",
        hasArrow: true,
        multiselect: false,
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
        multiselect: false,
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
        multiselect: false,
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
        iconSrc: "/public/svg/popup-ao/costo.svg",
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
        iconSrc: "",
        placeholder: "Edición",
    
      },
      
      {
        name: "Formato",
        iconSrc: "",
        placeholder: "Formato",
      },
      {
        name: "Idioma",
        iconSrc: "",
        placeholder: "Idioma",
      },
    ],
    [
      {
        name: "Nro paginas",
        iconSrc: "",
        placeholder: "Numero de páginas",
      },
      {
        name: "Cantidad",
        placeholder: "Cantidad",
        iconSrc: "/public/svg/popup-ao/costo.svg",
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
>>>>>>> Stashed changes

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
        {/* Botón de cierre */}
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
          <p className="h3 verde-corporativo">Añadir nueva obra</p>
          <div className="w-[13%] h-full flex justify-end items-start">
            <button className="blanco bg-[#00733C] px-2 py-1 rounded-[3px] flex gap-2">
              <p className="textos-bold">Añadir masivamente</p>
              <img src="/svg/agregarmasi.svg" alt="" />
            </button>
          </div>
        </div>
<<<<<<< Updated upstream

        <Masivamente
          visible={segundoDrawerVisible}
          onClose={() => setSegundoDrawerVisible(false)}
        />

        <div className="flex gap-2 min-h-[45%] mx-[50px] my-5">
          <div className="h-full w-[75%] flex flex-col gap-2">
=======
        <div className="grid grid-flow-col grid-cols-2 h-[45%]">
          <div className="h-full w-[145%]">
            {/* Renderizar las filas de campos con valores y manejadores */}
>>>>>>> Stashed changes
            {rows.map((fields, index) => (
              <InputRow
                key={index}
                fields={fields}
                className="h-[22%]"
                values={{
                  ...inputValues,
                  costoLibro: formatNumber(inputValues.costoLibro),
                  precioVenta: formatNumber(inputValues.precioVenta),
                }}
                onChange={handleInputChange}
              />
            ))}
<<<<<<< Updated upstream

            <div className="flex flex-col w-[100%]">
              <textarea
                rows="2"
                className="peer w-full bg-white border border-[#000] rounded-[10px] transition-all duration-300 ease focus:outline-none focus:border-green-600 negro shadow-sm placeholder:text-gray-700 placeholder:text-md px-2 py-2 resize-none overflow-auto"
                placeholder="Descripción"
                value={inputValues.descripcion}
                onChange={(e) =>
                  handleInputChange("descripcion", e.target.value)
                }
              ></textarea>
=======
            {/* Checkboxes y textos */}
            <div className="w-full h-[37%] flex flex-col gap-2 justify-start px-4 py-10">
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
>>>>>>> Stashed changes
            </div>
          </div>

          <div className="h-[350px] w-[25%] rounded-[10px] flex flex-col justify-center">
            <div className="h-full flex justify-center">
              <Drop initialImageUrl={inputValues.image} />
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={handleSubmit}
                className="blanco bg-[#00733C] px-2 py-2 mt-2 rounded-[3px] flex gap-2 w-[75%] justify-center items-center"
              >
                <p className="textos-bold">Agregar obra +</p>
              </button>
            </div>
          </div>
        </div>

<<<<<<< Updated upstream
        <div className="flex flex-col items-start">
          <div className="w-auto h-[10%] flex gap-2 items-start relative mx-[4%]">
=======
        <div className="flex flex-col items-start mt-[8%]">
          <div className="w-auto h-[10%] flex gap-2 items-start justify-start my-[1%] relative mx-[1.5%]">
>>>>>>> Stashed changes
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
