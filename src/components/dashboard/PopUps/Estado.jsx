import React from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import Data from "../../Data/Estado/Data";

const Estado = ({ isPopupOpen, handlePopupClose, onOpenNextPopup }) => {
    const handleOpenDetalle = () => {
        handlePopupClose(); // Cierra el popup actual (Estado)
        setTimeout(() => {
            onOpenNextPopup(); // Abre DetalleEstado después del delay
        }, 300);
    };

    return (
        <Drawer
            placement="right"
            onClose={handlePopupClose}
            open={isPopupOpen}
            width={1483}
            closable={false}
            headerStyle={{ display: "none" }}
            drawerStyle={{
                borderRadius: "10px",
            }}
        >
            {/* Botón de cierre */}
            <div style={{ position: "absolute", top: 20, right: 20, cursor: "pointer", display: "flex", gap: "1rem", }} >
                <img
                    onClick={handlePopupClose}
                    src="/public/svg/popup-ao/cerrar (2).svg"
                    alt="Cerrar"
                    className="w-6 h-6 mt-1"
                />
            </div>

            {/* Contenido */}
            <div className="p-6 flex">
                <img src="/svg/header/central.svg" alt="Pendiente" />
                <p className="h3 py-2 px-4 verde-corporativo">Items a recibir desde central</p>
            </div>

            <table className="w-[98%] ml-3 border-collapse">
                <thead>
                    <tr className="border-b border-gray-200 text-left">
                        <th className="gris-urbano textos px-2 py-2">ID</th>
                        <th className="gris-urbano textos px-2 py-2">ISBN</th>
                        <th className="gris-urbano px-2 textos py-2">Nombre de la obra</th>
                        <th className="gris-urbano px-2 textos py-2">Editorial</th>
                        <th className="gris-urbano px-2 textos py-2">Género</th>
                        <th className="gris-urbano px-2 textos py-2">Proveedor</th>
                        <th className="gris-urbano px-2 textos py-2">Salida desde punto de venta</th>
                        <th className="gris-urbano px-2 textos py-2">Llegada al punto de venta</th>
                        <th className="gris-urbano px-2 textos py-2">Cantidad total</th>
                        <th className="gris-urbano px-2 textos py-2">Observaciones</th>
                    </tr>
                </thead>

                <tbody>
                    {Data.map((item, index) => (
                        <tr key={index} className="rounded">
                            <td className="px-2 py-2 textos-bold verde-eco">{item.ID}</td>
                            <td className="px-2 py-2 textos-bold negro">{item.ISBN}</td>
                            <td className="px-2 py-2 textos-bold negro">{item.Nombredelaobra}</td>
                            <td className="px-2 py-2 textos-bold negro">{item.Editorial}</td>
                            <td className="px-2 py-2 textos-bold negro">{item.Genero}</td>
                            <td className="px-2 py-2 textos-bold negro">{item.Proveedor}</td>
                            <td className="px-2 py-2 textos-bold negro">{item.Salidadesdepuntodeventa}</td>
                            <td className="px-2 py-2 textos-bold negro">{item.Llegadaalpuntodeventa}</td>
                            <td className="px-2 py-2 textos-bold negro">{item.Cantidadtotal}</td>
                            <td className="px-0 py-2">
                                <button
                                    onClick={handleOpenDetalle}
                                    className="py-1 px-2 h4 blanco bg-[#00733C] rounded-[3px] flex justify-center items-center"
                                >
                                    Ver detalle
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex items-center p-4 justify-end w-full">
                <div className="flex items-center gap-2 bg-[#EEE] p-2 rounded-[3px] justify-end w-auto">
                    <img src="/public/svg/popup-ao/NDLO.svg" alt="" />
                    <p className="textos negro">
                        Cantidad a trasladar <span className="textos-bold mx-3">450</span>
                    </p>
                </div>
            </div>

            <div className="flex gap-4 w-full justify-end p-4 items-end">
                <button className="bg-[#00733C] flex px-2 py-1 rounded-[3px] gap-2">
                    <p className="h4 blanco">Confirmar llegada</p>
                    <img src="/svg/gestiondeobras/agregar(2).svg" alt="" />
                </button>
                <button onClick={handlePopupClose} className="bg-[#222] flex px-2 py-1 rounded-[3px] gap-2">
                    <p className="h4 blanco">Cancelar</p>
                    <img src="/svg/gestiondeobras/cancelar.svg" alt="" />
                </button>
            </div>
        </Drawer>
    );
};

Estado.propTypes = {
    isPopupOpen: PropTypes.bool.isRequired,
    handlePopupClose: PropTypes.func.isRequired,
    onOpenNextPopup: PropTypes.func.isRequired, // Asegúrate de incluir esta prop
};

export default Estado;