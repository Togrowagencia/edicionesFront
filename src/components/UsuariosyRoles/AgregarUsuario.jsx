/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import BotonAgregar from '../inputs/BotonAgregar';
import Roles from '../Data/UsuariosyRoles/Roles';
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
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [image, setImage] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Establecer la URL de la imagen en el estado
      };
      reader.readAsDataURL(file); // Convertir el archivo a URL de base64
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <Drawer
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        width={555}
        closable={false}
        bodyStyle={{ padding: '16px' }}
        drawerStyle={{ borderRadius: '10px 10px 10px 10px', height: '100%' }}
      >
        {/* Botón de cierre personalizado */}
        <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer'}} onClick={handlePopupClose}>
          <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6" />
        </div>
        <div className="flex items-center space-x-2 px-4 mb-4">
          <h2 className="text-2xl font-semibold verde-corporativo">Crear usuario</h2>
          <img src="/public/svg/ControldeVentas/CdV.svg" alt="Icono" className="w-6 h-6" />
        </div>

        {/* Imagen del usuario */}
        <div className='w-full flex items-center h-[10%] mt-3 px-4'>

        <div className="w-[60px] h-[60px] rounded-full flex justify-center overflow-hidden border-[#00733C] border-[1px] p-[6px]">
          <img src={image ? image : "/svg/usuario.svg"} className="w-[35px] h-[45px] object-contain bg-center" alt="Imagen de usuario"/>
        </div>

          <div className='rounded-full bg-[#00733C] ml-[-20px] flex items-center justify-center w-[23px] h-[22px] mt-[-50px]'>
            <input type="file" id='file' className='hidden' onChange={handleFileChange}/>
            <label htmlFor="file">
              <img src="/svg/camara.svg" className="w-[14px] h-[12px]" />
            </label>
          </div>

          <div className='flex flex-col ml-[10px] gap-2 justify-center w-[80%]'>
            <p className='h3'>{formData.nombre}</p>
            <p className='textos-bold gris-perla'>{formData.cargo}</p>
          </div>

        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 bg-white rounded-lg w-full px-4 overflow-hidden mt-[20px]">
          {[
            { label: 'Teléfono', name: 'telefono', type: 'text', placeholder: '000 000 0000' },
            { label: 'Nombre', name: 'nombre', type: 'text' },
            { label: 'Correo', name: 'correo', type: 'email', placeholder: 'correo@correo.com' },
            { label: 'Cargo', name: 'cargo' },
            { label: 'Asignar a tienda', name: 'tienda', isSelect: true, defaultOption: 'Seleccione una tienda', options: Tiendas.map(tienda => tienda.nombre) },
            { label: 'Documento de Identidad', name: 'documento', placeholder: '0.000.000' },
            { label: 'Contraseña', name: 'password', type: 'password', placeholder: '****' },
            { label: 'Rol', name: 'rol', isSelect: true, defaultOption: 'Seleccione un rol', options: Roles.map(rol => rol.nombre) },
            { label: 'Descuento', name: 'descuento', type: 'text', placeholder: '%' }
          ]
          .map((field, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300">
              <label className="block gris-perla flex-shrink-0 w-auto">
                {field.label}
              </label>
              {field.isSelect ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none bg-transparent"
                >
                  <option value="">{field.defaultOption || 'Seleccione'}</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="pl-[10px] focus:outline-none bg-transparent negro textos"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-end pr-[10px] pt-[20px]">
          <BotonAgregar texto='Agregar usuario'/>
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
