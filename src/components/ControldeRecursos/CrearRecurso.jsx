import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import BotonAgregarRecurso from "../inputs/BotonAgregarRecurso";
import { baseurl2 } from "../../utils/baseurl";

const AgregarRecurso = ({
  isPopupOpen,
  dataedit,
  handlePopupClose,
  fields,
  title,
  opciones,
  apifunc,
  reload,
}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (dataedit && opciones === "editar") {
      setFormData(
        fields.reduce(
          (acc, field) => {
            if (field.isSelect) {
              const foundOption = field.options.find(
                (option) =>
                  (typeof option === "object" ? option.value : option) ===
                  dataedit[field.name]
              );
              acc[field.name] = foundOption ? foundOption.value : "";
            } else {
              acc[field.name] = dataedit[field.name] || "";
            }
            return acc;
          },
          { id: dataedit.id || "" }
        )
      );
      if (dataedit.file) {
        setImage(baseurl2 + dataedit.file);
      }
    } else {
      setFormData(
        fields.reduce((acc, field) => {
          acc[field.name] = "";
          return acc;
        }, {})
      );
    }
  }, [dataedit, fields, opciones]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [image, setImage] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Actualiza el formData con el objeto File real
      setFormData((prevData) => ({
        ...prevData,
        file: file,
      }));
      // Crea la vista previa de la imagen utilizando FileReader
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
      // Reinicia el valor del input para permitir seleccionar el mismo archivo nuevamente
      e.target.value = "";
    }
  };

  const hasImageField = fields.some((field) => field.name === "file");

  return (
    <Drawer
      placement="right"
      onClose={handlePopupClose}
      open={isPopupOpen}
      width={555}
      closable={false}
      bodyStyle={{ padding: "16px" }}
      drawerStyle={{ borderRadius: "10px 10px 10px 10px", height: "100%" }}
    >
      {/* Botón de cierre personalizado */}
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={handlePopupClose}
      >
        <img
          src="/svg/popup-ao/cerrar (2).svg"
          alt="Cerrar"
          className="w-6 h-6"
        />
      </div>
      <div className="flex items-center space-x-2 px-4 mb-4">
        <h2 className="h3 text-[#00733C]">{title}</h2>
      </div>

      {hasImageField && (
        <div className="w-full flex items-center mt-3 px-4">
          <div className="w-[60px] h-[60px] rounded-full flex justify-center overflow-hidden border-[#00733C] border p-[6px]">
            <img
              src={image || "/svg/usuario.svg"}
              className="w-[35px] h-[45px] object-contain"
              alt="Imagen de usuario"
            />
          </div>
          <div className="rounded-full bg-[#00733C] ml-[-20px] flex items-center justify-center w-[23px] h-[22px] mt-[-50px]">
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="file">
              <img
                src="/svg/camara.svg"
                className="w-[14px] h-[12px]"
                alt="Subir foto"
              />
            </label>
          </div>
          <div className="flex flex-col ml-[10px] gap-2 w-[80%]">
            <p className="text-lg font-semibold">
              {formData.file ? "Archivo Seleccionado" : "Seleccionar archivo"}
            </p>
            {fields.length > 1 && (
              <p className="text-sm text-gray-500">
                {formData.file ? formData.file.name : "Seleccionar archivo"}
              </p>
            )}
          </div>
        </div>
      )}

      <div
        className={`grid ${
          fields.filter((field) => field.type !== "file").length === 1
            ? "grid-cols-1 px-4"
            : "grid-cols-2 px-2"
        } gap-4 bg-white rounded-lg w-full overflow-hidden my-5 py-2`}
      >
        {fields
          .filter((field) => field.type !== "file")
          .map((field, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-300"
            >
              <label
                className={`${
                  fields.length === 1
                    ? "w-full full gris-perla"
                    : "block gris-perla"
                }`}
              >
                {field.label}
              </label>
              {field.isSelect ? (
                <select
                  name={field.name}
                  value={
                    formData[field.name] === undefined
                      ? ""
                      : formData[field.name]
                  }
                  onChange={(e) => {
                    const { name, value } = e.target;
                    const parsedValue =
                      value === "true"
                        ? true
                        : value === "false"
                        ? false
                        : value;
                    setFormData((prevData) => ({
                      ...prevData,
                      [name]: parsedValue,
                    }));
                  }}
                  className="w-full focus:outline-none bg-transparent text-end"
                >
                  <option value="">Seleccione</option>
                  {field.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className={`${
                    fields.length === 1
                      ? "w-full focus:outline-none bg-transparent text-center"
                      : "w-full focus:outline-none bg-transparent text-end"
                  }`}
                />
              )}
            </div>
          ))}
      </div>

      <div className="flex justify-end pr-4 pt-5">
        <BotonAgregarRecurso
          texto={title}
          datos={formData}
          opcion={opciones}
          apiFunc={apifunc}
          onUpdate={() => {
            setFormData(
              fields.reduce((acc, field) => {
                acc[field.name] = "";
                return acc;
              }, {})
            );
            reload();
            setImage(null);
            handlePopupClose();
          }}
          close={handlePopupClose}
        />
      </div>
    </Drawer>
  );
};

AgregarRecurso.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      isSelect: PropTypes.bool,
      options: PropTypes.array,
    })
  ).isRequired,
  dataedit: PropTypes.object, // Permitir que `dataedit` sea opcional
};

export default AgregarRecurso;
