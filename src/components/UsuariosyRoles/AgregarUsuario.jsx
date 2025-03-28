import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import BotonAgregar from "../inputs/BotonAgregar";
import Roles from "../Data/UsuariosyRoles/Roles";
import { getWarehouses } from "../../api/warehouse";

const AgregarUsuario = ({
  isPopupOpen,
  handlePopupClose,
  text,
  data,
  opcion,
  reload,
}) => {
  const [texto, setText] = useState(text);
  const [opcionn, setOpcion] = useState(opcion);
  const [warehouse, setwarehouse] = useState([]);
  const [formData, setFormData] = useState({
    telefono: "",
    nombre: "",
    correo: "",
    cargo: "",
    tienda: "",
    documento: "",
    password: "",
    rol: "",
    descuento: "",
  });

  useEffect(() => {
    const fetchwarehouse = async () => {
      try {
        const response = await getWarehouses();
        setwarehouse(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchwarehouse();
  }, []);
  
  useEffect(() => {
    if (data) {
      setFormData({
        telefono: data.telefono || "",
        nombre: data.name || "",
        correo: data.email || "",
        cargo: data.charge || "",
        tienda: data.warehouse || "",
        documento: data.id || "",
        password: data.password || "",
        rol: data.role
          ? data.role === "admin"
            ? "Administrador"
            : "Vendedor"
          : "",
        descuento: data.descuento || "",
      });
    }
  }, [data]);
  // Add state for form values


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    let requiredFields = [];
    if (texto == "Agregar usuario") {
      requiredFields = [
        formData.nombre,
        formData.correo,
        formData.cargo,
        formData.tienda,
        formData.documento,
        formData.password,
        formData.rol,
      ];
    } else if (texto == "Editar usuario") {
      requiredFields = [
        formData.nombre,
        formData.correo,
        formData.cargo,
        formData.tienda,
        formData.documento,
        formData.rol,
      ];
    }

    return requiredFields.every((field) => field !== ""); // Verifica que todos los campos no estén vacíos
  };

  return (
    <div className="relative overflow-x-hidden">
      <Drawer
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        width={600}
        closable={false}
        bodyStyle={{ padding: "16px" }}
        drawerStyle={{ borderRadius: "10px 10px 10px 10px", height: "100%" }}
      >
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
            className="w-6 h-6"
          />
        </div>
        <div className="flex items-center px-4 ">
          <h2 className="text-2xl font-semibold verde-corporativo mt-4">
            {text}
          </h2>
          <hr />
          <img
            src="/public/svg/ControldeVentas/CdV.svg"
            alt="Icono"
            className="m-auto"
          />
        </div>

        <div className="w-full h-[6%] flex ">
          <div className="flex flex-col ml-[10px] gap-2 justify-center w-[80%]">
            <p className="h3 mx-1">{formData.nombre}</p>
            <p className="textos-bold gris-perla mx-2">{formData.cargo}</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 bg-white rounded-lg w-full px-2 overflow-hidden my-5 py-2">
          {[
            {
              label: "Teléfono",
              name: "telefono",
              type: "text",
              placeholder: "000 000 0000",
            },
            { label: "Nombre", name: "nombre", type: "text" },
            {
              label: "Correo",
              name: "correo",
              type: "email",
              placeholder: "correo@correo.com",
            },
            { label: "Cargo", name: "cargo" },
            {
              label: "Seleccione una tienda",
              name: "tienda",
              isSelect: true,
              defaultOption: formData.tienda.name,
              options: warehouse.map((tienda) => ({
                value: tienda.id,
                label: tienda.name,
              })),
            },
            {
              label: "Documento de Identidad",
              name: "documento",
              placeholder: "0.000.000",
            },
            {
              label: "Contraseña",
              name: "password",
              type: "password",
              placeholder: "**",
            },
            {
              label: "Seleccione un rol",
              name: "rol",
              isSelect: true,
              defaultOption: "",
              options: Roles.map((rol) => ({
                value: rol.nombre,
                label: rol.nombre,
              })),
            },
            {
              label: "Descuento",
              name: "descuento",
              type: "text",
              placeholder: "%",
            },
          ].map((field, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-300"
            >
              <label className="block gris-perla flex-shrink-0">
                {field.label}
              </label>
              {field.isSelect ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none bg-transparent text-end"
                >
                  <option value="">{field.defaultOption || ""}</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option.value}>
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
                  className="w-full max-w-full focus:outline-none bg-transparent dark:textos text-end p-2" // p-2 para padding controlado
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-end pr-[10px] pt-[20px]">
          <BotonAgregar
            texto={texto}
            opcion={opcionn}
            datos={{
              id: data.id,
              name: formData.nombre,
              charge: formData.cargo,
              email: formData.correo,
              password: formData.password,
              role: formData.rol == "Administrador" ? "admin" : "vendedor",
              authStrategy: "local",
              id_warehouse: formData.tienda,
              blocked: false,
              resetPasswordToken: null,
            }}
            onUpdate={() => {
              setFormData({
                telefono: "",
                nombre: "",
                correo: "",
                cargo: "",
                tienda: "",
                documento: "",
                password: "",
                rol: "",
                descuento: "",
              });
              reload();
              handlePopupClose();
            }}
            disabled={!isFormValid()}
          />
        </div>
      </Drawer>
    </div>
  );
};

AgregarUsuario.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default AgregarUsuario;