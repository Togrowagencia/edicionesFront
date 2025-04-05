import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import { getGoogleBook } from "../../../api/googleBooks";
import { InputRow } from "../../inputs/InputRow";
import { Rows } from "./AO/Rows";
import Drop from "./AO/Drop";
import { createPublishing } from "../../../api/editorial";
import { TablaAO } from "./TablaAO";
import Notify from "simple-notify";
import { getPublishing } from "../../../api/editorial";
import Masivamente from "./Masivamente";

// Función helper para calcular el precio de venta
const calcularPrecioVenta = (costo, pct) => {
  const precio = parseFloat(costo) * (1 + parseFloat(pct) / 100);
  return Math.round(precio);
};



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
    dimensiones: "",
    edicion: "",
    formato: "",
    idioma: "",
    paginas: "",
    peso: "",
    presentacion: "",
    descripcion: "",
  });

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

    const editorialExists = datos.Publishing?.some(
      (pub) =>
        String(pub.id) === String(inputValues.editorial) ||
        (pub.name &&
          pub.name.toLowerCase() === inputValues.editorial[0].toLowerCase())
    );

    if (!editorialExists) {
      try {
        const response = await createPublishing({
          name: inputValues.editorial[0],
          id_provider: String(inputValues.proveedor).trim(),
        });
        let editorialCreada = Array.isArray(response.data)
          ? response.data.find(
              (pub) =>
                pub.name.toLowerCase() === inputValues.editorial.toLowerCase()
            )
          : response.data;

        if (editorialCreada) {
          reload(getPublishing, "Publishing");
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
  };

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
                values={{
                  ...inputValues,
                  costoLibro: formatNumber(inputValues.costoLibro),
                  precioVenta: formatNumber(inputValues.precioVenta),
                }}
                onChange={handleInputChange}
              />
            ))}

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

        <div className="flex flex-col items-start">
          <div className="w-auto h-[10%] flex gap-2 items-start relative mx-[4%]">
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
