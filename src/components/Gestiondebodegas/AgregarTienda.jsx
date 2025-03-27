import React, { useState } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import BotonAgregarRecurso from "../inputs/BotonAgregarRecurso";
import Roles from "../Data/UsuariosyRoles/Roles";
import Tiendas from "../Data/UsuariosyRoles/Tienda";
import { createWarehouse } from "../../api/warehouse";

const AgregarTienda = ({ isPopupOpen, handlePopupClose, reload }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    city: "",
    file: null, // Ahora se guarda el archivo correctamente
    consignment_amount: "",
    own_amount: "",
    capacity: "",
    total: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Manejo de cambios en inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejo de imagen de usuario
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        file: file, // Se almacena el archivo en formData
      }));

      // Previsualización de la imagen
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

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

      {/* Título del Drawer */}
      <div className="flex items-center space-x-2 px-4 mb-4">
        <h2 className="h3 text-[#00733C]">Detalles de la tienda</h2>
        <img
          src="/svg/ControldeVentas/CdV.svg"
          alt="Icono"
          className="w-6 h-6"
        />
      </div>

      {/* Imagen de Tienda */}
      <div className="w-full flex items-center mt-3 px-4">
        <div className="w-[60px] h-[60px] rounded-full flex justify-center overflow-hidden border-[#00733C] border p-[6px]">
          <img
            src={imagePreview || "/svg/usuario.svg"}
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
          <p className="text-lg font-semibold">{formData.name}</p>
          <p className="text-sm text-gray-500">{formData.city}</p>
        </div>
      </div>

      {/* Formulario */}
      <div className="flex flex-wrap gap-4 bg-white rounded-lg w-full px-4 mt-5">
        {[
          { label: "Nombre de la tienda", name: "name", type: "text" },
         
          { label: "Correo", name: "email", type: "email" },
          
        ].map((field, index) => (
          <div
            key={index}
            className="flex items-end border-b border-gray-300 w-full"
          >
            <label className="block gris-perla flex-shrink-0 w-auto">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              placeholder={field.placeholder || ""}
              className="pl-[10px] focus:outline-none bg-transparent dark textos"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 bg-white rounded-lg w-full px-4 mt-5">
        {[
          
        
          { label: "Ciudad", name: "city", type: "text" },
          { label: "Dirección", name: "address", type: "text" },
          {
            label: "Cantidad en consignación",
            name: "consignment_amount",
            type: "text",
          },
          { label: "Cantidad propia", name: "own_amount", type: "text" },
          { label: "Cantidad máxima", name: "capacity", type: "text" },
          { label: "Cantidad total", name: "total", type: "text" },
        ].map((field, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-300"
          >
            <label className="block gris-perla flex-shrink-0 w-auto">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              placeholder={field.placeholder || ""}
              className="pl-[10px] focus:outline-none bg-transparent dark textos"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end pr-4 pt-5">
        <BotonAgregarRecurso
          texto={"Agregar bodega"}
          datos={formData}
          opcion={"crear"}
          apiFunc={{ create: createWarehouse }}
          onUpdate={() => {
            setFormData({
              name: "",
              address: "",
              email: "",
              city: "",
              file: null,
              consignment_amount: "",
              own_amount: "",
              capacity: "",
              total: "",
            });
            reload();
            setImagePreview(null);
            handlePopupClose();
          }}
          close={handlePopupClose}
        />
      </div>
    </Drawer>
  );
};

AgregarTienda.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default AgregarTienda;
