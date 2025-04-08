/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Drawer, Select } from "antd";

const { Option } = Select;

const NuevoCliente = ({ isPopupOpen, handlePopupClose }) => {
  return (
    <div className="relative">
      <Drawer
        rootClassName="drawer-nuevocliente"
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        closable={false}
        headerStyle={{ display: "none" }}
        drawerStyle={{ borderRadius: "10px" }}
      >
        {/* Botón de cierre */}
        <div
          className="absolute top-5 right-6 cursor-pointer"
          onClick={handlePopupClose}
        >
          <img
            src="/public/svg/popup-ao/cerrar (2).svg"
            alt="Cerrar"
            className="w-6 h-6"
          />
        </div>

        {/* Header */}
        <div className="flex items-center mb-4">
          <img
            src="/public/svg/popup-ao/agregar-obra.svg"
            alt="Icono"
            className="mx-2 w-5 h-5"
          />
          <p className="gris-urbano h4">Crear cliente</p>
        </div>

        {/* Formulario */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-2">
          {/* Nombre */}
          <div className="flex items-center">
            <label className="gris-perla textos-peques border-b border-[#C1C1C1] py-1">
              Nombre
            </label>
            <input
              type="text"
              className="flex-1 border-b border-[#C1C1C1] px-2 textos negro"
            />
          </div>

          {/* Apellidos */}
          <div className="flex items-center">
            <label className="gris-perla textos-peques border-b border-[#C1C1C1] py-1">
              Apellidos
            </label>
            <input
              type="text"
              className="flex-1 border-b border-[#C1C1C1] px-2 textos negro"
            />
          </div>

          {/* Tipo de ID */}
          <div className="flex items-center">
            <label className="gris-perla textos-peques border-b border-[#C1C1C1] py-[3.4%] w-[25%]">
              Tipo de ID
            </label>
            <Select
              defaultValue="C.C"
              className="custom-select2 flex-1 px-2 border-b border-[#C1C1C1]"
              bordered={false}
            >
              <Option value="C.C">C.C</Option>
              <Option value="T.I">T.I</Option>
              <Option value="NIT">NIT</Option>
            </Select>
          </div>

          {/* Identificación */}
          <div className="flex items-center">
            <label className="gris-perla textos-peques border-b border-[#C1C1C1] py-1">
              Identificación
            </label>
            <input
              type="text"
              className="flex-1 border-b border-[#C1C1C1] px-2 textos negro"
            />
          </div>

          {/* Departamento y Municipio */}
          <div className="flex items-center">
          <label className="gris-perla textos-peques border-b border-[#C1C1C1] py-[1%] w-[35%]">
              Departamento, Municipio
            </label>
            <Select
              className="custom-select2 flex-1 px-2 border-b border-[#C1C1C1] w-[65%]"
              bordered={false}
            >
              <Option value="Antioquia, Medellín">Antioquia, Medellín</Option>
              <Option value="Cundinamarca, Bogotá">Cundinamarca, Bogotá</Option>
            </Select>
          </div>

          {/* Dirección */}
          <div className="flex items-center">
            <label className="gris-perla textos-peques border-b border-[#C1C1C1] py-1">
              Dirección
            </label>
            <input
              type="text"
              defaultValue="Calle 45 #12-34"
              className="flex-1 border-b border-[#C1C1C1] px-2 textos negro"
            />
          </div>

          {/* Número de contacto */}
          <div className="flex items-center">
            <label className="gris-perla textos-peques border-b border-[#C1C1C1] py-1 w-[43%]">
              Número de contacto
            </label>
            <input
              type="text"
              defaultValue="311 310 2713"
              className="flex-1 border-b border-[#C1C1C1] px-2 w-[57%] textos negro"
            />
          </div>

          {/* Correo Electrónico */}
          <div className="flex items-center">
            <label className="gris-perla textos-peques border-b border-[#C1C1C1] py-1 w-[38%]">
              Correo Electrónico
            </label>
            <input
              type="email"
              defaultValue="jmanuel@gmail.com"
              className="flex-1 border-b border-[#C1C1C1] px-2 w-[62%] textos negro"
            />
          </div>
        </div>

        {/* Botón Confirmar */}
        <div className="flex justify-end px-2 mt-5">
          <button className="bg-[#00733C] h4 blanco px-2 py-1 rounded-[4px] flex items-center gap-2">
            Confirmar 
            <img src="/svg/agregar.svg" alt="" />
          </button>
        </div>
      </Drawer>
    </div>
  );
};

NuevoCliente.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default NuevoCliente;
