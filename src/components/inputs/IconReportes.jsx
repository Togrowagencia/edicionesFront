import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function IconReportes() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); 

    const stores = [
        { name: "Informe global de ventas", path: "/informe-global" },
        { name: "Inventario por punto de venta", path: "/detalles-inventario" },
        { name: "Ventas especificas por punto de venta", path: "/ventas-especificas" },
        { name: "Egresos por tienda", path: "/egresos" },
        { name: "Informe de consignacion", path: "/consignacion" },
        { name: "Ingresos por tienda", path: "/ingresos" },
        { name: "Rentabilidad por producto", path: "/rentabilidad" },
        { name: "Ventas por obra", path: "/ventas-obra" },
        { name: "Reporte de facturación", path: "/facturacion" },
        { name: "Reporte de movimientos", path: "/movimientos" },
        { name: "Historico de ventas", path: "/historico" },
        { name: "Reporte cuotas a credito", path: "/cuotas-credito" },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (path) => {
        navigate(path); 
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="p-1 focus:outline-none"
                aria-label="Menú de reportes"
            >
                <img 
                    src="/svg/header/stads.svg" 
                    alt="Icono de reportes"
                    className="block" 
                    style={{ minWidth: '32px' }} 
                />
            </button>

            {/* Menú desplegable */}
            {isOpen && (
                <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-[10px] shadow-lg z-50 w-[283px]">
                    {stores.map((store, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(store.path)}
                            className="block w-full text-left px-3 py-1 hover:bg-[#00733C] hover:text-white textos negro hover:rounded-[10px]"
                        >
                            {store.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default IconReportes;