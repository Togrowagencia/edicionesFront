/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import BotonAgregar from '../inputs/BotonAgregar';
import Roles from '../Data/UsuariosyRoles/Roles'
import Tiendas from '../Data/UsuariosyRoles/Tienda';


const AgregarUsuario = ({ isPopupOpen, handlePopupClose }) => {
  // Add state for form values
  const [formData, setFormData] = useState({
    telefono: '',
    nombre: '',
    correo: '',
    cargo: '',
    tienda: '',
    documento: '',
    password: '',
    rol: '',
    descuento: ''
  });
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={{ position: 'relative' }}>
      <Drawer
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        width={548}
        closable={false}
        headerStyle={{ display: 'none' }}
        drawerStyle={{ borderRadius: '10px 10px 10px 10px', height: '100%' }}
      >
        {/* Botón de cierre personalizado */}
        <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }} onClick={handlePopupClose}>
          <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6 mt-[10%]" />
        </div>

        <div className="flex items-center gap-2">
          <h2 className="text-2xl mb-4 h3 verde-corporativo ml-[10px]">Crear usuario</h2>
          <img src="/public/svg/ControldeVentas/CdV.svg" alt="Icono" className="mb-[15px] ml-[20px]" />
        </div>

        <div className="flex flex-col items-center mt-[38px]">
            <div className='w-full h-[10%] flex items-center gap-2 mb-[20px] relative mt-[16px] ml-[57px]'>
                <p className='h4 verde-corporativo'>Compra de la obra</p>
            </div>
        </div>

        {/*inputs*/}

        <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-lg max-w-xl mx-auto">
          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500 w-1/3">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
              placeholder="+57 000 000 0000"
            />
          </div>
          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500 w-1/3">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
              placeholder="Nombre completo"
            />
          </div>
          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500">Correo</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
              placeholder="ejemplo@correo.com"
            />
          </div>
          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500">Cargo</label>
            <input
              type="text"
              name="cargo"
              value={formData.cargo}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
              placeholder="Cargo"
            />
          </div>
          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500">Asignar a tienda</label>
            <select
              name="tienda"
              value={formData.tienda}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
            >
              <option value="">Seleccione una tienda</option>
              {Tiendas.map((tienda) => (
                <option key={tienda.id} value={tienda.nombre}>
                  {tienda.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500">Documento de Identidad</label>
            <input
              type="text"
              name="documento"
              value={formData.documento}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
              placeholder="0.000.000.000"
            />
          </div>
          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500">Rol</label>
            <select
              name="rol"
              value={formData.rol}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
            >
              {Roles.map((rol) => (
                <option key={rol.id} value={rol.nombre}>
                  {rol.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between border-b border-gray-300">
            <label className="block text-gray-500">Descuento</label>
            <input
              type="text"
              name="descuento"
              value={formData.descuento}
              onChange={handleInputChange}
              className="w-full focus:outline-none bg-transparent"
              placeholder="0%"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-end pr-[50px]">
          <BotonAgregar texto="Agregar usuario" />
        </div>
      </Drawer>
    </div>
  );
};

export default AgregarUsuario;