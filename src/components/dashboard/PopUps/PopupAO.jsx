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

const calcularPrecioVenta = (costo, pct) => {
  const precio = parseFloat(costo) * (1 + parseFloat(pct) / 100);
  return Math.round(precio);
};

const formatNumber = (num) => {
  if (!num) return "";
  const parsed = parseFloat(num.toString().replace(/\./g, ""));
  return isNaN(parsed) ? "" : parsed.toLocaleString("es-AR");
};

const PopupAO = ({ isPopupOpen, handlePopupClose, datos, reload, onConfirm }) => {
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
    idioma: "",
    nroPaginas: "",
    peso: "",
    dimensiones: "",
    costoLibro: "",
    precioVenta: "",
    Formato: "",
    cantidad: "",
    edicion: "",
    formato: "",
    paginas: "",
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
      setInputValues(prev => ({ ...prev, precioVenta: precioCalculado }));
    }
  }, [inputValues.costoLibro, percentage, inputValues.precioVenta]);

  const handleInputChange = useCallback((name, value) => {
    setInputValues(prev => {
      const newData = { ...prev };

      if (name === "costoLibro") {
        const rawValue = value.replace(/\./g, "");
        const costo = parseFloat(rawValue) || 0;
        newData[name] = rawValue;
        newData.precioVenta = calcularPrecioVenta(costo, percentage || 0);
        return newData;
      }

      newData[name] = value;

      if (name === "proveedor") {
        const selectedProvider = datos.Providers?.find(provider => provider.id == value);
        if (selectedProvider) setPercentage(selectedProvider.percentage);
      }

      if (name === "editorial") {
        const editorialName = Array.isArray(value) ? value[0] : value;
        const found = datos.Publishing?.find(item => item.name == editorialName);
        if (found?.provider) {
          newData.proveedor = found.provider.id;
          setPercentage(found.provider.percentage);
        }
      }

      return newData;
    });
  }, [datos.Providers, datos.Publishing, percentage]);

  const handleBook = useCallback(async () => {
    try {
      const respuesta = await getGoogleBook(inputValues.isbn);
      if (respuesta.data?.volumeInfo) {
        const { volumeInfo } = respuesta.data;
        setBook(volumeInfo);
        
        const publisher = volumeInfo.publisher || "";
        let editorialValue = publisher;
        let associatedProvider = "";
        
        const found = datos.Publishing?.find(
          item => item.name.toLowerCase() === publisher.toLowerCase()
        );
        
        if (found) {
          editorialValue = found.id;
          associatedProvider = found.provider?.id || "";
        }

        setInputValues(prev => ({
          ...prev,
          nombreObra: volumeInfo.title || "",
          editorial: editorialValue,
          autor: volumeInfo.authors || "",
          contenido: volumeInfo.contentVersion || "",
          genero: volumeInfo.categories || "",
          paginas: volumeInfo.pageCount || "",
          descripcion: volumeInfo.description || "",
          idioma: volumeInfo.language === "es" ? "Español" : volumeInfo.language || "",
          image: volumeInfo.imageLinks?.thumbnail || "",
          proveedor: associatedProvider || prev.proveedor,
        }));
      }
    } catch (error) {
      console.error("Error al obtener libro:", error);
    }
  }, [inputValues.isbn, datos.Publishing]);

  useEffect(() => {
    if (inputValues.isbn.trim()) handleBook();
  }, [inputValues.isbn, handleBook]);

  const handleSubmit = async () => {
    if (!inputValues.proveedor.trim()) {
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
      pub => String(pub.id) === String(inputValues.editorial) || 
        pub.name?.toLowerCase() === inputValues.editorial[0]?.toLowerCase()
    );

    if (!editorialExists) {
      try {
        const response = await createPublishing({
          name: inputValues.editorial[0],
          id_provider: inputValues.proveedor.trim(),
        });
        
        const editorialCreada = Array.isArray(response.data)
          ? response.data.find(pub => 
              pub.name.toLowerCase() === inputValues.editorial.toLowerCase())
          : response.data;

        if (editorialCreada) {
          reload(getPublishing, "Publishing");
          setInputValues(prev => ({
            ...prev,
            editorial: editorialCreada.name,
          }));
        }
      } catch (error) {
        console.error("Error al crear editorial:", error);
        new Notify({
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
        drawerStyle={{ borderRadius: "10px" }}
      >
        {/* Header del Drawer */}
        <div className="absolute top-5 right-8 cursor-pointer" onClick={handlePopupClose}>
          <img
            src="/public/svg/popup-ao/cerrar (2).svg"
            alt="Cerrar popup"
            className="w-6 h-6"
          />
        </div>

        <div className="flex items-center gap-4 m-2 ml-12">
          <img
            src="/public/svg/popup-ao/agregar-obra.svg"
            alt="Icono agregar obra"
            className="w-8 h-8"
          />
          <p className="h3 verde-corporativo">Añadir nueva obra</p>
          <div className="w-[13%] flex justify-end">
            <button 
              className="blanco bg-[#00733C] px-2 py-1 rounded-[3px] flex gap-2"
              onClick={() => setSegundoDrawerVisible(true)}
            >
              <p className="textos-bold">Añadir masivamente</p>
              <img src="/svg/agregarmasi.svg" alt="Icono agregar masivamente" />
            </button>
          </div>
        </div>

        <Masivamente
          visible={segundoDrawerVisible}
          onClose={() => setSegundoDrawerVisible(false)}
        />

        {/* Formulario principal */}
        <div className="flex gap-5 min-h-[45%] mx-12 my-5">
          <div className="w-[75%] flex flex-col gap-2">
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

            <textarea
              rows="2"
              className="w-full bg-white border border-black rounded-[10px] focus:outline-none focus:border-green-600 px-2 py-2 resize-none"
              placeholder="Descripción"
              value={inputValues.descripcion}
              onChange={(e) => handleInputChange("descripcion", e.target.value)}
            />
          </div>

          <div className="w-[25%] flex flex-col justify-center">
            <div className="h-[350px] flex justify-center">
              <Drop initialImageUrl={inputValues.image} />
            </div>
            <div className="w-full flex justify-center mt-2">
              <button
                onClick={handleSubmit}
                className="blanco bg-[#00733C] px-2 py-2 rounded-[3px] flex gap-2 w-[75%] justify-center items-center"
              >
                <p className="textos-bold">Agregar obra +</p>
              </button>
            </div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="flex flex-col items-start">
          <p className="h4 verde-corporativo mx-[4%]">Compra de la obra</p>
          <div className="w-full flex justify-center">
            <TablaAO />
          </div>
          
          <div className="flex gap-4 w-full justify-end p-4 mt-[-75px] px-[60px]">
            <button
              className="bg-[#00733C] flex px-2 py-1 rounded-[3px] gap-2"
              onClick={onConfirm}
            >
              <p className="h4 blanco">Confirmar carga de obras</p>
              <img src="/svg/gestiondeobras/agregar(2).svg" alt="Confirmar" />
            </button>
            <button
              className="bg-[#222] flex px-2 py-1 rounded-[3px] gap-2"
              onClick={handlePopupClose}
            >
              <p className="h4 blanco">Cancelar</p>
              <img src="/svg/gestiondeobras/cancelar.svg" alt="Cancelar" />
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
  datos: PropTypes.object.isRequired,
  reload: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default PopupAO;