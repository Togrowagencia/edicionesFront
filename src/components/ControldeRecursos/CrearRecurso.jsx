import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import BotonAgregar from '../inputs/BotonAgregar';
import Roles from '../Data/UsuariosyRoles/Roles';
import Tiendas from '../Data/UsuariosyRoles/Tienda';

const AgregarRecurso = ({ isPopupOpen, handlePopupClose }) => {
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

    // Manejo de cambios en inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Manejo de imagen de usuario
    const [image, setImage] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
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
            bodyStyle={{ padding: '16px' }}
            drawerStyle={{ borderRadius: "10px 10px 10px 10px", height: "100%" }}
        >
            {/* Botón de cierre personalizado */}
            <div className="absolute top-4 right-4 cursor-pointer" onClick={handlePopupClose}>
                <img src="/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6" />
            </div>

            {/* Título del Drawer */}
            <div className="flex items-center space-x-2 px-4 mb-4">
                <h2 className="h3 text-[#00733C]">Detalles de la tienda</h2>
                <img src="/svg/ControldeVentas/CdV.svg" alt="Icono" className="w-6 h-6" />
            </div>

            {/* Imagen de Tienda */}
            <div className="w-full flex items-center mt-3 px-4">
                <div className="w-[60px] h-[60px] rounded-full flex justify-center overflow-hidden border-[#00733C] border p-[6px]">
                    <img src={image || "/svg/usuario.svg"} className="w-[35px] h-[45px] object-contain" alt="Imagen de usuario" />
                </div>
                <div className="rounded-full bg-[#00733C] ml-[-20px] flex items-center justify-center w-[23px] h-[22px] mt-[-50px]">
                    <input type="file" id="file" className="hidden" onChange={handleFileChange} />
                    <label htmlFor="file">
                        <img src="/svg/camara.svg" className="w-[14px] h-[12px]" alt="Subir foto" />
                    </label>
                </div>
                <div className="flex flex-col ml-[10px] gap-2 w-[80%]">
                    <p className="text-lg font-semibold">{formData.nombre}</p>
                    <p className="text-sm text-gray-500">{formData.ciudad}</p>
                </div>
            </div>

            {/* Formulario */}
            <div className="flex flex-wrap gap-4 bg-white rounded-lg w-full px-4 mt-5">
                {[
                    { label: 'Nombre de la tienda', name: 'nombre', type: 'text', placeholder: '' },
                    { label: 'Dirección', name: 'direccion', type: 'text' },

                ].map((field, index) => (
                    <div key={index} className="flex items-center border-b border-gray-300 w-full">
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
                                <option value="">Seleccione</option>
                                {field.options.map((option, i) => (
                                    <option key={i} value={option}>{option}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type || 'text'}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleInputChange}
                                placeholder={field.placeholder}
                                className="pl-[10px] focus:outline-none bg-transparent dark textos"
                            />
                        )}
                    </div>
                ))}
            </div>


            <div className="grid grid-cols-2 gap-4 bg-white rounded-lg w-full px-4 mt-5">
                {[
                    { label: 'Correo', name: 'correo', type: 'email', placeholder: 'correo@correo.com' },
                    { label: 'Ciudad', name: 'ciudad', type: 'text' },

                ].map((field, index) => (
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
                                <option value="">Seleccione</option>
                                {field.options.map((option, i) => (
                                    <option key={i} value={option}>{option}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type || 'text'}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleInputChange}
                                placeholder={field.placeholder}
                                className="pl-[10px] focus:outline-none bg-transparent dark textos"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Botón de acción */}
            <div className="flex justify-end pr-4 pt-5">
                <BotonAgregar texto="Agregar usuario" />
            </div>
        </Drawer>
    );
};

AgregarRecurso.propTypes = {
    isPopupOpen: PropTypes.bool.isRequired,
    handlePopupClose: PropTypes.func.isRequired,
};

export default AgregarRecurso;
