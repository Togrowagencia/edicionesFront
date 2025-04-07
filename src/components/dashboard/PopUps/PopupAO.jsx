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
import { calcularPrecioVenta, formatNumber } from "../../../utils/agregarObras";


const PopupAO = ({ isPopupOpen, handlePopupClose, datos, reload, onConfirm }) => {
  const [book, setBook] = useState([]);
  const [percentage, setPercentage] = useState("");
  const [segundoDrawerVisible, setSegundoDrawerVisible] = useState(false);
  const [libros, setLibros] = useState([]);
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
    dimensions: "",
    cost: "",
    price_vent: "",
    quantity: "",
    dimensions: "",
    edition: "",
    name_format: "",
    language: "",
    peso: "",
    name_presentation: "",
    description: "",
    file: "",
  });

  const rows = useMemo(() => Rows(datos), [datos]);

  const handleEdit = (item) => {
    console.log("item")
    console.log(item)
    setInputValues({
      isbn: item.isbn,
      name: item.name,
      proveedor: item.proveedor,
      name_publishing: item.name_publishing,
      authors: item.authors,
      name_content: item.name_content,
      classification: item.classification,
      genders: item.genders,
      number_pages: item.number_pages,
      peso: item.peso,
      dimensions: item.dimensions,
      cost: item.cost,
      price_vent: item.price_vent,
      quantity: item.quantity,
      dimensions: item.dimensions,
      edition: item.edition,
      name_format:item.name_format,
      language:item.language,
      peso: item.peso,
      name_presentation: item.name_presentation,
      description: item.description,
      file: item.file,
    });
    
  };

  const abrirSegundoDrawer = useCallback(() => {
    handlePopupClose();
    setSegundoDrawerVisible(true);
  }, [handlePopupClose]);

  useEffect(() => {
    const costo = parseFloat(inputValues.cost.toString().replace(/\./g, "")) || 0;
    const pct = parseFloat(percentage) || 0;
    const precioCalculado = calcularPrecioVenta(costo, pct);
    if (inputValues.price_vent !== precioCalculado) {
      setInputValues((prev) => ({ ...prev, price_vent: precioCalculado }));
    }
  }, [inputValues.cost, percentage, inputValues.price_vent]);

  const handleInputChange = useCallback(
    (name, value) => {
      setInputValues((prev) => {
        let newData = { ...prev };

        if (name === "cost") {
          const rawValue = (value || "").toString().replace(/\./g, ""); // Asegúrate de que 'value' sea una cadena
          const costo = parseFloat(rawValue) || 0;
          newData[name] = rawValue;
          newData.price_vent = calcularPrecioVenta(costo, percentage || 0);
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

        if (name === "name_publishing") {

          const editorialName = Array.isArray(value) ? value[0] : value;
          console.log(editorialName)
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
        const Book = respuesta.data.volumeInfo;
        const publisher = Book.publisher || "";
        let editorialValue = publisher;
        let associatedProvider = "";
        if (datos.Publishing) {
          const found = datos.Publishing.find(
            (item) => item.name.toLowerCase() === publisher.toLowerCase()
          );
          if (found) {
            editorialValue = found.name;
            associatedProvider = found.provider ? found.provider.id : "";
            setPercentage(found.provider.percentage)
          }
        }
        setInputValues((prevData) => ({
          ...prevData,
          name: Book.title || "",
          name_publishing: editorialValue,
          authors: Book.authors || "",
          genders: Book.categories || "",
          number_pages: Book.pageCount || "",
          description: Book.description || "",
          language:
            Book.language === "es"
              ? "Español"
              : Book.language || "",
          file: Book.imageLinks
            ? Book.imageLinks.thumbnail
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
    // Verificar si el proveedor está vacío
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

    // Verificar si la editorial existe
    const editorialExists = datos.Publishing?.some(
      (pub) =>
        String(pub.id) === String(inputValues.name_publishing) ||
        (pub.name &&
          typeof inputValues.name_publishing === "string" &&
          pub.name.toLowerCase() === inputValues.name_publishing.toLowerCase())
    );

    // Si la editorial no existe, creamos una nueva
    if (!editorialExists) {
      try {
        const response = await createPublishing({
          name: inputValues.name_publishing,
          id_provider: String(inputValues.proveedor).trim(),
        });
        let editorialCreada = Array.isArray(response.data)
          ? response.data.find(
            (pub) =>
              pub.name.toLowerCase() === inputValues.name_publishing.toLowerCase()
          )
          : response.data;

        // Si la editorial se crea correctamente, actualizamos el estado
        if (editorialCreada) {
          reload(getPublishing, "Publishing");
          setInputValues((prev) => ({
            ...prev,
            name_publishing: editorialCreada.name,  // Actualizar el nombre de la editorial en el estado
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

    // Asegúrate de que el libro no esté ya en la lista de libros
    const isDuplicate = libros.some((libro) => libro.isbn === inputValues.isbn);
    if (isDuplicate) {
      return new Notify({
        title: "Este libro ya ha sido agregado.",
        status: "warning",
        type: "filled",
        autotimeout: 850,
        autoclose: true,
        position: "left top",
        effect: "slide",
        gap: 20,
      });
    }

    // Crear una copia de inputValues sin el campo proveedor
    const { proveedor, ...inputValuesWithoutProveedor } = inputValues;

    // Agregar el nuevo libro al estado (sin el proveedor)
    setLibros((prevLibros) => {
      const newLibros = [...prevLibros, inputValuesWithoutProveedor]; // Crear un nuevo array con los libros previos y el nuevo libro
      return newLibros;
    });

    // Limpiar los campos del formulario después de agregar el libro
    setInputValues({
      isbn: "",
      name: "",
      proveedor: "",
      name_publishing: "",
      authors: "",
      name_content: "",
      classification: "",
      genders: "",
      number_pages: "",
      peso: "",
      dimensions: "",
      cost: "",
      price_vent: "",
      quantity: "",
      edition: "",
      name_format: "",
      language: "",
      name_presentation: "",
      description: "",
      file: "",
    });

    // Mostrar una notificación de éxito
    new Notify({
      title: "Libro agregado con éxito",
      status: "success",
      type: "filled",
      autotimeout: 850,
      autoclose: true,
      position: "left top",
      effect: "slide",
      gap: 20,
    });

    // El estado de "libros" no se actualizará inmediatamente, así que utiliza useEffect para ver los cambios
    console.log("Intento de agregar libro: ", inputValuesWithoutProveedor);
  };

  // Usar useEffect para monitorear el estado de los libros y verificar cambios
  useEffect(() => {
    console.log("Estado actualizado de libros:", libros);
  }, [libros]);

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
                  cost: formatNumber(inputValues.cost),
                  price_vent: formatNumber(inputValues.price_vent),
                }}
                onChange={handleInputChange}
              />
            ))}

            <textarea
              rows="2"
              className="w-full bg-white border border-black rounded-[10px] focus:outline-none focus:border-green-600 px-2 py-2 resize-none"
              placeholder="Descripción"
              value={inputValues.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div className="w-[25%] flex flex-col justify-center">
            <div className="h-[350px] flex justify-center">
              <Drop initialImageUrl={inputValues.file} />
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
          <div className="w-auto h-[10%] flex gap-2 items-start relative mx-[4%]">
            <p className="h4 verde-corporativo text-start">Compra de la obra</p>
          </div>
          <div className="w-full h-full flex justify-center">
            <TablaAO datos={libros} onEdit={handleEdit} />
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