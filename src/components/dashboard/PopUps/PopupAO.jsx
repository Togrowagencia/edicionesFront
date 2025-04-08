import React, { useState, useEffect, useCallback, useMemo } from "react";
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

const PopupAO = ({
  isPopupOpen,
  handlePopupClose,
  datos,
  reload,
  onConfirm,
}) => {
  const [percentage, setPercentage] = useState("");
  const [segundoDrawerVisible, setSegundoDrawerVisible] = useState(false);
  const [libros, setLibros] = useState([]);
  const [inputValues, setInputValues] = useState({
    isbn: "",
    name: "",
    proveedor: "",
    editorial: "",
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
    dimensions: "",
    edition: "",
    name_format: "",
    language: "",
    peso: "",
    name_presentation: "",
    description: "",
    file: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const resetInputValues = () => {
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
  };

  const rows = useMemo(() => Rows(datos), [datos]);

  const handleEdit = (item) => {
    setIsEditing(true); // Activamos el flag de edición
    setInputValues({
      ...item,
    });
  };

  const abrirSegundoDrawer = useCallback(() => {
    handlePopupClose();
    setSegundoDrawerVisible(true);
  }, [handlePopupClose]);

  useEffect(() => {
    const costo =
      parseFloat(inputValues.cost.toString().replace(/\./g, "")) || 0;
    const pct = parseFloat(percentage) || 0;
    const precioCalculado = calcularPrecioVenta(costo, pct);
    if (inputValues.price_vent !== precioCalculado) {
      setInputValues((prev) => ({ ...prev, price_vent: precioCalculado }));
    }
  }, [inputValues.cost, percentage, inputValues.price_vent, isEditing]); // Añadimos isEditing como dependencia

  const handleInputChange = useCallback(
    (name, value) => {
      console.log("name,value");
      console.log(name, value);
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
          console.log(value);
          if (datos.Publishing) {
            const found = datos.Publishing.find((item) => item.name == value);
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
            setPercentage(found.provider.percentage);
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
          language: Book.language === "es" ? "Español" : Book.language || "",
          file: Book.imageLinks ? Book.imageLinks.thumbnail : "",
          proveedor: associatedProvider || prevData.proveedor,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  }, [inputValues.isbn, datos.Publishing]);

  useEffect(() => {
    if (!isEditing && inputValues.isbn.length === 13) {
      handleBook();
    }
  }, [inputValues.isbn, handleBook, isEditing]);

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

    // Normalizamos el nombre de la editorial (sea string o array)
    const nombreEditorial = Array.isArray(inputValues.name_publishing)
      ? inputValues.name_publishing[0]
      : inputValues.name_publishing;

    // Verificar si la editorial existe en datos.Publishing
    const editorialExists = datos.Publishing?.some((pub) => {
      const pubName = pub.name?.toLowerCase().trim();
      const inputName = nombreEditorial?.toLowerCase().trim();
      return pubName === inputName;
    });

    // Si no existe, la creamos
    if (!editorialExists) {
      try {
        const response = await createPublishing({
          name: nombreEditorial,
          id_provider: String(inputValues.proveedor).trim(),
        });

        let editorialCreada = Array.isArray(response.data)
          ? response.data.find(
              (pub) =>
                pub.name.toLowerCase().trim() ===
                nombreEditorial.toLowerCase().trim()
            )
          : response.data;

        if (editorialCreada) {
          reload(getPublishing, "Publishing");
          setInputValues((prev) => ({
            ...prev,
            name_publishing: editorialCreada.name, // igual que antes
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

    // Evitar duplicados
    const isDuplicate = libros.some((libro) => libro.isbn === inputValues.isbn);
    if (isDuplicate && !isEditing) {
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

    // Si estamos editando
    if (isEditing) {
      setLibros((prevLibros) =>
        prevLibros.map((libro) =>
          libro.isbn === inputValues.isbn ? { ...libro, ...inputValues } : libro
        )
      );
      setIsEditing(false);
    } else {
      // Agregar nuevo libro
      const { proveedor, ...inputValuesWithoutProveedor } = inputValues;
      setLibros((prevLibros) => [...prevLibros, inputValuesWithoutProveedor]);
    }

    resetInputValues();

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
        <div
          className="absolute top-5 right-8 cursor-pointer"
          onClick={handlePopupClose}
        >
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
              className="w-full bg-white border border-black rounded-[10px] focus:outline-none focus:border-green-600 px-2 py-2 resize-none textoss"
              placeholder="Descripción"
              value={inputValues.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div className="w-[25%] flex flex-col justify-center">
            <div className="h-[350px] flex justify-center">
              <Drop
                key={inputValues.file?.name || inputValues.isbn}
                initialImageUrl={
                  inputValues.file instanceof File
                    ? URL.createObjectURL(inputValues.file)
                    : inputValues.file
                }
                onFileChange={(file) => handleInputChange("file", file)}
              />
            </div>
            <div className="w-full flex justify-center mt-2">
              <button
                onClick={handleSubmit}
                className="blanco bg-[#00733C] px-2 py-2 rounded-[3px] flex gap-2 w-[75%] justify-center items-center"
              >
                <p className="textos-bold">
                  {isEditing ? "Finalizar edición" : "Agregar obra +"}
                </p>
              </button>
            </div>

            <div className="w-full flex justify-center mt-1">
              {isEditing && (
                <button
                  onClick={() => {
                    setIsEditing(false); // Puedes agregar la lógica de cancelación aquí
                    resetInputValues();
                  }}
                  className="blanco bg-black px-2 py-2 rounded-[3px] flex gap-2 w-[75%] justify-center items-center mt-2"
                >
                  <p className="textos-bold">Cancelar edición</p>
                </button>
              )}
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
              onClick={() => onConfirm(libros)}
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

export default PopupAO;
