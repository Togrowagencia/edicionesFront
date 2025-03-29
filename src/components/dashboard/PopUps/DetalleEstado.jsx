import React, { useState } from "react";
import { Drawer } from "antd";
import PropTypes from "prop-types";

const DetalleEstado = ({ isOpen, onClose }) => {
    // Estado para la cantidad recibida (ejemplo con valor fijo)
    const [cantidadRecibida, setCantidadRecibida] = useState(0);
    const cantidadARecibir = 12; // Ejemplo con valor fijo

    const handleIncrement = () => {
        setCantidadRecibida(prev => prev + 1);
    };

    const handleDecrement = () => {
        setCantidadRecibida(prev => Math.max(0, prev - 1));
    };

    return (
        <Drawer
            rootClassName="drawer-detalle"
            placement="top"
            onClose={onClose}
            open={isOpen}
            width={493}
            closable={false}
            headerStyle={{ display: "none" }}
            drawerStyle={{
                borderRadius: "10px",
                height: "100%",
            }}
        >
            {/* Botón de cierre */}
            <div style={{ position: "absolute", top: 20, right: 20, cursor: "pointer", display: "flex", gap: "1rem", }} >
                <img
                    onClick={onClose}
                    src="/public/svg/popup-ao/cerrar (2).svg"
                    alt="Cerrar"
                    className="w-6 h-6 mt-1"
                />
            </div>

            <div className="p-8 flex flex-col justify-center gap-8 h-full">
                <div className="flex w-full">
                    <div className="flex flex-col gap-3 items-start w-full">
                        <div>
                            <p className="gris-urbano textos">ISBN</p>
                            <p className="h4 negro">123432141</p>
                        </div>
                        <div>
                            <p className="gris-urbano textos">Obras a recibir</p>
                            <p className="h4 negro">Cien años de soledad</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-3 items-center">
                        <div>
                            <p className="gris-urbano textos">Cantidad a recibir</p>
                            <p className="h4 negro">{cantidadARecibir}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="gris-urbano textos">Cantidad recibida</p>
                            <div className="flex items-center">
                                <button
                                    onClick={handleDecrement}
                                    disabled={cantidadRecibida === 0}
                                    className="bg-gray-200 w-4 h-4 flex items-center justify-center rounded hover:bg-gray-300 disabled:opacity-50"
                                >
                                    -
                                </button>
                                <span className="textos w-8 text-center">{cantidadRecibida}</span>
                                <button
                                    onClick={handleIncrement}
                                    className="bg-gray-200 w-4 h-4 flex items-center justify-center rounded hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap-2 flex flex-col">
                    <p className="gris-urbano textos">Observaciones</p>
                    <textarea 
                        className="w-full h-full bg-[#EEE] textos-peques negro p-2 rounded-[10px]" 
                        placeholder="faltaron 2 obras y una obra llego en mal estado" 
                    />
                </div>
                <div className="flex gap-2 w-full justify-center items-end h-full">
                    <button className="bg-[#00733C] flex px-2 py-1 rounded-[3px] gap-2 justify-center items-center">
                        <p className="h4 blanco">Confirmar</p>
                        <img src="/svg/gestiondeobras/agregar(2).svg" alt="" />
                    </button>
                    <button onClick={onClose} className="bg-[#222] flex px-2 py-1 rounded-[3px] gap-2 justify-center items-center">
                        <p className="h4 blanco">Cancelar</p>
                        <img src="/svg/gestiondeobras/cancelar.svg" alt="" />
                    </button>
                </div>
            </div>
        </Drawer>
    );
};

DetalleEstado.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default DetalleEstado;